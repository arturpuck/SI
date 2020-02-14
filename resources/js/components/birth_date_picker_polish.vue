<template>
  <div class="birth-date-container">
  	<div class="request-text">
  		{{request_text}}
  	</div>
  	<div ref="date_inputs_all" class="flex-container">
  		<div class="time-span-container">
  			<label for="data-picker-polish-day" class="time-span-label">Dzień</label>
 	 	    <select ref="data_picker_day" v-on:change="verifyDate" id="data-picker-polish-day" name="day" class="time-span-select">
 	 	       <option value="0">-Dzień-</option>
 	 		   <option v-for="day_of_month in 31" v-bind:value="day_of_month">{{day_of_month}}</option>
 	 	    </select>
 	    </div>
  		
 	    <div class="time-span-container">
 	       <label for="data-picker-polish-month" class="time-span-label">Miesiąc</label>
           <select ref="data_picker_month" v-on:change="verifyDate" id="data-picker-polish-month" name="month" class="time-span-select">
           	  <option value="0">-Miesiąc-</option>
 	 		  <option value="1">Styczeń</option>
 	 		  <option value="2">Luty</option>
 	 		  <option value="3">Marzec</option>
 	 		  <option value="4">Kwiecień</option>
 	 		  <option value="5">Maj</option>
 	 		  <option value="6">Czerwiec</option>
 	 		  <option value="7">Lipiec</option>
 	 		  <option value="8">Sierpień</option>
 	 		  <option value="9">Wrzesień</option>
 	 		  <option value="10">Październik</option>
 	 		  <option value="11">Listopad</option>
 	 		  <option value="12">Grudzień</option>
 	 	   </select>
 	    </div>
 	    
 	    <div class="time-span-container">
  			<label for="data-picker-polish-year" class="time-span-label">Rok</label>
 	 	    <select v-on:change="verifyDate" ref="data_picker_year" id="data-picker-polish-year" name="day" class="time-span-select">
 	 	    	<option value="0">-Rok-</option>
 	 		    <option v-for="year in 118" v-bind:value="year + earliestYear">{{year + earliestYear}}</option>
 	 	    </select>
 	    </div>
  	</div>
  </div>
</template>

<script>
	export default {
    name: 'birth-date-picker-polish',

    data()
    {
         let yearNow = new Date().getFullYear();
         let earliestValidYear = yearNow - 120;

         return {
            earliestYear : earliestValidYear
         };
    },

    methods: {

    	verifyDate()
    	{
           
           function isLeapYear(year)
           {
           	  return !((year - 2020) % 4); 
           }

           function errorNotification()
           {
           	 this.$refs.date_inputs_all.style.border = "2px solid red";
           }

           const dayNumber = parseInt(this.$refs.data_picker_day.value);
           const monthNumber = parseInt(this.$refs.data_picker_month.value);

           if((dayNumber === 0) || (monthNumber === 0))
           {
           	 this.$refs.date_inputs_all.style.border = "2px solid transparent";
           	 return;
           }
           else
           {

              const year = parseInt(this.$refs.data_picker_year.value);
              const monthWith31Days = [1,3,5,7,8,10,12].includes(monthNumber) ;

              if(monthWith31Days && ((dayNumber > 31) || (dayNumber < 1)))
              { 
                 errorNotification.call(this);
                 return;
              }
              
              if(!monthWith31Days)
              {
              	  if(monthNumber === 2)
              	  {
                       let lastDayInFebruary = isLeapYear(year) ? 29 : 28;

                       if((dayNumber < 1) || (dayNumber > lastDayInFebruary))
                       {
                       	  errorNotification.call(this);
                       	  return;
                       }
              	  }
              	  else if((dayNumber < 1) || (dayNumber > 30))
              	  {
              	  	 	errorNotification.call(this);
              	  	 	return;
              	  }
              }

               
               this.$refs.date_inputs_all.style.border = ((monthNumber !== 0) && (year !== 0)) ? "2px solid green" : "2px solid transparent";

           }

           
    	}

    },

    props: {
    	
    	  request_text : {
    		type : String,
    		required : false,
    		default : "Data urodzenia"
    	}
    }
}
	
</script>

<style>
	.birth-date-container{
		width: 95%;
		margin: 3px auto;
		color:white;
        font-family: "Exo 2", sans-serif;
        font-size: 16px;
	}

	.request-text{
		text-align: center;
		padding:3px;

	}

	.flex-container{
		display:flex;
		border-radius: 8px;
		justify-content: space-evenly;
		background : #242229;
		padding: 3px;
		font-size: 13px;
		border: 2px solid transparent;
	}

	.time-span-select{
        border-radius: 4px;
        background: #242229;
        color: white;
        font-family: inherit;
        font-size:15px;
        border: 1px solid black;
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

</style>