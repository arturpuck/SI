<!DOCTYPE html>
<html lang="{{App::getLocale()}}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="css/edit_movie_panel.css">
    <link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich|Oxanium|Teko|Play&display=swap" rel="preload stylesheet" as="style">
    <title>Edycja/ Dodawanie nowego filmu</title>
</head>
<body class="body">
    <div id="app">
    <h1 class="main-header">{{__('movie_add_edit_panel')}}</h1>
<form class="advanced-search-panel">
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('type_and_body')}}
         </legend>
         <simple-labeled-select v-model="titsSize" v-bind:options="searchEngineTranslations['titsSize']">
            {{__('tits_size')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="assSize" v-bind:options="searchEngineTranslations['assSize']">
            {{__('ass_size')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="thicknessSize" v-bind:options="searchEngineTranslations['thicknessSize']">
            {{__('thickness')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="ageRange" v-bind:options="searchEngineTranslations['ageRange']">
            {{__('age')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="hairColor" v-bind:options="searchEngineTranslations['hairColor']">
            {{__('hair_color')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="race" v-bind:options="searchEngineTranslations['race']">
            {{__('race')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="nationality" v-bind:options="searchEngineTranslations['nationality']">
            {{__('nationality')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="shavedPussy" v-bind:options="searchEngineTranslations['binaryOptions']">
            {{__('shaved_pussy')}} :
         </simple-labeled-select>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('sex_type')}}
         </legend>
         <simple-labeled-select v-model="abundanceType" v-bind:options="searchEngineTranslations['abundanceType']">
            {{__('abundance')}} :
         </simple-labeled-select>
         <labeled-range class="sex-ammount" v-model="analAmount" unit="%">{{__('anal')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="blowjobAmount" unit="%">{{__('blowjob')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="vaginalAmount" unit="%">{{__('vaginal')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="handjobAmount" unit="%">{{__('handjob')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="pussyLickingAmount" unit="%">{{__('pussy_licking')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="titfuckAmount" unit="%">{{__('tittfuck')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="feetPettingAmount" unit="%">{{__('feet')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="doublePenetrationamount" unit="%">{{__('double_penetration')}}</labeled-range>
         <labeled-range class="sex-ammount" v-model="position69amount" unit="%">{{__('position_69')}}</labeled-range>
      
         <simple-labeled-select v-model="cumshotType" v-bind:options="searchEngineTranslations['cumshotType']">
            {{__('cumshot')}} :
         </simple-labeled-select>
         <labeled-checkbox v-model="isCumshotCompilation" name="cumshot-compilation">{{__('cumshot_compilation')}}</labeled-checkbox>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('circumstances_and_style')}}
         </legend>
         <simple-labeled-select v-model="location" v-bind:options="searchEngineTranslations['location']">
            {{__('location')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="cameraStyle" v-bind:options="searchEngineTranslations['cameraStyle']">
            {{__('camera_style')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="storyOrCostume" v-bind:options="searchEngineTranslations['storyOrCostume']">
            {{__('story_or_costume_type')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="professionalismLevel" v-bind:options="searchEngineTranslations['professionalismLevel']">
            {{__('movie_level')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="hasStory" v-bind:options="searchEngineTranslations['binaryOptions']">
            {{__('has_story')}} :
         </simple-labeled-select>
         <labeled-checkbox v-model="recordedBySpamCamera" class="labeled_checkbox--aditional-margin" name="recorded-by-spy-camera">{{__('spy_camera')}}</labeled-checkbox>
         <labeled-checkbox v-model="isSadisticOrMasochistic" class="labeled_checkbox--aditional-margin" name="sado-maso">{{__('sadistic_or_masochistic')}}</labeled-checkbox>
         <labeled-checkbox v-model="isFemaleDomination" class="labeled_checkbox--aditional-margin" name="female-domination">{{__('female_domination')}}</labeled-checkbox>
         <labeled-checkbox v-model="isTranslatedToPolish" class="labeled_checkbox--aditional-margin" name="translated-to-polish">{{__('polish_language_version')}}</labeled-checkbox>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('gadgets')}}
         </legend>
         <labeled-checkbox v-model="showPantyhose" class="labeled_checkbox--aditional-margin" name="pantyhose">{{__('pantyhose')}}</labeled-checkbox>
         <labeled-checkbox v-model="showStockings" class="labeled_checkbox--aditional-margin" name="stockings">{{__('stockings')}}</labeled-checkbox>
         <labeled-checkbox v-model="showGlasses" class="labeled_checkbox--aditional-margin" name="glasses">{{__('glasses')}}</labeled-checkbox>
         <labeled-checkbox v-model="showHighHeels" class="labeled_checkbox--aditional-margin" name="high-heels">{{__('high_heels')}}</labeled-checkbox>
         <labeled-checkbox v-model="showHugeCock" class="labeled_checkbox--aditional-margin" name="huge-cock">{{__('huge_cock')}}</labeled-checkbox>
         <labeled-checkbox v-model="showWhips" class="labeled_checkbox--aditional-margin" name="whips">{{__('whips')}}</labeled-checkbox>
         <labeled-checkbox v-model="showSexToys" class="labeled_checkbox--aditional-margin" name="sex-toys">{{__('sex_toys')}}</labeled-checkbox>
      </fieldset>
      <fieldset class="panel-group--relative">
         <legend class="panel-group-legend">
            {{__('stars')}}
         </legend>
         <multiselect v-bind:options="{{json_encode($pornstarsNames)}}" v-model="pornstarsList" main-label="{{__('chose_from_pornstars_list')}}" v-bind:show-search-input="true"></multiselect>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('movie_duration')}}
         </legend>
         <input v-model="movieDuration" class="movie-duration" step="1" type="time">
         
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('controls')}}
         </legend>
         <reset-button v-on:click="resetPanel" class="control-panel-button--type-reset">
            <shutdown-icon class="control-panel-button__icon--bigger"></shutdown-icon>
            {{__('reset_panel')}}
         </reset-button>
         <accept-button v-on:click="saveMovie">
            {{__('save_movie')}}
         </accept-button>
      </fieldset>
   </form>
   <h2 class="main-header">{{__('added_movies_awaiting_confirmation')}}</h2>
   <section>

   </section>
   </div>
   <script src="js/edit_movie_panel.js"></script>
</body>
</html>