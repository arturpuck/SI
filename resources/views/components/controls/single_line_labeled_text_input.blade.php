@isset($errorMessageBox)
         @include('components.controls.error_message_box', ['vueHookID' => $vueHookID])
@endisset
<label @isset($vueHookID)ref="label_ref_{{$vueHookID}}"@endisset  class="single-line-text-input-label @if(isset($showError) and $showError) input-with-error @elseif(isset($showConfirmation) and $showConfirmation) input-correct-value @endif">
	 @isset($verificationIcons)
            @include('components.icons.icon_confirmation', ['showIconConfirmation' => isset($showConfirmation) ? $showConfirmation : false ])
             @include('components.icons.icon_error', ['showIconError' => isset($showError) ? $showError : false])
	 @endisset
	
	<span class="text-input-description">{{$description}}</span>
	  <input @isset($placeholder) placeholder="{{$placeholder}}" @endisset name="{{$name}}" @isset($vueHookID)ref="input_ref_{{$vueHookID}}" v-on:focusout="{{$vueHookID}}LooseFocus"@endisset class="single-line-text-input" value="@if(isset($initialValue)){{$initialValue}}@endif" type="{{$type}}" @isset($required) required @endisset>
</label>