@isset($errorMessageBox)
         @include('components.controls.error_message_box', ['vueHookID' => $vueHookID])
@endisset
           
<div class="birth-date-container">
  	<div class="request-text">
  		{{$description}}
  	</div>
  	<div @isset($vueHookID) ref="label_ref_{{$vueHookID}}" @endisset class="flex-container @if(isset($showError) and $showError) input-with-error @elseif(isset($showConfirmation) and $showConfirmation) input-correct-value @endif">
      @isset($verificationIcons)
         @include('components.icons.icon_confirmation', ['vueHookID' => $vueHookID, 'showIconConfirmation' => isset($showConfirmation) ? $showConfirmation : false])
         @include('components.icons.icon_error', ['vueHookID' => $vueHookID, 'showIconError' => isset($showError) ? $showError : false])
   @endisset
  		<div class="time-span-container">
  			<label for="data-picker-polish-day" class="time-span-label">Dzień</label>
 	 	    <select @isset($vueHookID) ref="day_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}Change" @endisset name="day" class="time-span-select">
 	 	       <option value="0">-Dzień-</option>
           @for($i = 1 ; $i < 32 ; ++$i)
              <option @if(old('day') == $i) selected @endif value="{{$i}}">{{$i}}</option>
           @endfor
 	 	    </select>
 	    </div>
  		
 	    <div class="time-span-container">
 	       <label for="data-picker-polish-month" class="time-span-label">Miesiąc</label>
           <select @isset($vueHookID) ref="month_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}Change" @endisset name="month" class="time-span-select">
           	  <option value="0">-Miesiąc-</option>
       	 		  @for($i = 1; $i < 13 ; ++$i)
                  <option @if(old('month') == $i) selected @endif value="{{$i}}">
                      {{\App\Helpers\Constans\MonthsInPolish::MONTHS[$i]}}
                  </option>
              @endfor
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
 	 		       <option @if(old('year') == $i) selected @endif value="{{$i}}">{{$i}}</option>
          @endfor
 	 	    </select>
 	    </div>
  	</div>
  </div>