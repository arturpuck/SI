<?php

namespace App\Http\Requests\API\Movies;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class RequiredMovieFilesValidationRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'range' => ['required', 'integer', 'min:1'],
            'offset' => ['nullable', 'integer', 'min:1']
        ];
    }

    public function validationData()
    {
        return ['offset' => $this->query('type'), 'range' => $this->query('range')];
    }

    public function failedValidation(Validator $validator) : never
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->messages()->all()], 400));
    }
}
