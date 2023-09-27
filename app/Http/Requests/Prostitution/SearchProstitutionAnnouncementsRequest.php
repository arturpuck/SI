<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class SearchProstitutionAnnouncementsRequest extends FormRequest
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

    public function validationData()
    {
        $validationData = [];
        if($this->query->has('userTypeId')) {
            $validationData['userTypeId'] = $this->query->get('userTypeId');
        }

        if($this->query->has('cityId')) {
            $validationData['cityId'] = $this->query->get('cityId');
        }

        if($this->query->has('voivodeshipId')) {
            $validationData['voivodeshipId'] = $this->query->get('voivodeshipId');
        }
        return $validationData;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->messages()->all(), 400));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'cityId' => 'exists:cities,id',
            'userTypeId' => 'exists:user_types,id',
            'voivodeshipId' => 'exists:voivodeships,id'
        ];
    }
}
