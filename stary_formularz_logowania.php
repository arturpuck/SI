<form action="/login" method="POST" id="login-form" class="main-panel-form">
					@csrf
					<div class="login-information">Logowanie nie jest konieczne do korzystania z serwisu</div>
					<label for="login" class="main-panel-label">Email lub nick</label>
					<input type="text" class="main-panel-input" id="login" name="login">
					<label for="password" class="main-panel-label">Hasło</label>
					<input type="password" class="main-panel-input" id="password" name="login">
					@submit_button(['caption' => 'Zaloguj'])
					@endsubmit_button
					@nicecheckbox
                        @slot('name')
                           remember_me
                        @endslot

                        @slot('id')
                           remember-me
                        @endslot

                        @slot('description')
                           Zapamiętaj mnie
                        @endslot
					@endnicecheckbox
					<a href="/password/reset" class="forgot-password-link">Zapomniałem hasła</a>
				</form>


                