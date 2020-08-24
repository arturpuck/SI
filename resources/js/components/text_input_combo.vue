<template>
<div class="text-input-combo-container">
  <div v-show="errorMessageBoxAvailable" v-text="errorMessage" class="error-message-box">
	
  </div>
  <label v-bind:class="{'incorrect-value' : displayRedBorder, 'correct-value' : displayGreenBorder}" class="text-input-combo-value-label">
     <icon-stop v-show="displayIconError"/>
     <icon-confirm v-show="displayIconConfirmation"/>
     <span class="text-input-description"><slot></slot></span>
     <input ref="text_input" v-bind:name="name" class="text-input-combo-value" v-model="textInputValue" v-bind:type="inputType">
  </label>
</div>
</template>

<script>
import IconStop from './icon_error_stop.vue';
import IconConfirm from './icon_confirm.vue';

	export default {
        name: 'text-input-combo',
        data() {
		 	return {
                 valueOK : undefined,
                 errorMessage : undefined,
                 textInputValue : undefined,
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

         methods : {

             showError(errorMessage = ""){
                this.valueOK = false;
                this.errorMessage = errorMessage;
             },

             showValueIsOK(){
                 this.valueOK = true;
                 this.errorMessage = "";
             }

         },

         created(){
             this.textInputValue = this.initialValue;
             this.errorMessage = this.initialErrorText;
             this.iconErrorCanBeDisplayed = (this.errorIconAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable);
             this.iconConfirmationCanBeDisplayed = (this.confirmationIconAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable);
             this.redBorderCanBeDisplayed = (this.redBorderAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable);
             this.greenBorderCanBeDisplayed = (this.greenBorderAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable);
             this.valueOK = this.initialOk;
        },
        
        mounted(){
            if(this.onBlurCallback){
                this.$refs.text_input.addEventListener('blur',() => this.onBlurCallback(this));
            }
        },
         
         props : {
             initialValue : {
                 required : false,
                 type : String,
                 default : ""
             },

             name : {
                 required : false,
                 type : String,
                 default : "text_input_combo"
             },

             inputType : {
                 required : false,
                 type : String,
                 default : "text"
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

             initialOk : {
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
             },

             onBlurCallback : {
                 required : false,
                 type : Function,
                 default : null
             }

         },

        components : {
            IconConfirm,
            IconStop
        }
    }
</script>

<style lang="scss">

.icon-container{
    top: 0;
    right:0;
    transform:translate(50%,-50%);
    position:absolute;
}

.text-input-combo-value-label {
    display: flex;
    align-items: baseline;
    background: #242229;
    padding: 3px 10px;
    border-radius: 8px;
    color:white;
    width:95%;
    font:{
    	family: "Exo 2", sans-serif;
    	size: 16px;
    }
    margin:6px auto;
    border: 2px solid transparent;
    position:relative;
}


.text-input-description
{
	white-space: nowrap;
    font:{
        family: "Exo 2", sans-serif;
        size:1.2vw;
    };
}

.text-input-combo-value {
    background: #242229;
    border: none;
    border-bottom: 1px solid transparent;
    height: 24px;
    color: #fff;
    width: 1%;
    flex-grow:10;
    padding-left:4px;
    font:{
        family: "Exo 2", sans-serif;
        size:1.2vw;
    };
}

.text-input-combo-value:focus {
    outline: none;
    border-bottom: 1px solid #86838f;
}

.incorrect-value{
    border: 2px solid red;
}

.correct-value{
    border: 2px solid green;
}

@media (max-width:1200px) {

   .text-input-description .text-input-combo-value{
       font-size:18px;
    }
}

</style>