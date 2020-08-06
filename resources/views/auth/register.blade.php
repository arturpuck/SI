@extends('layouts.base')

@section('title')
  Logowanie i rejestracja : Sex-Imperium
@endsection

@section('file-with-styles')
 {{asset('css/auth/login_or_register.css')}}
@endsection

@section('description')
  Logowanie i rejestracja w Sex-Imperium
@endsection
	
@section('content')
	<div class="mainpage-background mainpage-background-number-{{$randomImageNumber}}">
		 @error_list
         @enderror_list
		<main id="main-panel" class="main-panel @if($errors->any())main-panel-without-top-margin @endif">
			<section class="login-or-register-panel">
				
				<form ref="register_panel" method="POST" action="/register" class="main-panel-form register-form">
					@csrf
                    <input type="hidden" name="register_panel_selected" value="1" >
				    @single_line_labeled_text_input(['description' => "Login :", "name" => "registration_login", "type" => "text", 'vueHookID' => 'registrationLogin', 'verificationIcons' => true, 'errorMessageBox' => true, 'initialValue' => old('registration_login') ? old('registration_login') : '', 'showConfirmation' => ($errors->any() and !$errors->has('registration_login') and old('register_panel_selected')), 'showError' => $errors->has('registration_login'), 'required' => true ])
				    @endsingle_line_labeled_text_input

				    @single_line_labeled_text_input(['description' => "Email :", "name" => "registration_email", "type" => "email", 'vueHookID' => 'email', 'verificationIcons' => true, 'errorMessageBox' => true, 'initialValue' => old('registration_email') ? old('registration_email') : '', 'showConfirmation' => ($errors->any() and !$errors->has('registration_email') and old('register_panel_selected')), 'showError' => $errors->has('registration_email'), 'required' => true])
				    @endsingle_line_labeled_text_input
				    
                   	 @single_line_labeled_text_input(['description' => "Hasło :", "name" => "registration_password", "type" => "password", 'vueHookID' => 'registrationPassword','verificationIcons' => true, 'errorMessageBox' => true, 'initialValue' => old('registration_password') ? old('registration_password') : '', 'showConfirmation' => ($errors->any() and !$errors->has('registration_password') and old('register_panel_selected')), 'showError' => $errors->has('registration_password'), 'required' => true])
				    @endsingle_line_labeled_text_input

				    @described_select(['description' => 'Jestem :', 'name' => 'user_type','options' => ['--wybierz--','mężczyzną', 'kobietą', 'parą', 'hermafrodytą', 'transseksualistą', 'nie chcę podać'], 'verificationIcons' => true, 'vueHookID' => 'userType', 'errorMessageBox' => true, 'showConfirmation' => ($errors->any() and !$errors->has('user_type') and old('register_panel_selected')), 'showError' => $errors->has('user_type')])
				    @enddescribed_select

				    @described_select(['description' => 'Orientacja :', 'name' => 'sexual_orientation', 'options' => ['--wybierz--','heteroseksualna', 'homoseksualna', 'biseksualna','autoseksualna', 'aseksualna','nie chcę podać'], 'verificationIcons' => true, 'vueHookID' => 'sexualOrientation', 'errorMessageBox' => true, 'showConfirmation' => ($errors->any() and !$errors->has('sexual_orientation') and old('register_panel_selected')), 'showError' => $errors->has('sexual_orientation')])
				    @enddescribed_select

				    @date_picker_polish(['description' => 'Data urodzenia', 'timespan' => 120, 'numberOfYearsBeforeCurrentYear' => 18, 'vueHookID' => 'birthDate' , 'verificationIcons' => true, 'errorMessageBox' => true, 'name' => 'birth_date', 'showConfirmation' => ($errors->any() and !$errors->has('birth_date') and old('register_panel_selected')), 'showError' => $errors->has('birth_date')])
				    @enddate_picker_polish

					@submit_button(['caption' => 'Zarejestruj'])
					@endsubmit_button
				</form>
			</section>
			<section class="information-sections">
				

			   <div ref="registration_information">
				<strong>Rejestracja i korzystanie z serwisu tylko dla osób pełnoletnich.</strong> Podczas przechodzenia na inne pole wprowadzone informacje zostaną automatycznie sprawdzone. Informacje muszą spełniać wymienione poniżej kryteria. <strong>Zmiana daty urodzenia nie będzie możliwa po zarejestrowaniu</strong>
				<dl class="input-list">
					<dt class="input-name">Login</dt>
					<dd class="input-description">Od 3 do 20 znaków. Login nie może być wykorzystany przez innego użytkownika.</dd>
					<dt class="input-name">Email</dt>
					<dd class="input-description">Należy podać poprawny adres email, ponadto nie może on być wykorzystany przez innego użytkownika.</dd>
					<dt class="input-name">Hasło</dt>
					<dd class="input-description">Od 3 do 20 znaków. Im więcej symboli tym lepsze zabezpieczenie</dd>
					<dt class="input-name">Kim jesteś</dt>
					<dd class="input-description">Chodzi o płeć/typ użytkownika. Pole jest opcjonalne i w sytuacji gdy ktoś nie chce udzielać informacji na ten temat może zaznaczyć opcję "nie chcę podać".</dd>
					<dt class="input-name">Orientacja</dt>
					<dd class="input-description">Orientacja seksualna. Pole jest opcjonalne i w sytuacji gdy ktoś nie chce udzielać informacji na ten temat może zaznaczyć opcję "nie chcę podać".</dd>
					<dt class="input-name">Data urodzenia</dt>
					<dd class="input-description">Należy podać datę urodzenia. Korzystanie z serwisu jest dozwolone tylko dla osób pełnoletnich</dd>
				</dl>
			   </div>
			</section>
			
		</main>
	</div>
	@endsection

@section('scripts')
<script src="{{asset('js/register.js')}}"></script> 
@endsection
	