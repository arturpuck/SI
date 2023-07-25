<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;
use App\Enum\Prostitution\AnnouncementPhotoType;


class GetAnnouncementPhotoForEditorPanelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'announcementUniqueIdentifier' => ['required'],
            'fileName' => ['required'],
            'status' => ['required', 
                Rule::in([
                    AnnouncementPhotoType::VALIDATED->value,
                    AnnouncementPhotoType::AWAITING_VERIFICATION->value
                ])]
        ];
    }

    public function validationData()
    {
        return [
            'announcementUniqueIdentifier' => $this->query('announcementUniqueIdentifier'),
            'fileName' => $this->query('fileName'),
            'status' => $this->query('status'),
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->messages()->all(), 400));
    }
}
