@isset($errorMessageBox)
         @include('components.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset  class="single-line-text-input-label">
	 @isset($verificationIcons)
         @include('components.verification_icons', ['vueHookID' => $vueHookID])
	 @endisset
	
	<span class="text-input-description">{{$description}}</span>
	  <input name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:focusout="{{$vueHookID}}LooseFocus"@endisset class="single-line-text-input" value="@isset($initialValue){{$initialValue}}@endisset" type="{{$type}}">
</label>