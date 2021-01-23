<x-base title="{{__($title)}}" specificImageClass="no-image-background" description="{{__($description)}}">
   <form class="advanced-search-panel">
      <fieldset v-bind:class="{'aditional-control-panel--hidden' : !showControlsShortcut}" class="aditional-control-panel">
         <legend class="aditional-control-panel__description">{{__('controls')}}</legend>
           <button type="button" v-on:click="searchMovies" class="aditional-control-panel__button--green">
              <img src="/images/decoration/advanced-search/magnifier.svg" alt="" class="control-panel-button__icon">
              {{__('search_button_caption')}}
           </button>
           <button v-on:click="resetPanel" type="reset" class="aditional-control-panel__button--red">
              <img src="/images/decoration/advanced-search/shutdown.svg" alt="" class="control-panel-button__icon--bigger">
              {{__('fixed_panel_reset_caption')}}
            </button>
            <button type="button" v-on:click="hideAditionalPanel" class="aditional-control-panel__button--arrow-down">
              <img src="/images/decoration/advanced-search/arrow-down.svg" class="control-panel-button__icon--arrow-down"/>
              {{__('hide_fixed_control_panel_caption')}}
            </button>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('information')}}
            <img src="/images/decoration/icons/advanced_search/info-circle.svg" alt="" class="decoration-icon">
         </legend>
         <p class="information-content">{{__('search_panel_information')}}</p>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('type_and_body')}}
         </legend>
         <simple-labeled-select v-model="titsSize"  v-bind:options="searchEngineOptions['titsSizes']">
            {{__('tits_size')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="assSize" v-bind:options="searchEngineOptions['assSizes']">
            {{__('ass_size')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="thicknessSize"  v-bind:options="searchEngineOptions['thicknessSizes']">
            {{__('thickness')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="ageRange"  v-bind:options="searchEngineOptions['ageRanges']">
            {{__('age')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="hairColor"  v-bind:options="searchEngineOptions['hairColors']">
            {{__('hair_color')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="race"  v-bind:options="searchEngineOptions['races']">
            {{__('race')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="nationality"  v-bind:options="searchEngineOptions['nationalities']">
            {{__('nationality')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="shavedPussy"  v-bind:options="searchEngineOptions['binaryOptions']">
            {{__('shaved_pussy')}} : 
         </simple-labeled-select>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('sex_type')}}
         </legend>
         <simple-labeled-select v-model="abundanceType"  v-bind:options="searchEngineOptions['abundanceTypes']">
            {{__('abundance')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="analAmmount"  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('anal')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="blowjobAmmount"  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('blowjob')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="vaginalAmmount"   v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('vaginal')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="pussyLickingAmmount"   v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('pussy_licking')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="tittfuckAmmount"  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('tittfuck')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="feetAmmount"  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('feet')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="doublePenetrationAmmount"  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('double_penetration')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="position69Ammount"  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('position_69')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="cumshotType" v-bind:options="searchEngineOptions['cumshotTypes']">
            {{__('cumshot')}} : 
         </simple-labeled-select>
         <labeled-checkbox v-model="isCumshotCompilation" name="cumshot-compilation">{{__('cumshot_compilation')}}</labeled-checkbox>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('circumstances_and_style')}}
         </legend>
         <simple-labeled-select v-model="location" v-bind:options="searchEngineOptions['locations']">
            {{__('location')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="cameraStyle" v-bind:options="searchEngineOptions['cameraStyle']">
            {{__('camera_style')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="storyOrCostume" v-bind:options="searchEngineOptions['storyOrCostume']">
            {{__('story_or_costume_type')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="proffesionalismLevel" v-bind:options="searchEngineOptions['proffesionalismLevel']">
            {{__('movie_level')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-model="hasStory" v-bind:options="searchEngineOptions['binaryOptions']">
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
            <expect-circle v-bind:label="searchEngineOptions['pornstarsFetchingLabel']"></expect-circle>
         </relative-shadow-container>
         <legend class="panel-group-legend">
            {{__('stars')}}
         </legend>
         <multiselect
            v-model="pornstarsList"
            main-label="{{__('chose_from_pornstars_list')}}"
            v-bind:show-search-input="true"
         ></multiselect>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('time_and_views')}}
         </legend>
         <div class="range-selection">
            <label for="minimum-movie-duration" class="range-selection__label">
               {{__('min_time_in_minutes')}}
            </label>
            <input type="range" v-model="minimumMovieTime" value="0" min="0" max="180" step="1" class="range-selection__input" name="minimum-movie-duration" id="minimum-movie-duration"/>
            <div v-text="minimumMovieTimeLabel" class="range-selection__value"></div>
         </div>
         <div class="range-selection">
            <label for="maximum-movie-duration" class="range-selection__label">
               {{__('max_time_in_minutes')}}
            </label>
            <input type="range" v-model="maximumMovieTime" value="0" min="0" max="180" step="1" class="range-selection__input" name="maximum-movie-duration" id="maximum-movie-duration"/>
            <div v-text="maximumMovieTimeLabel" class="range-selection__value"></div>
         </div>
         <div class="range-selection">
            <label for="min-movie-views" class="range-selection__label">
               {{__('minimum_views')}}
            </label>
            <input type="range" v-model="minimumMovieViews" value="0" min="0" max="100000" step="100" class="range-selection__input" name="minimum-movie-views" id="min-movie-views"/>
            <div v-text="minimumMovieViewsLabel" class="range-selection__value"></div>
         </div>
         <div class="range-selection">
            <label for="max-movie-views" class="range-selection__label">
               {{__('maximum_views')}}
            </label>
            <input type="range" v-model="maximumMovieViews" value="0" min="0" max="100000" step="100" class="range-selection__input" name="max-movie-views" id="max-movie-views"/>
            <div v-text="maximumMovieViewsLabel" class="range-selection__value"></div>
         </div>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('controls')}}
         </legend>
         <accept-button v-on:click.native="searchMovies" class="control-panel-button--type-submit">
            <img src="/images/decoration/advanced-search/magnifier.svg" alt="" class="control-panel-button__icon">
            {{__('search_button_caption')}}
         </accept-button>
         <reset-button v-on:click.native="resetPanel" class="control-panel-button--type-reset">
            <img src="/images/decoration/advanced-search/shutdown.svg" alt="" class="control-panel-button__icon--bigger">
            {{__('reset_panel')}}
         </reset-button>
         <labeled-checkbox v-on:click.native="savePanelSettings" v-model="showControlsShortcut" class="labeled_checkbox--aditional-margin" name="show-controls-shortcut">{{__('show_controls_shortcut')}}</labeled-checkbox>
      </fieldset>
   </form>
   <user-notification></user-notification>
</x-base>