<template>
  <label class="select-container">
	<span class="select-container__description">
        <slot></slot>
    </span>
	<select v-bind:name="name" v-bind:disabled="isDisabled" v-on:input="emitValue" v-bind:value="value" class="select-container__select">
            <option value="">{{initialValue}}</option>
            <option v-for="(option, value) in selectOptions" v-bind:value="value">{{option}}</option>
	</select>
</label>
</template>

<script lang="ts">

import {Vue, Component, Prop} from 'vue-property-decorator';
import Translator from '@jsmodules/translator.js';

@Component
	export default class SimpleLabeledInput extends Vue{

     @Prop({
            type: Boolean,
            required: false,
            default:false
      }) readonly isDisabled: boolean;

      @Prop({
            type: String,
            required: false,
            default:"select"
      }) readonly name: string;


      @Prop({
            type: Boolean,
            required: false,
            default:false
      }) readonly inputIsRequired: boolean;

      @Prop({
            type: String,
            required: false,
            default:""
      }) readonly value: string;

      @Prop({
            type: String,
            required: false,
            default:"--"
      }) readonly initialValue: string;

      @Prop({
            type: Object,
            required: false,
            default:undefined
      }) readonly options: Object;


      private selectOptions: Object = {};


      created(){
           this.selectOptions = this.options;
           this.$on(`updateSelectValues${this.name}`, this.updateSelectValues);
      }

      updateSelectValues(options:object){
        this.selectOptions = options;
      }

      emitValue(event){
         this.$emit('input', event.target.value);
      }

      

    }
        
</script>

<style lang="scss" scoped>

@import '~sass/fonts';

.select-container{
	display:inline-flex;
	align-items: baseline;
	border-radius:7px;
	padding: 3px 10px;
	color:white;
	background:#242229;
	position:relative;
    border: 2px solid transparent;
    height: 2em;
}

.select-container__description{
	white-space: nowrap;
}

.select-container__select{
	color:white;
	border: none;
	background:#242229;
    outline:none;
    margin-left:4px;
}

.select-container__select, .select-container__description, .select-container{
    @include responsive-font;
}


</style>