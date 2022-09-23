<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CheckIfEmailExistsRequest extends FormRequest
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
        return ['email' => $this->route('email')];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => ['required', 'email']
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => __('email_is_missing'),
            'email.email' => __('email_has_incorrect_format')
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response($validator->messages()->all(), 400)->header('Content-Type', 'text/plain'));
    }
}
