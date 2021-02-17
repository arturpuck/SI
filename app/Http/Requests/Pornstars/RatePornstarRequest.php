<?php

namespace App\Http\Requests\Pornstars;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class RatePornstarRequest extends FormRequest
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
            'pornstar_id' => ['required', 'exists:pornstars,id'],
            'rate' => ['required', 'integer', 'min:1','max:10']
        ];
    }

    public function messages(){

        return [
            'pornstar_id.required' => 'pornstar_id_is_missing',
            'pornstar_id.exists' => 'pornstar_with_given_id_does_not_exist',
            'rate.required' => 'rate_is_missing',
            'rate.integer' => 'rate_must_be_an_integer',
            'rate.min' => 'rate_must_be_greather_or_equal_1',
            'rate.max' => 'rate_must_be_less_or_equal_10'
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->messages()->all(),400));
    }
}
