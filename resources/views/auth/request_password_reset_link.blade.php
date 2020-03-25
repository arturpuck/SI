@extends('auth.layouts.password_reseting')

@section('reset_form')
   <form method="POST" action="/password/email" class="password-reset-form">
   	@csrf
   	 <div class="user-information">Aby zresetować hasło prosimy wpisać poniżej adres email użytkownika podany przy rejestracji. Na ten adres zostanie wysłany link, w który należy kliknąć i następnie wypełnić formularz, który się pojawi.</div>
   	 @single_line_labeled_text_input(['description' => "Email :", "name" => "email", "type" => "email",'verificationIcons' => true])
	 @endsingle_line_labeled_text_input
   	 @submit_button(['caption' => 'Wyślij link'])
   	 @endsubmit_button
   </form>
@endsection