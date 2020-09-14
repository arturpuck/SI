<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class AJAXLoginValidationRequest extends FormRequest
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
       $data = parent::all();
       $data['login'] = \Request::segment(2);
       return $data;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'login' => 'unique:users'
        ];
    }

    public function failedValidation(Validator $validator)
    {
       throw new HttpResponseException(response('invalid', 400)->header('Content-Type', 'text/plain'));
    }
}
