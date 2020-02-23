@isset($errorMessageBox)
         @include('components.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<div class="birth-date-container">
  	<div class="request-text">
  		{{$description}}
  	</div>
  	<div @isset($vueHookID) ref="label_ref_{{$vueHookID}}" @endisset class="flex-container">
      @isset($verificationIcons)
         @include('components.icon_confirmation', ['vueHookID' => $vueHookID])
         @include('components.icon_error', ['vueHookID' => $vueHookID, 'showError' => false])
   @endisset
  		<div class="time-span-container">
  			<label for="data-picker-polish-day" class="time-span-label">Dzień</label>
 	 	    <select @isset($vueHookID) ref="day_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}Change" @endisset name="day" class="time-span-select">
 	 	       <option value="0">-Dzień-</option>
           @for($i = 1 ; $i < 32 ; ++$i)
              <option value="{{$i}}">{{$i}}</option>
           @endfor
 	 	    </select>
 	    </div>
  		
 	    <div class="time-span-container">
 	       <label for="data-picker-polish-month" class="time-span-label">Miesiąc</label>
           <select @isset($vueHookID) ref="month_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}Change" @endisset name="month" class="time-span-select">
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
 	 	    <select @isset($vueHookID) ref="year_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}Change" @endisset name="year" class="time-span-select">
 	 	    	<option value="0">-Rok-</option>
          @php
             $currentYear = (int)date('Y');
             $yearToStartWith = $currentYear - $timespan;
             $lastAvailableYear = $currentYear - $numberOfYearsBeforeCurrentYear;
          @endphp
          @for($i = $yearToStartWith ; $i <= $lastAvailableYear; ++$i)
 	 		       <option value="{{$i}}">{{$i}}</option>
          @endfor
 	 	    </select>
 	    </div>
  	</div>
  </div>