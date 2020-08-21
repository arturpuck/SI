@extends('layouts.base')

@section('title')
  Rejestracja w Sex-Imperium
@endsection

@section('file-with-styles')
 {{asset('css/auth/register.css')}}
@endsection

@section('description')
   Rejestracja w Sex-Imperium
@endsection
	
@section('content')
		 @error_list
         @enderror_list
		<main id="main-panel" class="main-panel @if($errors->any())main-panel-without-top-margin @endif">
			<section class="register-panel">
				<form ref="register_panel" method="POST" action="/register" class="main-panel-form register-form">
					@csrf
					<text-input-combo
					 v-bind:on-blur-callback="validateLogin"
					 v-bind:complete-validation-display-available="true"
					 name="login"
					 v-bind:error-message-box-available="true">
						Login : 
					</text-input-combo>
					<text-input-combo
					 v-bind:on-blur-callback="validateEmail"
					 v-bind:complete-validation-display-available="true"
					 name="email"
					 v-bind:error-message-box-available="true">
						Email : 
					</text-input-combo>
					<text-input-combo
					 v-bind:on-blur-callback="validatePassword"
					 v-bind:complete-validation-display-available="true"
					 input-type="password"
					 name="password"
					 v-bind:error-message-box-available="true">
						Hasło : 
					</text-input-combo>
					<described-select
					  v-bind:visible-options-list="['--wybierz--','mężczyzną', 'kobietą', 'hermafrodytą', 'transseksualistą', 'parą', 'nie chcę podać']"
					  v-bind:option-values="['not-selected','male', 'female', 'hermaphrodite', 'transsexual', 'couple', '']"
					  v-bind:on-change-callback="validateSelect"
					  v-bind:error-message-box-available="true"
					  v-bind:complete-validation-display-available="true"
					  name="user_type"
					  >
						Jestem : 
					</described-select>
					<described-select
					  v-bind:visible-options-list="['--wybierz--','heteroseksualna', 'homoseksualna', 'biseksualna', 'aseksualna', 'autoseksualna', 'nie chcę podać']"
					  v-bind:option-values="['not-selected','heterosexual', 'homosexual', 'bisexual', 'asexual', 'autosexual', '']"
					  v-bind:on-change-callback="validateSelect"
					  v-bind:error-message-box-available="true"
					  v-bind:complete-validation-display-available="true"
					  name="sexual_orientation"
					  >
						Orientacja : 
					</described-select>
					<date-picker
					   v-bind:error-message-box-available="true"
					   name="birth_date"
					   v-bind:on-date-select-callback="checkIfUserIsAdault"
					   v-bind:complete-validation-display-available="true"
					>
					    Data urodzenia
					</date-picker>
				    
                    <submit-button>Zarejestruj</submit-button>
				</form>
			</section>
			<section class="information-section">
				<div v-show="verificationInProgress" class="shadow-container">
			   		<!--*<expect-bar label="Trwa weryfikacja" v-bind:hidden="false"></expect-bar>-->
				</div>
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
	@endsection

@section('scripts')
<script src="{{asset('js/register.js')}}"></script> 
@endsection
	