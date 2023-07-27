<?php

namespace App\Http\Requests\Prostitution;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\DayOfWeek;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use App\UserType;
use App\Rules\Prostitution\WorkingHoursRangeIdentifiers;
use App\Rules\Prostitution\HourOfStartIsBeforeHourOfEnd;
use App\Rules\Prostitution\EveryPaymentFormContainsOnlyRequiredFields;
use App\ProstitutionAnnouncement;
use Illuminate\Auth\Access\AuthorizationException;
use App\Traits\Requests\ProstitutionAnnouncementFormFieldsValidation;


class CreateProstitutionAnnouncementRequest extends FormRequest
{
    use ProstitutionAnnouncementFormFieldsValidation;

    public const STANDARD_SEXUAL_SERVICE_OPTIONS = [
        'included',
        'aditional_payment',
    ];

    public const BLOWJOB_SERVICE_OPTIONS = [
        'only_in_condom',
        'without_condom',
        'without_condom_with_aditional_payments',
    ];

    const POSITIVE_NUMERIC = [
        'numeric',
        'min:1'
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
        return !ProstitutionAnnouncement::query()
                ->assignedToCurrentLoggedUser()
                ->onlyAwaitingVerification()
                ->exists();
    }

    protected function prepareForValidation()
    {
        $this->getWorkingHours();
        $this->getWorkingDays();
        $this->getPaymentForms();
        $this->getPhotos();
        $this->getSecondaryServices();
        $this->getVerificationToken();
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
            'phoneNumber' => ['regex:/^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$/', 'min:7', 'max:16'],
            'birthDate' => ['required', 'date', 'before:-18 years', 'after:-120 years'],
            'description' => ['string', 'max:2000'],
            'userTypeId' => ['required', 'exists:user_types,id'],
            'sexualOrientationId' => ['exists:sexual_orientations,id'],
            'titsSize' => ['min:1', 'max:8'],
            'heightInCentimeters' => ['numeric', 'min:90', 'max:270'],
            'weightInKilograms' => ['numeric', 'min:30', 'max:800'],
            'titsSize' => ['numeric', 'min:0', 'max:8', Rule::prohibitedIf(fn() => UserType::find($this->get('userType'))?->isMale())],
            'hairColor' => [Rule::in(self::HAIR_COLORS)],
            
            'tripsPreference' => ['boolean', Rule::in('1')],
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

            'analAditionalPayment' => self::POSITIVE_NUMERIC,
            'vaginalSexAditionalPayment' => self::POSITIVE_NUMERIC,
            'blowjobAditionalPayment' => self::POSITIVE_NUMERIC,
            'oralCreampieAditionalPayment' => self::POSITIVE_NUMERIC,
            'cumOnFaceAditionalPayment' => self::POSITIVE_NUMERIC,
            'massageAditionalPayment' => self::POSITIVE_NUMERIC,
            'pussyLickingAditionalPayment' => self::POSITIVE_NUMERIC,
            'clientRimmingAditionalPayment' => self::POSITIVE_NUMERIC,
            'kissingAditionalPayment' => self::POSITIVE_NUMERIC,
            'cumOnBodyAditionalPayment' => self::POSITIVE_NUMERIC,
            'cumSwallowAditionalPayment' => self::POSITIVE_NUMERIC,

            'secondaryServices' => ['array'],
            'secondaryServices.*' => Rule::in(self::SECONDARY_SERVICES),

            'paymentForms' => ['required', 'array', new EveryPaymentFormContainsOnlyRequiredFields()],
            'paymentForms.*.unit' => Rule::in(self::AVAILABLE_SERVICE_FORMS),
            'paymentForms.*.price' => self::POSITIVE_NUMERIC,
            'photos' => ['required', 'array'],
            'photos.*' => ['image', 'max:1024'],
            // 'prostitutePhotoVerificationToken' => ['required', 'string', 'min:4', 'max:8'],
            'workingHours' => ['array', new WorkingHoursRangeIdentifiers(), new HourOfStartIsBeforeHourOfEnd()],
            'workingHours.*.since' => ['date_format:H:i', 'required_if:workingHours,!=,null'],
            'workingHours.*.until' => ['date_format:H:i', 'required_if:workingHours,!=,null'],
            'workingDays' => ['required_if:workingHours,!=,null', 'array'],
            'workingDays.*' => ['required_if:workingHours,!=,null', new DayOfWeek()],
            'cityId' => ['required', 'exists:cities,id'],
            'regionId' => ['required', 'exists:voivodeships,id']
        ];
    }

    public function messages()
    {
        return [
            'titsSize.prohibited' => 'You cannot provide tits size when user type is male',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->messages()->all(), 400));
    }

    protected function failedAuthorization()
    {
        throw new AuthorizationException('announcement_awaits_validation');
    }
}
