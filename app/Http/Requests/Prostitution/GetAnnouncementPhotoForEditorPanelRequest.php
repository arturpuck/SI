<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;


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
        ];
    }

    public function validationData()
    {
        return [
            'announcementUniqueIdentifier' => $this->query('announcementUniqueIdentifier'),
            'fileName' => $this->query('fileName'),
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->messages()->all(), 400));
    }
}
