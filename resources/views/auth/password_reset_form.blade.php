<x-base title="{{__('reset_your_password')}}" description="{{__('password_reset_form_description')}}">
  <form method="POST" action="{{route('auth.password.reset')}}" class="password-reset-form">
    @csrf
    <input type="hidden" value="{{$token}}" name="token">
    <div class="user-information">{{__('please_fill_the_form_below_and_submit_it')}}</div>
    <text-input-combo
						@if($errors->has('email'))
							v-bind:initial-ok="false"
							initial-value="{{old('email')}}"
            @elseif($errors->any() and !$errors->has('email'))
              v-bind:initial-ok="true"
							initial-value="{{old('email')}}"
            @else
               initial-value="{{$email}}"
            @endif
            
						v-bind:input-is-required="true"
						v-bind:complete-validation-display-available="true"
						name="email"
						input-type="email"
						v-bind:error-message-box-available="true">
						{{ucfirst(__('email'))}} : 
					</text-input-combo>
  <form>
</x-base>


@section('reset_form')

   <form method="POST" action="/password/reset" class="password-reset-form">
   	@csrf
       
       
   	 @single_line_labeled_text_input(['description' => "Email :", "name" => "email", "type" => "email",'verificationIcons' => true, 'initialValue' => old('email') ? old('email') : $email, 'required' => true, 'showError' => $errors->has('email'), 'showConfirmation' => $errors->any() and !$errors->has('email')])
	   @endsingle_line_labeled_text_input

	 @single_line_labeled_text_input(['description' => "Nowe hasło :", "name" => "password", "type" => "password",'verificationIcons' => true, 'required' => true, 'showError' => $errors->has('password'), 'required' => true])
   @endsingle_line_labeled_text_input

    @single_line_labeled_text_input(['description' => "Potwierdź :", "name" => "password_confirmation", "type" => "password",'verificationIcons' => true, 'required' => true, 'showError' => $errors->has('password'), 'required' => true])
   @endsingle_line_labeled_text_input

   @nicecheckbox(['name' => 'log-me-in', 'description' => 'Zaloguj mnie po zresetowaniu', 'id' => 'log-me-in'])
   @endnicecheckbox

   @submit_button(['caption' => 'Zresetuj hasło'])
   @endsubmit_button
   </form>
@endsection