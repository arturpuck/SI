<template>
   <div v-on-clickaway="hideMenu" class="multiselect">
       <div class="multiselect__label"  v-on:click="showMenu">
          <span v-text="mainLabel" class="multiselect__caption"></span>
          <icon-add-plus></icon-add-plus>
       </div>
      <div class="multiselect__menu"   v-bind:class="{'multiselect__menu--visible' : menuIsVisible}">
          <label v-if="showSearchInput">
              <div v-text="searchInputCaption" class="multiselect__search-input-caption"></div>
              <input v-on:input="searchForValue"  class="multiselect__search-input" id="" type="search">
          </label>
          <ul  class="multiselect__options">
              <li v-for="option in displayedOptions" class="multiselect__option">
                 <labeled-checkbox  v-model="optionsStates[option.identifier]" v-bind:name="option.identifier">{{option.value}}</labeled-checkbox>
              </li>
          </ul>
      </div>
   </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
  import Translations from '@jsmodules/translations/components/form_controls/multiselect.js';
  import IconAddPlus from '@jscomponents/decoration/icons/icon_add_plus.vue';
  import LabeledCheckbox from '@jscomponents/form_controls/labeled_checkbox.vue';
  import { directive as onClickaway } from 'vue-clickaway';
  
  
  
@Component({components : {IconAddPlus, LabeledCheckbox}, directives : {onClickaway}})
  export default class MultiSelect extends Vue {

    private displayedOptions: Array<any> = [];
    private totalOptions:Array<any> = [];
    private menuIsVisible:boolean = false;
    private optionsStates: Object = {};

    @Prop({
            type: Boolean,
            required: false,
            default:false
    }) readonly showSearchInput: boolean;

    @Prop({
            type: Array,
            required: false,
            default:undefined
    }) readonly options: Array<any>;

    @Prop({
            type: String,
            required: false,
            default: Translations['defaultLabel']
    }) readonly mainLabel: string;

    @Prop({
            type: String,
            required: false,
            default: Translations['defaultSearchInputCaption']
    }) readonly searchInputCaption: string;


    @Prop({
            type: Array,
            required: false,
            default: []
    }) readonly  value: Array<any>;

    @Watch('value')
      modelChanged(value : Array<any>, oldValue : Array<any>){
          alert(value + '    ' + oldValue);
      }

    created(){
        this.totalOptions = this.getOptionsWithObjectProperties(this.options);
        this.displayedOptions = this.totalOptions;
        this.displayedOptions.forEach(option => {
          this.$set(this.optionsStates, option.identifier, false );
        });
        
    }

    getOptionsWithObjectProperties(options:Array<any>): Array<object>{
        const optionsWithKeys: Array<object> = [];

        options.forEach(option => {
            optionsWithKeys.push({value : option, 
            identifier : this.parseOptionValueToObjectProperty(option)});
        });
        
        return optionsWithKeys;
    }

    parseOptionValueToObjectProperty(value):string{
        const str = value.toString();
        return `_${str.replaceAll(' ','_').replaceAll('-','_')}`;
    }

    searchForValue(event){
        
        const value = event.target.value.toLowerCase();

        if(value){

          let matchingValues = [];

          this.totalOptions.forEach((option) => {

              let optionLowercase = option.value.toLowerCase();

                if(optionLowercase.includes(value)){
                    matchingValues.push(option);
                }
          });

            this.displayedOptions = matchingValues;
        }
        else{
            this.displayedOptions = this.totalOptions;
        }
        
    }

    showMenu(event){
        this.menuIsVisible = true;
    }

    hideMenu(){
        this.menuIsVisible = false;
    }

}
</script>

<style lang="scss" scoped>

@import '~sass/fonts';
@import '~sass/nice_scrollbar';

.multiselect{
    position:relative;
    padding:4px;
    border-radius:7px;
    background:#242229;
    cursor:pointer;
    @include responsive-font();

    &__search-input-caption{
        text-align: center;
        color:white;
    }

    &__label{
      display:flex;
      justify-content: space-between;
      align-items: center
    }

    &__caption{
        color:white;
    }

    &__options{
        list-style-type:none;
        margin:0;
        padding:0;
    }

    &__option{
        margin:5px 0;
    }

    &__menu{
        position:absolute;
        width:100%;
        left:0;
        top:100%;
        overflow-y:auto;
        z-index: 5;
        padding:0;
        background: black;
        max-height:0;

        &--visible{
            max-height:60vh;
            padding: 0.5vw;
        }
    }

    &__search-input{
        background: #f7ecf0;
        border:2px solid transparent;
        outline:none;
        border-radius: 3px;
        width: 100%;
        @include responsive-font();
        margin: 5px 0;
        &:focus{
           border:none;
           border:2px solid crimson;
           outline:none; 
        }
    }
}

@include nice-scrollbar('.multiselect__menu');
  
</style>