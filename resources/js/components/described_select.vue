<template>
<div class="described-select-container">
<div class="error-message-box">
	
</div>
<label class="select-label">
    <icon-stop v-show="displayIconError"/>
    <icon-confirm v-show="displayIconConfirmation"/>
	<span class="select-description"><slot></slot></span>
	<select class="described-select">
            <option></option>
	</select>
</label>
</div>
</template>

<script>
import IconStop from './icon_error_stop.vue';
import IconConfirm from './icon_confirm.vue';

	export default {
        name: 'described-select',

        data() {
		 	return {
                 valueOK : undefined,
                 errorMessage : undefined,
                 selectedValue : undefined,
                 iconErrorCanBeDisplayed : undefined,
                 iconConfirmationCanBeDisplayed : undefined,
                 redBorderCanBeDisplayed : undefined,
                 greenBorderCanBeDisplayed : undefined
             };
             
         },

         computed : {
              displayIconError() {
                 return (this.iconErrorCanBeDisplayed && (this.valueOK === false));
              },

              displayRedBorder(){
                  return (this.redBorderCanBeDisplayed && (this.valueOK === false));
              },

              displayIconConfirmation(){
                  return (this.iconConfirmationCanBeDisplayed && (this.valueOK === true));
              },

              displayGreenBorder(){
                  return this.greenBorderCanBeDisplayed && (this.valueOK === true);
              }

         },

         mounted(){
             this.selectedValue = this.initialValue;
             this.errorMessage = this.initialErrorText;
             this.iconErrorCanBeDisplayed = (this.errorIconAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable);
             this.iconConfirmationCanBeDisplayed = (this.confirmationIconAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable);
             this.redBorderCanBeDisplayed = (this.redBorderAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable);
             this.greenBorderCanBeDisplayed = (this.greenBorderAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable);
		}

        props : {
            visibleOptionsList : {
                required : true,
                type : Array
            },

            optionValues : {
                required : false,
                type : Array,
                default : []
            },


             errorIconAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             confirmationIconAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             redBorderAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             greenBorderAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             initialOK : {
                 required : false,
                 type : Boolean,
                 default : undefined
             },

             completeErrorDisplayAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             completeConfirmationDisplayAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             completeValidationDisplayAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             errorMessageBoxAvailable : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             initialErrorText : {
                 required : false,
                 type : String,
                 default : undefined
             }
        },

        components : {
            IconConfirm,
            IconStop
        }
    }
</script>

<style lang="scss">

.select-label{
	display:flex;
	align-items: baseline;
	border-radius:7px;
	padding: 5px;
	color:white;
	font:{
      family: "Exo 2", sans-serif;
      size: 16px;
	};
	width:95%;
	margin:0 auto;
	background:#242229;
	position:relative;
	border: 2px solid transparent;
}

.select-description{
	white-space: nowrap;
}

.described-select{
	width:1%;
	flex-grow: 10;
	font:{
      family: "Exo 2", sans-serif;
      size: 16px;
	};
	color:white;
	border: none;
	background:#242229;
	outline:none;
}

</style>