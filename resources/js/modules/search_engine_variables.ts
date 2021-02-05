const movieViewsOptions = [
    'minimumMovieViews', 'maximumMovieViews'
];

const movieTimeOptions = [
    'minimumMovieTime',
    'maximumMovieTime'
];

const variables : {
    initialValueIsEmptyString : string[],
    initialValueIsFalse : string[],
    pornstarsList : string,
    initialValueIsZero : string[],
    movieTimeOptions : string[],
    movieViewsOptions : string[],
    groupNames : string[]
    getIgnoreIfFalsy() : string[]
} = {

    initialValueIsEmptyString : ['abundanceType', 'titsSize', 'assSize', 'thicknessSize','ageRange', 'hairColor', 'race' ,
     'nationality', 'shavedPussy', 'analAmmount', 'blowjobAmmount', 'doublePenetrationAmmount', 'vaginalAmmount', 'pussyLickingAmmount', 'tittfuckAmmount',
     'feetAmmount', 'position69Ammount', 'cumshotType', 'location', 'cameraStyle', 'hasStory', 'storyOrCostume',
     'professionalismLevel'],

     initialValueIsFalse : ['isCumshotCompilation', 'recordedBySpamCamera', 'isSadisticOrMasochistic','isFemaleDomination',
   'isTranslatedToPolish', 'showPantyhose', 'showStockings', 'showGlasses', 'showHighHeels','showHugeCock',
   'showWhips','showSexToys'
   ],

   initialValueIsZero  : [...movieTimeOptions, ...movieViewsOptions],
   movieTimeOptions,
   movieViewsOptions,
   pornstarsList : "pornstarsList",
   groupNames : ['initialValueIsEmptyString', 'initialValueIsFalse', 'movieTimeOptions', 'movieViewsOptions'],

   getIgnoreIfFalsy():string[]{
       return this.initialValueIsEmptyString.concat(this.initialValueIsFalse, this.initialValueIsZero);
   }
}


export default  variables;