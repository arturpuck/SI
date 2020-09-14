<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class EditUserDataRequest extends FormRequest
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
            'email' => ['email','unique:users'],
            'user_type_id' => ['nullable','exists:user_types,id'],
            'sexual_orientation_id' => ['nullable','exists:sexual_orientations,id'],
            'password' => ['required', 'current_password', 'min:3', 'max:20']
        ];
    }

    public function messages()
    {
        return [
           'email.email' => 'email_is_invalid',
           'email.unique' => 'email_has_already_been_taken',
           'user_type_id.exists' => 'the_user_type_is_incorrect',
           'sexual_orientation_id.exists' => 'the_sexual_orientation_is_incorrect',
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
