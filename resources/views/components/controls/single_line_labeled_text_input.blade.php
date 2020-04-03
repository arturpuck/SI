@isset($errorMessageBox)
         @include('components.controls.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset  class="single-line-text-input-label @if($errors->has($name)) input-with-error @elseif($errors->any() && !$errors->has($name) && old($name)) input-correct-value @endif">
	 @isset($verificationIcons)
            @include('components.icons.icon_confirmation', ['show' => $errors->any() && !$errors->has($name)])
             @include('components.icons.icon_error', ['show' => $errors->has($name)])
	 @endisset
	
	<span class="text-input-description">{{$description}}</span>
	  <input @isset($placeholder) placeholder="{{$placeholder}}" @endisset name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:focusout="{{$vueHookID}}LooseFocus"@endisset class="single-line-text-input" value="@if(old($name)){{old($name)}}@elseif(isset($initialValue)){{$initialValue}}@endif" type="{{$type}}" @isset($required) required @endisset>
</label>