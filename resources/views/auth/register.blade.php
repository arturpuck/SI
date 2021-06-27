<x-base title="{{__('create_an_account')}}" customBodyClass="{{$customBodyClass}}" description="{{__('registration_description')}}">
		<main id="main-panel" class="main-panel @if($errors->any())main-panel-without-top-margin @endif">
			<section class="register-panel">
				<form ref="register_panel" method="POST" action="{{route('auth.register.create')}}" class="main-panel-form register-form">
					@csrf
					<input type="hidden" value="register-form" name="register-form-has-been-used">
					<text-input-combo
					@if(old('register-form-has-been-used'))
						@error('login')
						  v-bind:initial-ok="false"
						  initial-value="{{old('login')}}"
						@enderror
						
						@if($errors->any() and !$errors->has('login'))
							v-bind:initial-ok="true"
							initial-value="{{old('login')}}"
						@endif
					@endif

                        v-bind:input-is-required="true"
						v-bind:on-blur-callback="validateLogin"
						v-bind:complete-validation-display-available="true"
						name="login"
						v-bind:error-message-box-available="true">
						{{ucfirst(__('login'))}} : 
					</text-input-combo>

					<text-input-combo
					@if(old('register-form-has-been-used'))
						@error('email')
							v-bind:initial-ok="false"
							initial-value="{{old('email')}}"
						@enderror

						@if($errors->any() and !$errors->has('email'))
							v-bind:initial-ok="true"
							initial-value="{{old('email')}}"
						@endif
                    @endif
						v-bind:input-is-required="true"
						v-bind:on-blur-callback="validateEmail"
						v-bind:complete-validation-display-available="true"
						name="email"
						input-type="email"
						v-bind:error-message-box-available="true">
						{{ucfirst(__('email'))}} : 
					</text-input-combo>

					<text-input-combo
					@if(old('register-form-has-been-used'))
						@error('password')
							v-bind:initial-ok="false"
						@enderror

						@if($errors->any() and !$errors->has('password'))
							v-bind:initial-ok="true"
							initial-value="{{old('password')}}"
						@endif
                    @endif
						v-bind:input-is-required="true"
						v-bind:on-blur-callback="validatePassword"
						v-bind:complete-validation-display-available="true"
						input-type="password"
						name="password"
						v-bind:error-message-box-available="true">
						{{ucfirst(__('password'))}} : 
					</text-input-combo>

					<described-select
					@if(old('register-form-has-been-used'))
						@error('user_type_id')
							v-bind:initial-ok="false"
							initial-value="{{old('user_type_id')}}"
						@enderror

						@if($errors->any() and !$errors->has('user_type_id'))
							v-bind:initial-ok="true"
							initial-value="{{old('user_type_id')}}"
						@endif
					@endif	
						v-bind:visible-options-list="['--{{__('choose')}}--',@foreach($userTypes as $userType) '{{__($userType->user_type_name.'_i')}}', @endforeach '{{__('i_dont_want_to_tell')}}']"
						v-bind:option-values="['not-selected', @foreach($userTypes as $userType) '{{$userType->id}}', @endforeach '']"
						v-bind:on-change-callback="validateSelect"
						v-bind:error-message-box-available="true"
						v-bind:complete-validation-display-available="true"
						name="user_type_id">
							{{ucfirst(__('i_am'))}} : 
					</described-select>

					<described-select
					@if(old('register-form-has-been-used'))
						@error('sexual_orientation_id')
							v-bind:initial-ok="false"
							initial-value="{{old('sexual_orientation_id')}}"
						@enderror

						@if($errors->any() and !$errors->has('sexual_orientation_id'))
							v-bind:initial-ok="true"
							initial-value="{{old('sexual_orientation_id')}}"
						@endif
                    @endif
						v-bind:visible-options-list="['--{{__('choose')}}--',@foreach($sexualOrientations as $sexualOrientation) '{{__($sexualOrientation->sexual_orientation_name)}}', @endforeach '{{__('i_dont_want_to_tell')}}']"
						v-bind:option-values="['not-selected', @foreach($sexualOrientations as $sexualOrientation) '{{$sexualOrientation->id}}', @endforeach '']"
						v-bind:on-change-callback="validateSelect"
						v-bind:error-message-box-available="true"
						v-bind:complete-validation-display-available="true"
						name="sexual_orientation_id">
						{{ucfirst(__('orientation'))}} : 
					</described-select>

					<date-picker
					@if(old('register-form-has-been-used'))
					   @error('birth_date')
							v-bind:initial-ok="false"
							initial-value="{{old('birth_date')}}"
						@enderror

					   @if($errors->any() and !$errors->has('birth_date'))
							v-bind:initial-ok="true"
							initial-value="{{old('birth_date')}}"
					   @endif
                    @endif
					   v-bind:error-message-box-available="true"
					   name="birth_date"
					   v-bind:on-date-select-callback="checkIfUserIsAdault"
					   v-bind:complete-validation-display-available="true">
					{{ucfirst(__('birth_date'))}}
					</date-picker>
				    
                    <submit-button>{{ucfirst(__('register'))}}</submit-button>
				</form>
			</section>
			<section class="information-section">
				<div class="scroll-container">
					<div v-show="verificationInProgress" class="shadow-container">
						<expect-circle label="{{__('verification_in_progress')}}" v-bind:hidden="false"></expect-circle>
					</div>
				<p class="registration-requirements">
						<strong>{{__('registration_and_usage_only_for_adaults')}}.</strong> {{__('the_data_must_meet_the_following_requirements')}}. <strong>{{__('it_is_impossible_to_modify_a_birth_date_and_a_login')}}</strong>
						<dl class="input-list">
							<dt class="input-name">{{__('login')}}</dt>
							<dd class="input-description">{{__('login_requirements')}}</dd>
							<dt class="input-name">{{__('email')}}</dt>
							<dd class="input-description">{{__('email_requirements')}}</dd>
							<dt class="input-name">{{__('password')}}</dt>
							<dd class="input-description">{{__('password_requirements')}}</dd>
							<dt class="input-name">{{__('who_you_are')}}</dt>
							<dd class="input-description">{{__('it_is_about_user_sex')}} {{__('the_field_is_optional')}}.</dd>
							<dt class="input-name">{{__('orientation')}}</dt>
							<dd class="input-description">{{__('sexual_orientation')}} {{__('the_field_is_optional')}}.</dd>
							<dt class="input-name">{{__('birth_date')}}</dt>
							<dd class="input-description">{{__('birth_date_requirements')}}</dd>
						</dl>
					</p>
				</div>
			</section>
		</main>
</x-base>