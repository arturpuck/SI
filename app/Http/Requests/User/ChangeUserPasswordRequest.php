<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ChangeUserPasswordRequest extends FormRequest
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
            'password' => ['required', 'current_password', 'min:3', 'max:20'],
            'new_password' => ['required', 'min:3', 'max:20', 'confirmed'],
            'new_password_confirmation' => ['required', 'min:3', 'max:20', 'confirmed']
        ];
    }

    public function messages(){

        return [
           'password.required' => 'password_is_required',
           'password.current_password' => 'the_given_password_is_incorrect',
           'password.min' => 'password_must_contain_at_least_3_characters',
           'password.max' => 'password_must_not_exceed_20_characters',
           'new_password.required' => 'new_password_is_required',
           'new_password.min' => 'new_password_must_contain_at_least_3_characters',
           'new_password.max' => 'new_password_must_not_exceed_20_characters',
           'new_password.confirmed' => 'the_given_new_passwords_do_not_match',
           'new_password_confirmation.required' => 'new_password_confirmation_is_required',
           'new_password_confirmation.min' => 'new_password__confirmation_must_contain_at_least_3_characters',
           'new_password_confirmation.max' => 'new_password__confirmation_must_not_exceed_20_characters',
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->messages()->all(),400));
    }
}
