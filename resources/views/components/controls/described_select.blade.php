@isset($errorMessageBox)
         @include('components.controls.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset class="select-label @if(isset($showError) and $showError) input-with-error @elseif(isset($showConfirmation) and $showConfirmation) input-correct-value @endif">
	@isset($verificationIcons)
         @include('components.icons.icon_confirmation', ['vueHookID' => $vueHookID, 'showIconConfirmation' => isset($showConfirmation) ? $showConfirmation : false])
         @include('components.icons.icon_error', ['vueHookID' => $vueHookID, 'showIconError' => isset($showError) ? $showError : false])
	 @endisset
	<span class="select-description">{{$description}}</span>
	<select name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}SelectOption"@endisset class="described-select">
		@foreach($options as $option)
            <option @if(old($name) === "$option") selected @endif value="{{$option}}">{{$option}}</option>
		@endforeach
	</select>
</label>