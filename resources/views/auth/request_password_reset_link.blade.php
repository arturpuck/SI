<x-base title="{{__('password_reset_request_form')}}" cssFilePath="{{asset('css/password_reset.css')}}" description="{{__('password_reset_description')}}" >
<form method="POST" action="{{route('auth.request.password.reset.link')}}" class="password-reset-form">
      @csrf
      <div class="user-information-container">
        <div v-show="verificationInProgress" class="shadow-container">
              <expect-bar label="{{__('verification_in_progress')}}" v-bind:hidden="false"></expect-bar>
        </div>
        <div class="user-information">
          {{__('request_password_reset_link_form_description')}}
        </div>
      </div>

      <text-input-combo
						@error('email')
							v-bind:initial-ok="false"
							initial-value="{{old('email')}}"
						@enderror

						v-bind:input-is-required="true"
						v-bind:on-blur-callback="validateEmail"
						v-bind:complete-validation-display-available="true"
						name="email"
						input-type="email"
						v-bind:error-message-box-available="true">
						{{ucfirst(__('email'))}} : 
			</text-input-combo>
      <submit-button>{{__("send_link")}}</submit-button>
    </form>
</x-base>
