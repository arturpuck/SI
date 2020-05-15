@extends('auth.layouts.password_reseting')

@section('reset_form')

   <form method="POST" action="/password/reset" class="password-reset-form">
   	@csrf
       <div class="user-information">Proszę wypełnić formularz i zatwierdzić zmiany</div>
       <input type="hidden" value="{{$token}}" name="token">
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