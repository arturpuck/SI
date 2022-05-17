<?php

namespace App\Helpers\Validators;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class MoviePropertiesValidator
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

    private const SEX_TYPE_amountS = [
        'only',
        'maximum',
        'a_lot',
        'medium',
        'a_little',
        'exclude'
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

    private const PROFESSIONALISM_LEVELS = [
        'professional',
        'amateur'
    ];

    private const CAST_STRING_TO_BOOLEAN = [
        'hasStory',
        'isCumshotCompilation',
        'recordedBySpamCamera',
        'isSadisticOrMasochistic',
        'isFemaleDomination',
        'isTranslatedToPolish',
        'showPantyhose',
        'showStockings',
        'showGlasses',
        'showHighHeels',
        'showHugeCock',
        'showWhips',
        'showSexToys',
        'shavedPussy'
    ];

    private const CAST_STRING_TO_INTEGER = [
        'minimumMovieTime',
        'maximumMovieTime',
        'minimumMovieViews',
        'maximumMovieViews',
        'page',
    ];

    private static function getRules(): array
    {

        return [
            'abundanceType' => ['string', 'nullable', Rule::in(self::ABUNDANCE_TYPES)],
            'titsSize' => ['string', 'nullable', Rule::in(self::SMB_SIZES)],
            'assSize' => ['string', 'nullable', Rule::in(self::SMB_SIZES)],
            'thicknessSize' => ['string', 'nullable', Rule::in(self::THICKNESS_SIZES)],
            'ageRange' => ['string', 'nullable', Rule::in(self::AGE_RANGES)],
            'hairColor' => ['string', 'nullable', Rule::in(self::HAIR_COLORS)],
            'race' => ['string', 'nullable', Rule::in(self::RACES)],
            'nationality' => ['string', 'nullable', 'exists:nationalities,name'],
            'shavedPussy' => ['nullable', 'boolean'],
            'analAmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'blowjobAmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'doublePenetrationamount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'vaginalamount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'pussyLickingAmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'titfuckAmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'feetPettingAmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'position69amount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_amountS)],
            'cumshotType' => ['string', 'nullable', Rule::in(self::CUMSHOT_TYPES)],
            'location' => ['string', 'nullable', 'exists:locations,name'],
            'cameraStyle' => ['string', 'nullable', Rule::in(self::CAMERA_STYLES)],
            'hasStory' => ['nullable', 'boolean'],
            'storyOrCostume' => ['string', 'nullable', 'exists:story_or_costume_types,name'],
            'professionalismLevel' => ['string', 'nullable', Rule::in(self::PROFESSIONALISM_LEVELS)],

            'isCumshotCompilation' => ['boolean', 'nullable'],
            'recordedBySpamCamera' => ['boolean', 'nullable'],
            'isSadisticOrMasochistic' => ['boolean', 'nullable'],
            'isFemaleDomination' => ['boolean', 'nullable'],
            'isTranslatedToPolish' => ['boolean', 'nullable'],
            'showPantyhose' => ['boolean', 'nullable',],
            'showStockings' => ['boolean', 'nullable'],
            'showGlasses' => ['boolean', 'nullable'],
            'showHighHeels' => ['boolean', 'nullable'],
            'showHugeCock' => ['boolean', 'nullable'],
            'showWhips' => ['boolean', 'nullable'],
            'showSexToys' => ['boolean', 'nullable'],

            'minimumMovieTime'  => ['nullable', 'integer', 'between:0,180'],
            'maximumMovieTime'  => ['nullable', 'integer', 'between:0,180'],
            'minimumMovieViews' => ['nullable', 'numeric', 'between:0,100000'],
            'maximumMovieViews' => ['nullable', 'numeric', 'between:0,100000'],

            'pornstarsList' => ['nullable', 'array'],
            'pornstarsList.*' => ['nullable', 'string', 'exists:pornstars,nickname'],

            'page' => ['required', 'numeric', 'min:0']
        ];
    }

    //if you wonder why I didn't use a custom request validation, that's because custom requests break
    // when more fields get validated

    private static function castTypes(Request $request): void
    {

        foreach ($request->all() as $key => $value) {

            if (in_array($key, self::CAST_STRING_TO_BOOLEAN)) {

                $casted = match ($value) {
                    'true' => true,
                    'false' => false,
                    '1' => true,
                    '0' => false
                };

                $request->merge([$key => $casted]);
            } else if (in_array($key, self::CAST_STRING_TO_INTEGER)) {

                $casted = intval($value);
                $request->merge([$key => $casted]);
            }
        }
    }

    public static function validate(Request $request): bool | Response
    {

        self::castTypes($request);
        $validator = Validator::make($request->all(), self::getRules());
        return $validator->fails() ? response($validator->errors()->all(), 400) : true;
    }
}
