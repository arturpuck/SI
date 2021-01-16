

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
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('stars')}}
         </legend>
         <p class="panel-group__pornstars-selection-info">
            {{__('pornstar_selection_info')}}
         </p>
         <multiselect
            v-model="multiselectValues"
            main-label="{{__('chose_from_pornstars_list')}}"
            v-bind:show-search-input="true"
         ></multiselect>
   </form>
   <user-notification></user-notification>
</x-base>