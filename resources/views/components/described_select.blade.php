@isset($errorMessageBox)
         @include('components.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset class="select-label">
	@isset($verificationIcons)
         @include('components.verification_icons', ['vueHookID' => $vueHookID])
	 @endisset
	<span class="select-description">{{$description}}</span>
	<select name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}SelectOption"@endisset class="described-select">
		@foreach($options as $option)
            <option value="{{$option}}">{{$option}}</option>
		@endforeach
	</select>
</label>