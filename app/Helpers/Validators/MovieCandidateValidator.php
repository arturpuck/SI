<?php

namespace App\Helpers\Validators;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class MovieCandidateValidator
{

    private const ABUNDANCE_TYPES = [
        'one_male_one_female',
        'bukkake',
        'single_female',
        'lesbian',
        'group',
        'one_male_many_females',
        'GangBang',
        'one_female_two_males',
        'lesbianGroup'
    ];

    private const SMB_SIZES = [
        'small',
        'medium',
        'big'
    ];

    private const THICKNESS_SIZES = [
        'skinny',
        'medium',
        'fat'
    ];

    private const AGE_RANGES = [
        'teenagers',
        'young',
        'mature'
    ];

    private const HAIR_COLORS = [
        'dark',
        'blonde',
        'brown',
        'red'
    ];

    private const RACES = [
        'white',
        'asian',
        'ebony',
        'latin',
        'arabic'
    ];

    private const CUMSHOT_TYPES = [
        'on_face',
        'cum_swallow',
        'creampie',
        'anal_creampie',
        'on_tits',
        'on_pussy',
        'on_ass',
        'on_feet',
        'on_many_places',
        'on_other_body_parts',
        'exclude'
    ];

    private const CAMERA_STYLES = [
        'outside',
        'POV',
        'mixed'
    ];

    public static function getRules(): array
    {

        $sexTypeRule = ['nullable', 'integer', 'min:1', 'max:100'];
        $booleanRule = ['boolean', 'nullable'];

        $rules = [
            'title' => ['required', 'string', 'min:3', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],

            'abundance' => ['required', 'string', Rule::in(self::ABUNDANCE_TYPES)],
            'actress_tits_size' => ['string', 'nullable', Rule::in(self::SMB_SIZES)],
            'actress_ass_size' => ['string', 'nullable', Rule::in(self::SMB_SIZES)],
            'actress_thickness' => ['string', 'nullable', Rule::in(self::THICKNESS_SIZES)],
            'actress_age_range' => ['string', 'nullable', Rule::in(self::AGE_RANGES)],
            'actress_hair_color' => ['string', 'nullable', Rule::in(self::HAIR_COLORS)],
            'actress_race' => ['string', 'nullable', Rule::in(self::RACES)],
            'actress_nationality_id' => ['numeric', 'nullable', 'exists:nationalities,id'],
            'shows_shaved_pussy' => ['nullable', 'boolean'],
            'actor_cumshot_type' => ['string', 'nullable', Rule::in(self::CUMSHOT_TYPES)],
            'action_location_id' => ['integer', 'nullable', 'exists:locations,id'],
            'camera_style' => ['required', 'string', Rule::in(self::CAMERA_STYLES)],
            'has_story' => ['nullable', 'boolean'],
            'story_or_costume_type_id' => ['numeric', 'nullable', 'exists:story_or_costume_types,id'],
            'is_professional_production' => ['nullable', 'boolean'],
            'duration' => ['date_format:H:i:s', 'after:00:00:00'],

            'anal_percentage' => $sexTypeRule,
            'blowjob_percentage' => $sexTypeRule,
            'handjob_percentage' => $sexTypeRule,
            'double_penetration_percentage' => $sexTypeRule,
            'pussy_fuck_percentage' => $sexTypeRule,
            'pussy_licking_percentage' => $sexTypeRule,
            'feet_petting_percentage' => $sexTypeRule,
            'position_69_percentage' => $sexTypeRule,
            'tittfuck_percentage' => $sexTypeRule,

            'is_cumshot_compilation_type' => $booleanRule,
            'recorded_by_spy_camera' => $booleanRule,
            'is_sadistic_or_masochistic' => $booleanRule,
            'is_female_domination_type' => $booleanRule,
            'is_translated_to_polish' => $booleanRule,
            'actress_has_pantyhose' => $booleanRule,
            'actress_has_stockings' => $booleanRule,
            'actress_has_glasses' => $booleanRule,
            'shows_high_heels' => $booleanRule,
            'shows_big_cock' => $booleanRule,
            'shows_whips' => $booleanRule,
            'shows_sex_toys' => $booleanRule,
            'shows_latex' => $booleanRule,

            'pornstars_list' => ['nullable', 'array'],
            'pornstars_list.*' => ['nullable', 'string', 'exists:pornstars,nickname']
        ];

        return $rules;
    }

    //if you wonder why I didn't use a custom request validation, that's because custom requests break
    // when more fields get validated

    public static function validate(array $movieCandidate): array
    {
        $validator = Validator::make($movieCandidate, self::getRules());
        return $validator->fails() ? ['success' => false, 'errors' => $validator->errors()->all()] : 
        ['success' => true, 'validated' => $validator->validated()];
    }
}
