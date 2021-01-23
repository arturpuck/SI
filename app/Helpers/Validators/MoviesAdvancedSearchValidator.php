<?php

namespace App\Helpers\Validators;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

Class MoviesAdvancedSearchValidator {

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
        'teenagers' ,
        'young' ,
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

    private const NATIONALITIES = [
        'american',
        'japanese',   	
        'german',
        'czech',
        'russian',
        'british',
        'swedish',
        'ukrainian',
        'slovac',
        'hanguarian',
        'polish',
        'dutch',
        'hindu',
        'french',
        'spanish',
        'italian',
        'canadian',
        'argentinian'
    ];

    private const BINARY_OPTIONS = [
      '0',
      '1'
    ];

    private const SEX_TYPE_AMMOUNTS = [
        'only',
        'maximum',,
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

    private const LOCATIONS = [
        'house',
        'bathroom',
        'office',
        'school',
        'public_place',
        'car',
        'nature',
        'solarium',
        'elevator',
        'beach',
        'gym'
    ];

    private const CAMERA_STYLES = [
        'outside',
        'POV',
        'mixed'
    ];

    private const STORIES_OR_COSTUMES = [

    ];

    private const RULES = [
        'abundanceType' => ['string', 'nullable', Rule::in(self::ABUNDANCE_TYPES)],
        'titsSize' => ['string', 'nullable', Rule::in(self::SMB_SIZES)],
        'assSize' => ['string', 'nullable', Rule::in(self::SMB_SIZES)],
        'thicknessSize' => ['string', 'nullable', Rule::in(self::THICKNESS_SIZES)],
        'ageRange' => ['string', 'nullable', Rule::in(self::AGE_RANGES)],
        'hairColor' => ['string', 'nullable', Rule::in(self::HAIR_COLORS)],
        'races' => ['string', 'nullable', Rule::in(self::RACES)],
        'nationality' => ['string', 'nullable', Rule::in(self::NATIONALITIES)],
        'shavedPussy' => ['string', 'nullable', Rule::in(self::BINARY_OPTIONS)],
        'analAmmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'blowjobAmmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'doublePenetrationAmmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'vaginalAmmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'pussyLickingAmmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'tittfuckAmmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'feetAmmount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'position69Ammount' => ['string', 'nullable', Rule::in(self::SEX_TYPE_AMMOUNTS)],
        'cumshotType' => ['string', 'nullable', Rule::in(self::CUMSHOT_TYPES)],
        'location' => ['string', 'nullable', Rule::in(self::LOCATIONS)],
        'cameraStyle' => ['string', 'nullable', Rule::in(self::CAMERA_STYLES)],
        'hasStory' => ['string', 'nullable', Rule::in(self::BINARY_OPTIONS)],
        'storyOrCostume' => ['string', 'nullable', Rule::in(self::BINARY_OPTIONS)],
    ];

    //if you wonder why I didn't use a custom request validation, that's because custom requests break
    // when more fields get validated

    public static function validate(Request $request):bool | Response {

        $validator = Validator::make($request->all());
    }


}