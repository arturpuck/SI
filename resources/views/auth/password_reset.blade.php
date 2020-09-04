<x-base cssFilePath="{{asset('css/password_reset.css')}}" jsFilePath="{{asset('js/password_reset.js')}}" title="{{__('reset_your_password')}}" description="{{__('password_reset_form_description')}}">
  <form method="POST" action="{{route('auth.password.reset')}}" class="password-reset-form">
    @csrf
    <input type="hidden" value="{{$token}}" name="token">
    <div class="user-information">{{__('please_fill_the_form_below_and_submit_it')}}</div>
		 <text-input-combo
			@if($errors->has('email'))
				initial-value="{{old('email')}}"
			@else
				initial-value="{{$email}}"
			@endif
				
			v-bind:input-is-required="true"
			name="email"
			input-type="email">
			{{ucfirst(__('email'))}} : 
		 </text-input-combo>

          <text-input-combo ref="password"
				v-bind:input-is-required="true"
				v-bind:on-blur-callback="checkPassword"
				v-bind:complete-validation-display-available="true"
				input-type="password"
                name="password"
				v-bind:error-message-box-available="true">
				{{ucfirst(__('password'))}} : 
			</text-input-combo>

          <text-input-combo ref="password_confirmation"
				v-bind:input-is-required="true"
				v-bind:on-blur-callback="checkPassword"
				v-bind:complete-validation-display-available="true"
				input-type="password"
				name="password_confirmation"
				v-bind:error-message-box-available="true">
				{{ucfirst(__('password_confirmation'))}} : 
			</text-input-combo>
			<labeled-checkbox
			  name="log-me-in"
			  v-bind:checked-at-start="true"
			>
				{{__('log_me_in_after_reseting')}}
			</labeled-checkbox>
           <submit-button>{{__('reset_password')}}</submit-button>
  <form>
</x-base>