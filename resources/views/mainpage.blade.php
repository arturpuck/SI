<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>Sex-imperium - wszystko dla seksu w jednym miejscu</title>
	<meta name="description" content="Sex-Imperium - wszystko dla seksu. Pornografia(filmy, zdjęcia), sex-randki(żadnych opłat za korzystanie), oraz prostytucja">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="{{asset('css/mainpage.css')}}">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich&display=swap" rel="stylesheet">
</head>
<body class="full-body">
	@main_page_navbar(['navigationItems' => [['Porno','porno'],['Prostytucja','prostytucja'], ['Randki', 'randki']]])
	@endmain_page_navbar
	<div class="mainpage-background mainpage-background-number-{{$randomImageNumber}}">
		<main id="main-panel" class="main-panel">
			<section class="login-or-register-panel">
				<div class="switch-panel-options">
					<button ref="show_login_form_button" v-on:click="showLoginPanel" class="form-switch-button switch-to-login">Logowanie</button>
					<button ref="show_register_form_button" v-on:click="showRegistrationPanel" class="form-switch-button switch-to-register">Rejestracja</button>
				</div>
				<form ref="login_panel" action="/login" method="POST" id="login-form" class="main-panel-form">
					@csrf
					<div class="login-information">Logowanie nie jest konieczne do korzystania z serwisu</div>
					<label for="login" class="main-panel-label">Email lub nick</label>
					<input type="text" class="main-panel-input" id="login" name="login">
					<label for="password" class="main-panel-label">Hasło</label>
					<input type="password" class="main-panel-input" id="password" name="login">
					<input type="submit" class="submit-button" value="Zaloguj">
					@nicecheckbox
                        @slot('name')
                           remember-me
                        @endslot

                        @slot('id')
                           remember-me
                        @endslot

                        @slot('description')
                           Zapamiętaj mnie
                        @endslot
					@endnicecheckbox
					<a href="" class="forgot-password-link">Zapomniałem hasła</a>
				</form>
				<form ref="register_panel" method="POST" action="/register" class="main-panel-form register-form">
					@csrf
                    
				    @single_line_labeled_text_input(['description' => "Login :", "name" => "registartion-login", "type" => "text", 'vueHookID' => 'registrationLogin', 'verificationIcons' => true, 'errorMessageBox' => true])
				    @endsingle_line_labeled_text_input

				    @single_line_labeled_text_input(['description' => "Email :", "name" => "registartion-email", "type" => "email", 'vueHookID' => 'email', 'verificationIcons' => true, 'errorMessageBox' => true])
				    @endsingle_line_labeled_text_input
				    
                   	 @single_line_labeled_text_input(['description' => "Hasło :", "name" => "registartion-password", "type" => "password", 'vueHookID' => 'registrationPassword','verificationIcons' => true, 'errorMessageBox' => true])
				    @endsingle_line_labeled_text_input

				    @described_select(['description' => 'Jestem :', 'name' => 'user-type','options' => ['--wybierz--','mężczyzną', 'kobietą', 'parą', 'hermafrodytą', 'transseksualistą', 'nie chcę podać'], 'verificationIcons' => true, 'vueHookID' => 'userType', 'errorMessageBox' => true])
				    @enddescribed_select

				    @described_select(['description' => 'Orientacja :', 'name' => 'sexual-orientation', 'options' => ['--wybierz--','heterosesualna', 'homoseksualna', 'biseksualna','autoseksualna', 'aseksualna','nie chcę podać'], 'verificationIcons' => true, 'vueHookID' => 'sexualOrientation', 'errorMessageBox' => true])
				    @enddescribed_select

				    @date_picker_polish(['description' => 'Data urodzenia', 'timespan' => 120, 'numberOfYearsBeforeCurrentYear' => 18, 'vueHookID' => 'birthDate' , 'verificationIcons' => true, 'errorMessageBox' => true])
				    @enddate_picker_polish

					<input type="submit" class="submit-button" value="Zarejestruj">
				</form>
			</section>
			<section class="information-sections">
				<div ref="login_information" class="welcome-user user-information">
				   Sex-imperium to nowy portal, którego celem jest dostarczanie wszelkich możliwości związanych z seksem i poznawaniem partnerów. Aktualnie oferujemy pornografię wraz z innowacyjnym systemem wyszukiwania, jednak pracujemy nad całkowicie bezpłatną funkcjonalnością(w przeciwieństwie do konkurencji) ułatwiającą znajdowanie partnerów, jak również 100% darmowym miejscem ogłoszeń dla osób trudniących się prostytucją. Bądź jednym z pierwszych, zarejestruj się i wspomóż budowę największego seks portalu w Polsce! Możesz też przeglądać zawartość nie będąc zalogowanym.
				   <strong>Korzystanie z portalu jest dozwolone tylko dla osób pełnoletnich.</strong>
			   </div>

			   <div ref="registration_information" class="registration-information user-information">
				<strong>Rejestracja i korzystanie z serwisu tylko dla osób pełnoletnich.</strong> Podczas przechodzenia na inne pole wprowadzone informacje zostaną automatycznie sprawdzone. Informacje muszą spełniać wymienione poniżej kryteria. <strong>Zmiana daty urodzenia nie będzie możliwa po zarejestrowaniu</strong>
				<dl class="input-list">
					<dt class="input-name">Login</dt>
					<dd class="input-description">Od 3 do 20 znaków. Login nie może być wykorzystany przez innego użytkownika.</dd>
					<dt class="input-name">Email</dt>
					<dd class="input-description">Należy podać poprawny adres email, ponadto nie może on być wykorzystany przez innego użytkownika. Na ten adres zostanie również wysłany link aktywacyjny.</dd>
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
		@footer
		@endfooter
	</div>
	
	<script src="{{asset('js/app.js')}}"></script>
</body>
</html>