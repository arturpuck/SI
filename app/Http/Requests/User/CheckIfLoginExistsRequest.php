<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CheckIfLoginExistsRequest extends FormRequest
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

    public function all($keys = null)
   {
       return ['login' => $this->route('login')];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'login' => 'required'
        ];
    }

    public function failedValidation(Validator $validator)
    {
       throw new HttpResponseException(response($validator->errors->all(), 400)->header('Content-Type', 'text/plain'));
    }

    public function messages() : array {
        return ['login' => __('login_is_missing')];
    }
}
