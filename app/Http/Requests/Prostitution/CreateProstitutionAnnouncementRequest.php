<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\DayOfWeek;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class CreateProstitutionAnnouncementRequest extends FormRequest
{
    public const STANDARD_SEXUAL_SERVICE_OPTIONS = [
        'included',
        'aditional_payment',
        'never'
    ];

    public const BLOWJOB_SERVICE_OPTIONS = [
        'only_in_condom',
        'without_condom',
        'without_condom_with_aditional_payments',
        'never'
    ];

    const NON_NEGATIVE_NUMERIC = [
        'numeric',
        'min:0'
    ];

    const SECONDARY_SERVICES = [
        'tittfuck',
        'handjob',
        'strapon', 
        'footjob', 
        'pissing', 
        'spanking',  
        'fingering', 
        'role_playing',
        '69',
        'licking_balls',
        'stockings',
        'pantyhose',
        'high_heels',
        'insults',
        'hugging', 
        'shared_bath', 
        'sex_with_2_males', 
        'GangBang',
        'outside_together',
        'streaptease', 
        'dancing', 
        'double_penetration', 
        'deep_throat', 
        'whips',  
        'latex',
        'femdom'
    ];

    const AVAILABLE_SERVICE_FORMS = [
        'for_hour',
        'for_30_minutes', 
        'for_15_minutes',
        'for_night',
        'for_blowjob'  ,
        'until_first_cumshot',
        'for_2_hours',
        'for_3_hours',
    ];

    const HAIR_COLORS = [
        'blonde',
        'dark',
        'bronze',
        'gray',
        'red',
        'other'
    ];


    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge(
            [
            'working_days' => array_keys($this->get('workingHours') ?? []),
            'range_identifiers' => $this->getRangeIdentifiers()
            ]
        );
    }

    protected function getRangeIdentifiers() : array
    {
        if(!$this->has('workingHours')) {
            return [];
        }
        $identifiers = [];

        foreach($this->get('workingHours') as $weekDay) {
            array_push($identifiers, array_diff(array_keys($weekDay), ...$identifiers));
        }
        return $identifiers;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nickname' => ['required', 'string', 'min:3', 'max:30'],
            'phone_number' => ['regex:/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g', 'min:7', 'max:16'],
            'birth_date' => ['required', 'date', 'before:-18 years', 'after:-120 years'],
            'description' => ['string', 'max:2000'],
            'userType' => ['required', 'exists:user_types,id'],
            'sexualOrientation' => ['exists:sexual_orientations,id'],
            'titsSize' => ['min:0', 'max:8'],
            'height' => ['numeric', 'min:90', 'max:270'],
            'weight' => ['numeric', 'min:30', 'max:800'],
            'titsSize' => ['numeric', 'min:0', 'max:8', 'prohibited_if:userType,male'],
            'hairColor' => [Rule::in(self::HAIR_COLORS)],
            'tripsPreference' => ['boolean'],

            'massagePreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'vaginalSexPreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'oralCreampiePreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'cumSwallowPreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'cumOnFacePreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'analPreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'pussyLickingPreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'clientRimmingPreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'kissingPreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'cumOnBodyPreference' => [Rule::in(self::STANDARD_SEXUAL_SERVICE_OPTIONS)],
            'blowjobPreference' => [Rule::in(self::BLOWJOB_SERVICE_OPTIONS)],

            'analAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'vaginalSexAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'blowjobAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'oralCreampieAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'cumOnFaceAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'massageAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'pussyLickingAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'clientRimmingAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'kissingAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'cumOnBodyAditionalPayment' => self::NON_NEGATIVE_NUMERIC,
            'cumSwallowAditionalPayment' => self::NON_NEGATIVE_NUMERIC,

            'selectedSecondaryServices.*' => Rule::in(self::SECONDARY_SERVICES),
            'selectedSecondaryServices' => ['required', 'array'],

            'selectedServiceFormsToPayFor' => ['required', 'array'],
            'selectedServiceFormsToPayFor.*.unit' => Rule::in(self::AVAILABLE_SERVICE_FORMS),
            'selectedServiceFormsToPayFor.*.price' => self::NON_NEGATIVE_NUMERIC,
            'photos.*' => ['required', 'image'],
            'workingHours' => ['required', 'array'],
            'workingHours.*.*.*' => ['required', 'date_format:H:i'],
            'working_days' => ['required', 'array'],
            'working_days.*' => [new DayOfWeek()],
            'range_identifiers' => ['required', 'array'],
            'range_identifiers.*' => [Rule::in(['since', 'until'])],
            'city' => ['required', 'exists:cities,id'],
            'voivodeship' => ['required', 'exists:voivodeships,id']
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json($validator->messages()->all(),400));
    }
}
