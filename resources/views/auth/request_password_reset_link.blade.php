@extends('layouts.base')

@section('title')
  Resetowanie hasła Sex-Imperium - podaj email
@endsection

@section('file-with-styles')
 {{asset('css/password_reset.css')}}
@endsection


@section('content')
    @error_list
    @enderror_list

   @includeWhen(Session::has('success'), 'components.success_information', ['message' => Session::get('success')])

   <form method="POST" action="{{route('auth.password.reset')}}" class="password-reset-form">
   	@csrf
   	 <div class="user-information">Aby zresetować hasło prosimy wpisać poniżej adres email użytkownika podany przy rejestracji. Na ten adres zostanie wysłany link, w który należy kliknąć i następnie wypełnić formularz, który się pojawi.</div>
   	 @single_line_labeled_text_input(['description' => "Email :", "name" => "email", "type" => "email",'verificationIcons' => true, 'required' => true, 'initialValue' => old('email') ? old('email') : '', 'showError' => $errors->has('email')])
	 @endsingle_line_labeled_text_input
   	 <submit-button>Wyślij link</submit-button>
   </form>
@endsection

@section('scripts')
<script src="{{asset('js/password_reset.js')}}"></script> 
@endsection