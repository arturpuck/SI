<?php

namespace App\Http\Requests\Movies;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AddMovieCommentRequest extends FormRequest
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
            'movie_id' => ['required', 'exists:movies,id'],
            'userNickname' => ['nullable', Rule::requiredIf(!\Auth::check()), 'max:50'],
            'body' => ['required', 'max:1000'],
            'commentsPerPage' => ['required', 'integer', 'min:0']
        ];
    }
}
