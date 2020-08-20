<template>
<div class="date-picker-container">
    <div v-show="errorMessageBoxAvailable" v-text="errorMessage" class="error-message-box"></div>
  	<div class="date-picker-description">
  		<slot></slot>
  	</div>
  	<div class="date-picker-flex-container">
     <icon-stop v-show="displayIconError"/>
     <icon-confirm v-show="displayIconConfirmation"/>
  	<div class="time-span-container">
  		<label for="date-picker-day" class="time-span-label">Dzień</label>
 	 	<select v-model="selectedDay" id="date-picker-day" class="time-span-select">
 	 	    <option value="0">--dzień--</option>
            <option v-for="day in numberOfDaysInMonth" v-bind:value="day">{{day}}</option>
 	 	</select>
 	</div>
  		
 	<div class="time-span-container">
 	    <label for="date-picker-month" class="time-span-label">Miesiąc</label>
        <select v-on:change="adjustByMonth" v-model="selectedMonth" id="date-picker-month" class="time-span-select">
           	<option value="0">--miesiąc--</option>
               <option v-for="(month, index) in months" v-bind:value="index + 1">{{month}}</option>
 	 	</select>
 	</div>
 	    
 	<div class="time-span-container">
  		<label for="date-picker-year" class="time-span-label">Rok</label>
 	 	<select v-model="selectedYear" id="date-picker-year" class="time-span-select">
 	 	    <option value="0">--rok--</option>
            <option v-for="n in timespan" v-bind:value="n + sinceYear">{{n + sinceYear}}</option>
 	 	</select>
 	</div>
  	</div>
  </div>
</template>

<script>
import IconStop from './icon_error_stop.vue';
import IconConfirm from './icon_confirm.vue';
import MonthsInDifferentLanguages from '../modules/helpers/months_in_different_languages.js'

	export default {
        name : 'date-picker',

        components : {
            IconStop,
            IconConfirm
        },

        methods : {
           adjustByMonth(){
               const months31 = [1,3,5,7,8,10,12];
               const months30 = [4,6,9,11];
               const currentMonth = this.selectedMonth;

               if(months31.includes(currentMonth)){
                   this.numberOfDaysInMonth = 31;
                   return;
               }

               if(months30.includes(currentMonth)){
                   this.numberOfDaysInMonth = 30;
                   return;
               }
               else{
                   this.numberOfDaysInMonth = (this.selectedYear % 4 === 0) ? 29 : 28;
               }
           }
        },

        props : {
          language : {
              required : false,
              type : String,
              default : 'Polski'
          },

          sinceYear : {
              required : false,
              type : Number,
              default : new Date().getFullYear() - 120
          },

          lastYear : {
            required : false,
            type : Number,
            default : new Date().getFullYear()
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
        },

        onDateSelectCallback : {
            required : false,
            type : Function,
            default : null
        }

    },

        data(){
            return{
               months : undefined,
               timespan : undefined,
               numberOfDaysInMonth : 31,
               selectedDay : 0,
               selectedMonth : 0,
               selectedYear : 0
            };
        },

        created(){
           this.months = MonthsInDifferentLanguages[this.language];
           this.errorMessage = this.initialErrorText;
           this.iconErrorCanBeDisplayed = (this.errorIconAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable);
           this.iconConfirmationCanBeDisplayed = (this.confirmationIconAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable);
           this.redBorderCanBeDisplayed = (this.redBorderAvailable || this.completeErrorDisplayAvailable || this.completeValidationDisplayAvailable);
           this.greenBorderCanBeDisplayed = (this.greenBorderAvailable || this.completeConfirmationDisplayAvailable || this.completeValidationDisplayAvailable);
           this.timespan = this.lastYear - this.sinceYear;
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
        }
    }
</script>

<style lang="scss">

   .date-picker-container{
		color:white;
        font:{
         family: "Exo 2", sans-serif;
         size: 1.3vw;
        } 
	}

	.date-picker-description{
		text-align: center;
        padding:3px;
        color:white;
	}

	.date-picker-flex-container{
		display:flex;
		border-radius: 8px;
		justify-content: space-evenly;
		background : #242229;
		padding: 3px;
		border: 2px solid transparent;
        position:relative;
        width: 95%;
        margin: 0 auto;
	}

	.time-span-select{
        border-radius: 4px;
        background: #242229;
        color: white;
        border: 1px solid black;
        font:{
            size:1vw;
            family:inherit
        }
	}

	.time-span-label{
		position: absolute;
        top: -9999px;
        left: -9999px;
	}

	.time-span-container{
        padding: 2px;
        border-radius: 6px;
    }
    
    .incorrect-value{
       border: 2px solid red;
    }

    .correct-value{
      border: 2px solid green;
   }

   @media (max-width:900px){

     .date-picker-container{
           font-size:18px;
       }

   }

   @media (max-width:1200px){
       .time-span-select{
           font-size:14px;
       }
   }

</style>