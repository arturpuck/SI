@extends('auth.layouts.password_reseting')

@section('reset_form')
   <form method="POST" action="/password/reset" class="password-reset-form">
   	@csrf
       <div class="user-information">Proszę wypełnić formularz i zatwierdzić zmiany</div>
       <input type="hidden" value="{{$token}}" name="token">
   	 @single_line_labeled_text_input(['description' => "Email :", "name" => "email", "type" => "email",'verificationIcons' => true, 'initialValue' => $email, 'required' => true])
	   @endsingle_line_labeled_text_input

	 @single_line_labeled_text_input(['description' => "Nowe hasło :", "name" => "password", "type" => "password",'verificationIcons' => true, 'required' => true])
	 @endsingle_line_labeled_text_input

	  @single_line_labeled_text_input(['description' => "Potwierdź :", "name" => "password_confirmation", "type" => "password",'verificationIcons' => true, 'required' => true])
	 @endsingle_line_labeled_text_input

   @submit_button(['caption' => 'Zresetuj hasło'])
   @endsubmit_button
   </form>
@endsection