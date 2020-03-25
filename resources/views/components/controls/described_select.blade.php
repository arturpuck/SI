@isset($errorMessageBox)
         @include('components.controls.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset class="select-label @if($errors->has($name)) input-with-error @elseif($errors->any() && !$errors->has($name)) input-correct-value @endif">
	@isset($verificationIcons)
         @include('components.icons.icon_confirmation', ['vueHookID' => $vueHookID, 'show' => $errors->any() && !$errors->has($name)])
         @include('components.icons.icon_error', ['vueHookID' => $vueHookID, 'show' => $errors->has($name)])
	 @endisset
	<span class="select-description">{{$description}}</span>
	<select name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:change="{{$vueHookID}}SelectOption"@endisset class="described-select">
		@foreach($options as $option)
            <option @if(old($name) === "$option") selected @endif value="{{$option}}">{{$option}}</option>
		@endforeach
	</select>
</label>