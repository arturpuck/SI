<x-base title="{{__('contact_management')}}" action="{{route('contact.send.message')}}" description="{{__('contact_form_allows_you_to_contact_management')}}">
   <x-report/>
	<form method="POST" action="{{route('contact.send.message')}}" class="contact-form">
		@csrf
		<div class="form-description">{{__("to_contact_us_please_use_form_below")}}</div>

        <text-input-combo
			@error('email')
				v-bind:initial-ok="false"
				initial-value="{{old('email')}}"
			@enderror

			@if($errors->any() and !$errors->has('email'))
				v-bind:initial-ok="true"
				initial-value="{{old('email')}}"
			@endif
			input-type="email"			
			v-bind:on-blur-callback="validateEmail"
			v-bind:complete-error-display-available="true"
			name="email"
			placeholder-text="{{__('not_required')}}"
			v-bind:error-message-box-available="true">
			{{ucfirst(__('email'))}} : 
		</text-input-combo>

		<text-input-combo
			@error('subject')
				v-bind:initial-ok="false"
				initial-value="{{old('subject')}}"
			@enderror

			@if($errors->any() and !$errors->has('subject'))
				v-bind:initial-ok="true"
				initial-value="{{old('subject')}}"
			@endif
            
			v-bind:on-blur-callback="validateSubject"			
			v-bind:complete-error-display-available="true"
			name="subject"
			placeholder-text="{{__('not_required').', '.__('max_40_characters')}}"
			v-bind:error-message-box-available="true">
			{{ucfirst(__('subject'))}} : 
		</text-input-combo>

		<textarea-combo
		  v-bind:input-is-required="true"
		  textarea-name="message"
		  v-bind:error-message-box-available="true"
		  placeholder-text="{{__('required_between_3_and_1000')}}"
		  v-bind:on-blur-callback="validateMessage"
		  v-bind:complete-error-display-available="true"
		  @error('message')
				v-bind:initial-ok="false"
				initial-value="{{old('message')}}"
		  @enderror
		  @if($errors->any() and !$errors->has('message'))
				v-bind:initial-ok="true"
				initial-value="{{old('message')}}"
		 @endif >
			{{ucfirst(__('message_content'))}}
		</textarea-combo>
		<submit-button>{{ucfirst(__('send'))}}</submit-button>
	</form>
</x-base>