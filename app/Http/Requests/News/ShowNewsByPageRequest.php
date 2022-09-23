<?php

namespace App\Http\Requests\News;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\PaginationDoesNotExceedAvailableItems;
use App\News;
use App\Handlers\News\ShowNewsByPageHandler;
use Illuminate\Contracts\Validation\Validator;


class ShowNewsByPageRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'pageNumber' => [
                'required', 
                'min:1', 
                'integer', 
                new PaginationDoesNotExceedAvailableItems(News::class, ShowNewsByPageHandler::NEWS_PER_PAGE)
            ]
        ];
    }

    public function validationData()
    {
        $pageNumberSegment = last($this->segments());
        $pageNumber = is_numeric($pageNumberSegment) ? intval($pageNumberSegment) : 1;
        return compact('pageNumber');
    }

    public function failedValidation(Validator $validator)
    {
        abort(404);
    }
}
