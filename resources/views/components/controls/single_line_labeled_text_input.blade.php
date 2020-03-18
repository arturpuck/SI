@isset($errorMessageBox)
         @include('components.controls.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset  class="single-line-text-input-label @if($errors->has($name)) input-with-error @endif">
	 @isset($verificationIcons)
         @include('components.icons.icon_confirmation', ['vueHookID' => $vueHookID, 'show' => false])
         @include('components.icons.icon_error', ['vueHookID' => $vueHookID, 'show' => $errors->has($name)])
	 @endisset
	
	<span class="text-input-description">{{$description}}</span>
	  <input @isset($placeholder) placeholder="{{$placeholder}}" @endisset name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:focusout="{{$vueHookID}}LooseFocus"@endisset class="single-line-text-input" value="@if(old($name)){{old($name)}}@elseif(isset($initialValue)){{$initialValue}}@endif" type="{{$type}}">
</label>