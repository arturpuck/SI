<?php

namespace App\Http\Requests\PornDictionary;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\PornDictionary\ValidPornDictionaryRange;

class ShowPornDictionaryRequest extends FormRequest
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
            'range' => new ValidPornDictionaryRange()
        ];
    }

    public function validationData() : array
    {
        return ['range' => $this->route('range')];
    }
}
