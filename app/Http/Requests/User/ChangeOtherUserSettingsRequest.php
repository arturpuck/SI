<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ChangeOtherUserSettingsRequest extends FormRequest
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
            'shows_birthday' => ['required', 'boolean'],
            'password' => ['required', 'current_password', 'min:3', 'max:20']
        ];
    }

    public function messages(){

        return [
            'shows_birthday.required' => 'the_shows_birthday_field_is_missing',
            'shows_birthday.boolean' => 'the_shows_birthday_field_must_be_a_boolean_value',
            'password.required' => 'password_is_required',
            'password.current_password' => 'the_given_password_is_incorrect',
            'password.min' => 'password_must_contain_at_least_3_characters',
            'password.max' => 'password_must_not_exceed_20_characters'
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->messages()->all(),400));
    }
}
