<template>
   <div class="textarea-combo-container">
        <label for="textarea-combo-message" v-bind:class="{'phantom-label' : phantomLabel}" class="message-label"><slot></slot></label>
        <div class="textarea-wrapper">
            <icon-stop v-bind:attached-icon="true"  v-if="iconErrorCanBeDisplayed" v-show="displayIconError"/>
            <icon-confirm v-bind:attached-icon="true" v-if="iconConfirmationCanBeDisplayed" v-show="displayIconConfirmation"/>
		    <textarea ref="text_input" v-model="inputValue" v-bind:max="maxCharacters" v-bind:placeholder="placeholderText" :required="inputIsRequired" id="textarea-combo-message" v-bind:name="textareaName" v-bind:rows="rowsNumber" v-bind:class="{'incorrect-value' : displayRedBorder, 'correct-value' : displayGreenBorder}" class="textarea-combo-message"></textarea>
            <div v-if="errorMessageBoxAvailable" v-text="errorMessage" class="error-message-box"></div>
	    </div>
    </div>
</template>

<script>

	export default {
        name: 'textarea-combo',

        data() {
		 	return {
                 valueOK : undefined,
                 errorMessage : undefined,
                 inputValue : undefined,
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
                const root = this.$root;
                this.valueOK = false;
                this.errorMessage = root.translator.translate(errorMessage);
             },

             showValueIsOK(){
                 this.valueOK = true;
                 this.errorMessage = "";
             },

             resetValidation(){
                 this.valueOK = undefined;
                 this.errorMessage = "";
             }

         },

         created(){
             this.inputValue = this.initialValue;
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

             textareaName : {
                 required : false,
                 type : String,
                 default : "textarea_combo"
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
             },

             placeholderText : {
                 required : false,
                 type : String,
                 default : ""
             },
            
             inputIsRequired : {
                 required : false,
                 type : Boolean,
                 default : false
             },

             maxCharacters : {
                 required : false,
                 type : Number,
                 default : 1000
             },

             rowsNumber : {
                 required : false,
                 type : Number,
                 default : 6
             },

             phantomLabel : {
                 required : false,
                 type : Boolean,
                 default : false
             }


         }
    }
</script>

<style lang="scss">

@import '~sass/error_message_box';
@import'~sass/fonts';

.textarea-wrapper{
	position:relative;
}

.message-label{
    text-align: center;
    color: white;
    display: block;
    padding:3px 0px;
    @include responsive-font(1.4vw, 20px);
}

.phantom-label{
    position:absolute;
    top:-9999px;
    left:0;
}

.textarea-combo-container{
    width:95%;
    margin: 10px auto;
}

.textarea-combo-message{
	width:100%;
	display:block;
	border-radius:8px;
	background:#242229;
	color:white;
	border:2px solid transparent;
	resize:none;
    color:white;
    @include responsive-font;
	&:focus{
		outline:none;
		border:2px solid #6e0d1a;
	}
}

.incorrect-value{
    border: 2px solid red;
}

.correct-value{
    border: 2px solid green;
}

</style>