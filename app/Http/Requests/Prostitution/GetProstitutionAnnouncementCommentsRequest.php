<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;

class GetProstitutionAnnouncementCommentsRequest extends FormRequest
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
            'announcementUid' => ['required', 'exists:prostitution_announcements,uniqueID']
        ];
    }

    public function validationData() 
    {
        return [
            'announcementUid' => $this->query('announcementUid')
        ];
    }
}
