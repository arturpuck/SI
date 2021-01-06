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
            {{__('body_type')}}
         </legend>
         <simple-labeled-select name="tits-size" v-bind:options="searchEngineOptions['titsSizes']">
            {{__('tits_size')}} : 
         </simple-labeled-select>
         <simple-labeled-select name="ass-size" v-bind:options="searchEngineOptions['assSizes']">
            {{__('ass_size')}} : 
         </simple-labeled-select>
         <simple-labeled-select name="thickness" v-bind:options="searchEngineOptions['thicknessSizes']">
            {{__('thickness')}} : 
         </simple-labeled-select>
         <simple-labeled-select name="age" v-bind:options="searchEngineOptions['ageRanges']">
            {{__('age')}} : 
         </simple-labeled-select>
         <simple-labeled-select name="hair-color" v-bind:options="searchEngineOptions['hairColors']">
            {{__('hair_color')}} : 
         </simple-labeled-select>
         <simple-labeled-select name="race" v-bind:options="searchEngineOptions['races']">
            {{__('race')}} : 
         </simple-labeled-select>
         <simple-labeled-select name="pussy-haircut" v-bind:options="searchEngineOptions['pussyHaircut']">
            {{__('shaved_pussy')}} : 
         </simple-labeled-select>
      </fieldset>
      <fieldset class="panel-group">
         <legend class="panel-group-legend">
            {{__('sex_type')}}
         </legend>
         <simple-labeled-select name="tits-size" v-bind:options="searchEngineOptions['abundanceTypes']">
            {{__('abundance')}} : 
         </simple-labeled-select>
      </fieldset>
   </form>
</x-base>