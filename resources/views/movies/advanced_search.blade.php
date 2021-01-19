

<x-base title="{{__($title)}}" specificImageClass="no-image-background" description="{{__($description)}}">
   <form class="advanced-search-panel">
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
         <simple-labeled-select  v-bind:options="searchEngineOptions['titsSizes']">
            {{__('tits_size')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['assSizes']">
            {{__('ass_size')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['thicknessSizes']">
            {{__('thickness')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['ageRanges']">
            {{__('age')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['hairColors']">
            {{__('hair_color')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['races']">
            {{__('race')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['nationalities']">
            {{__('nationality')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['binaryOptions']">
            {{__('shaved_pussy')}} : 
         </simple-labeled-select>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('sex_type')}}
         </legend>
         <simple-labeled-select  v-bind:options="searchEngineOptions['abundanceTypes']">
            {{__('abundance')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('anal')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('blowjob')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('vaginal')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('pussy_licking')}} : 
         </simple-labeled-select>
         <simple-labeled-select v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('tittfuck')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('feet')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('double_penetration')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['sexAmmounts']">
            {{__('position_69')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['cumshotTypes']">
            {{__('cumshot')}} : 
         </simple-labeled-select>
         <labeled-checkbox name="cumshot-compilation">{{__('cumshot_compilation')}}</labeled-checkbox>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('circumstances_and_style')}}
         </legend>
         <simple-labeled-select  v-bind:options="searchEngineOptions['locations']">
            {{__('location')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['cameraStyle']">
            {{__('camera_style')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['storyOrCostume']">
            {{__('story_or_costume_type')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['proffesionalismLevel']">
            {{__('movie_level')}} : 
         </simple-labeled-select>
         <simple-labeled-select  v-bind:options="searchEngineOptions['binaryOptions']">
            {{__('has_story')}} : 
         </simple-labeled-select>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="recorded-by-spy-camera">{{__('spy_camera')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="sado-maso">{{__('sadistic_or_masochistic')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="female-domination">{{__('female_domination')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="translated-to-polish">{{__('polish_language_version')}}</labeled-checkbox>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('gadgets')}}
         </legend>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="pantyhose">{{__('pantyhose')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="stockings">{{__('stockings')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="glasses">{{__('glasses')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="high-heels">{{__('high_heels')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="huge-cock">{{__('huge_cock')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="whips">{{__('whips')}}</labeled-checkbox>
         <labeled-checkbox class="labeled_checkbox--aditional-margin" name="sex-toys">{{__('sex_toys')}}</labeled-checkbox>
      </fieldset>
      <fieldset class="panel-group--relative">
         <relative-shadow-container v-show="fetchingPornstarsInProgress">
            <expect-circle v-bind:label="searchEngineOptions['pornstarsFetchingLabel']"></expect-circle>
         </relative-shadow-container>
         <legend class="panel-group-legend">
            {{__('stars')}}
         </legend>
         <multiselect
            v-model="multiselectValues"
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
            <input type="range" v-model="minimumMovieTime" min="0" max="180" step="1" class="range-selection__input" name="minimum-movie-duration" id="minimum-movie-duration"/>
            <div v-text="minimumMovieTimeLabel" class="range-selection__value"></div>
         </div>
         <div class="range-selection">
            <label for="maximum-movie-duration" class="range-selection__label">
               {{__('max_time_in_minutes')}}
            </label>
            <input type="range" v-model="maximumMovieTime" min="0" max="180" step="1" class="range-selection__input" name="maximum-movie-duration" id="maximum-movie-duration"/>
            <div v-text="maximumMovieTimeLabel" class="range-selection__value"></div>
         </div>
         <div class="range-selection">
            <label for="min-movie-views" class="range-selection__label">
               {{__('minimum_views')}}
            </label>
            <input type="range" v-model="minimumMovieViews" min="0" max="100000" step="100" class="range-selection__input" name="minimum-movie-views" id="min-movie-views"/>
            <div v-text="minimumMovieViewsLabel" class="range-selection__value"></div>
         </div>
         <div class="range-selection">
            <label for="max-movie-views" class="range-selection__label">
               {{__('maximum_views')}}
            </label>
            <input type="range" v-model="maximumMovieViews" min="0" max="100000" step="100" class="range-selection__input" name="max-movie-views" id="max-movie-views"/>
            <div v-text="maximumMovieViewsLabel" class="range-selection__value"></div>
         </div>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('controls')}}
         </legend>
         <accept-button class="panel-button--extra-margin">{{__('search_button_caption')}}</accept-button>
         <reset-button>{{__('reset_panel')}}</reset-button>
      </fieldset>
   </form>
   <user-notification></user-notification>
</x-base>