<?php

namespace App\Http\Requests\Pornstars;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class AddPornstarCommentRequest extends FormRequest
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
            'body' => ['required', 'max:1000'],
            'userNickname' => ['nullable', Rule::requiredIf(!\Auth::check()), 'max:50'],
            'pornstar_id' => ['required', 'exists:pornstars,id'],
            'parent_comment_id' => ['nullable' => 'exists:pornstar_comments,id']
        ];
    }


    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->messages()->all(),400));
    }
}
