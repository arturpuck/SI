<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ChangeAvatarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return \Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'avatar_from_hard_drive' => ['nullable','required','image', 'mimes:jpeg,png,jpg,gif,svg,webp,bmp', 'dimensions:max_width:128,max_height:128']
        ];
    }

    public function messages(){
        
        return [
            'avatar_from_hard_drive.required' => 'no_image_has_been_selected',
            'avatar_from_hard_drive.mimes' => 'invalid_image_extension',
            'avatar_from_hard_drive.dimensions' => 'invalid_image_dimensions',
            'avatar_from_hard_drive.image' => 'the_file_selected_from_hard_drive_is_not_an_image',
        ];
    }
}
