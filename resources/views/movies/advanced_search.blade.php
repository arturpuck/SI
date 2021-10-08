<x-base title="{{__($title)}}" customBodyClass="standard-background" description="{{__($description)}}">
   <form class="advanced-search-panel" v-bind:class="{'advanced-search-panel--hidden' : !advancedSearchPanelIsVisible}">
      <fieldset v-bind:class="{'aditional-control-panel--hidden' : !controlsShortcutSholdBeDisplayed}" class="aditional-control-panel">
         <legend class="aditional-control-panel__description">{{__('controls')}}</legend>
         <button type="button" v-show="advancedSearchPanelIsVisible" v-on:click="firstSearch" class="aditional-control-panel__button--green">
            <magnifier-icon class="control-panel-button__icon"></magnifier-icon>
            {{__('search_button_caption')}}
         </button>
         <button v-on:click="resetPanel" v-show="advancedSearchPanelIsVisible" type="reset" class="aditional-control-panel__button--red">
            {{__('fixed_panel_reset_caption')}}
            <shutdown-icon class="control-panel-button__icon--reset"></shutdown-icon>
         </button>
         <button type="button" v-show="!advancedSearchPanelIsVisible" v-on:click="showSearchPanel" class="aditional-control-panel__button--green">
            <magnifier-icon class="control-panel-button__icon"></magnifier-icon>
            {{__('back_to_search_panel_short')}}
         </button>
         <button type="button" v-show="buttonPreviousShouldBeDisplayed" v-on:click="searchMovies(currentPage - 1)"  class="aditional-control-panel__button--light-red">
            <arrow-left-icon class="control-panel-button__icon"></arrow-left-icon>
            {{__('back')}}
         </button>
         <button type="button" v-show="buttonNextPageShouldBeDisplayed" v-on:click="searchMovies(currentPage + 1)"  class="aditional-control-panel__button--green">
            {{__('further')}}
            <arrow-right-icon class="control-panel-button__icon"></arrow-right-icon>
         </button>
         <button type="button" v-show="!advancedSearchPanelIsVisible" v-on:click="scrollPageToTop"  class="aditional-control-panel__button--up">
            <span class="aditional-control-panel__description">{{__('scroll_page_up')}}</span>
            <angle-top-icon class="control-panel-button__icon"></angle-top-icon>
         </button>
         
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('information')}}
            <info-circle-icon class="info-decoration-icon"></info-circle-icon>
         </legend>
         <p class="information-content">{{__('search_panel_information')}}</p>
         <p class="information-content">{{__('search_panel_information_detailed')}}</p>
      </fieldset>
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
         <simple-labeled-select v-model="analAmount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('anal')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="blowjobAmount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('blowjob')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="vaginalamount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('vaginal')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="handjobAmount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('handjob')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="pussyLickingAmount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('pussy_licking')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="titfuckAmount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('tittfuck')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="feetPettingAmount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('feet')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="doublePenetrationamount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('double_penetration')}} :
         </simple-labeled-select>
         <simple-labeled-select v-model="position69amount" v-bind:options="searchEngineTranslations['sexamounts']">
            {{__('position_69')}} :
         </simple-labeled-select>
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
         <relative-shadow-container v-show="fetchingPornstarsInProgress">
            <expect-circle v-bind:label="searchEngineTranslations['pornstarsFetchingLabel']"></expect-circle>
         </relative-shadow-container>
         <legend class="panel-group-legend">
            {{__('stars')}}
         </legend>
         <multiselect v-model="pornstarsList" main-label="{{__('chose_from_pornstars_list')}}" v-bind:show-search-input="true"></multiselect>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('time_and_views')}}
         </legend>
         <simple-labeled-input class="range-selection" v-model="maximumMovieViewsRaw" input-type="number">{{__('maximum_views')}} : </simple-labeled-input>   
         <simple-labeled-input class="range-selection" v-model="minimumMovieViewsRaw" input-type="number">{{__('minimum_views')}} : </simple-labeled-input>
         <div class="range-selection-description"> {{__('time_in_minutes')}}</div>
         <simple-labeled-input class="range-selection" v-model="minimumMovieTimeRaw" input-type="number">{{__('min_time')}} : </simple-labeled-input>
         <simple-labeled-input class="range-selection" v-model="maximumMovieTimeRaw" input-type="number">{{__('max_time')}} : </simple-labeled-input>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('controls')}}
         </legend>
         <accept-button v-on:click="firstSearch" class="control-panel-button--type-submit">
            <magnifier-icon class="control-panel-button__icon"></magnifier-icon>
            {{__('search_button_caption')}}
         </accept-button>
         <reset-button v-on:click="resetPanel" class="control-panel-button--type-reset">
            <shutdown-icon class="control-panel-button__icon--bigger"></shutdown-icon>
            {{__('reset_panel')}}
         </reset-button>
         <labeled-checkbox v-on:click="savePanelSettings" v-model="userWantsToDisplayControlsShortcut" class="labeled_checkbox--aditional-margin" name="show-controls-shortcut">{{__('show_controls_shortcut')}}</labeled-checkbox>
      </fieldset>
   </form>
   <section v-show="!advancedSearchPanelIsVisible" class="search-results">
      <header  class="search-results__summary">
         <div class="search-results__header--crimson">
            {{__('search_results')}}
            <improvement-performance-icon class="search-results__icon--crimson"></improvement-performance-icon>
         </div>
         <div class="search-results__header--extra-padding">
            <finger-point-icon class="search-results__icon--white"></finger-point-icon>
            {{__('you_have_selected_the_following_options')}}
         </div>
         <ul class="search-results__options-list">
            <li v-for="selectedOption in selectedOptionsVisibleForUser" v-text="selectedOption" class="search-results__option"></li>
         </ul>
         <div v-text="totalMoviesFoundCaption" class="search-results__header"></div>
      </header>
      <button  type="button" v-on:click="showSearchPanel" class="search-results__back-to-search-panel-button">
         <exit-arrow-icon class="control-panel-button__icon"></exit-arrow-icon>
         {{__('back_to_search_panel_button_caption')}}
      </button>
      <movies-list></movies-list>
   </section>
   <user-notification></user-notification>
   <fixed-shadow-container v-show="fetchingMoviesInProgress">
      <expect-circle v-bind:label="searchEngineTranslations['fetchingMoviesLabel']"></expect-circle>
   </fixed-shadow-container>
</x-base>