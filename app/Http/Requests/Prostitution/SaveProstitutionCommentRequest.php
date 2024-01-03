<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\ProstituteAnnouncementComment;
use Illuminate\Auth\Access\AuthorizationException;

class SaveProstitutionCommentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (!\Auth::check()) {
            return false;
        }
        $userHasAlreadyAddedComment = ProstituteAnnouncementComment::whereHas('announcement', 
                fn($query) => $query->filterByUniversallyUniqueIdentifier($this->announcementUid)
                                                                            )
                                                                            ->where('user_id', \Auth::user()->id)
                                                                            ->exists();

        return !$userHasAlreadyAddedComment;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'announcementUid' => [
                'required', 
                'exists:prostitution_announcements,uniqueID',
            ],
            'commentBody' => ['required', 'string', 'max:1000']
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->messages()->all(), 400));
    }

    protected function failedAuthorization()
    {
        throw new AuthorizationException('Adding comments is limited to one comment for a one announcement. Only authenticated users can add comments', 403);
    }
}
