const variables : {
    initialValueIsEmptyString : string[],
    initialValueIsFalse : string[],
    pornstarsList : string,
    initialValueIsZero : string[],
    getIgnoreIfFalsy() : string[]
} = {

    initialValueIsEmptyString : ['abundanceType', 'titsSize', 'assSize', 'thicknessSize','ageRange', 'hairColor', 'race' ,
     'nationality', 'shavedPussy', 'analAmmount', 'blowjobAmmount', 'doublePenetrationAmmount', 'vaginalAmmount', 'pussyLickingAmmount', 'tittfuckAmmount',
     'feetAmmount', 'position69Ammount', 'cumshotType', 'location', 'cameraStyle', 'hasStory', 'storyOrCostume',
     'proffesionalismLevel'],

     initialValueIsFalse : ['isCumshotCompilation', 'recordedBySpamCamera', 'isSadisticOrMasochistic','isFemaleDomination',
   'isTranslatedToPolish', 'showPantyhose', 'showStockings', 'showGlasses', 'showHighHeels','showHugeCock',
   'showWhips','showSexToys'
   ],

   initialValueIsZero  : ['minimumMovieTime', 'maximumMovieTime', 'minimumMovieViews', 'maximumMovieViews'],

   pornstarsList : "pornstarsList",

   getIgnoreIfFalsy():string[]{
       return this.initialValueIsEmptyString.concat(this.initialValueIsFalse, this.initialValueIsZero);
   }
}


export default  variables;