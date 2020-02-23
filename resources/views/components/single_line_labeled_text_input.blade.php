@isset($errorMessageBox)
         @include('components.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset  class="single-line-text-input-label @error($name) input-with-error @enderror">
	 @isset($verificationIcons)
         @include('components.icon_confirmation', ['vueHookID' => $vueHookID])
         @include('components.icon_error', ['vueHookID' => $vueHookID, 'showError' => $errors->has($name)])
	 @endisset
	
	<span class="text-input-description">{{$description}}</span>
	  <input name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:focusout="{{$vueHookID}}LooseFocus"@endisset class="single-line-text-input" value="@if(old($name)){{old($name)}}@elseif(isset($initialValue)){{$initialValue}}@endif" type="{{$type}}">
</label>