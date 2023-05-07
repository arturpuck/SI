<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\User;
use Closure;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class GetProstituteAnnouncementRequest extends FormRequest
{

    private const ALLOWED_DETAILS_LEVELS = [
        'basic',
        'complete'
    ];

    private const AUTHENTICATED_USER_LABEL = 'authenticatedUser';
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function prepareForvalidation()
    {
        
        $this->merge(['detailsLevel' => $this->query('detailsLevel')]);
        $this->merge(['userID' => $this->query('userID')]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'detailsLevel' => ['required', Rule::in(self::ALLOWED_DETAILS_LEVELS)],
            'userID' => function (string $attribute, mixed $value, Closure $fail) {
                if ($value === self::AUTHENTICATED_USER_LABEL) {
                    return;
                }
        
                if(empty($value)) {
                    return;
                }
        
                if (is_numeric($value) && User::find($value)) {
                    return;
                }
        
                return $fail('Invalid value for user_id');
            }
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->messages()->all(), 400));
    }
}
