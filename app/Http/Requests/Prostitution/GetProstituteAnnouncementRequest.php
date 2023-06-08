<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\User;
use Closure;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class GetProstituteAnnouncementRequest extends FormRequest
{

    private const ALLOWED_DETAILS_LEVELS = [
        'basic',
        'complete'
    ];

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function validationData()
    {
        return [
            'detailsLevel' => $this->query('detailsLevel'),
            'announcementUniqueIdentifier' => $this->query('announcementUniqueIdentifier'),
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'detailsLevel' => ['required', Rule::in(self::ALLOWED_DETAILS_LEVELS)],
            'announcementUniqueIdentifier' => ['nullable', 'exists:prostitution_announcements,universally_unique_identifier'],
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->messages()->all(), 400));
    }
}
