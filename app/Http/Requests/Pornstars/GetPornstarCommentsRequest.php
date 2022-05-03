<?php

namespace App\Http\Requests\Pornstars;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class GetPornstarCommentsRequest extends FormRequest
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
            'pornstar_id' => ['nullable', 'exists:pornstars,id'],
            'page' => ['required', 'integer', 'min:1'],
            'comments_per_page' => ['required', 'integer', 'min:1'],
            'parent_comment_id' => ['nullable', 'exists:pornstar_comments,id']
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->messages()->all(),400));
    }
}
