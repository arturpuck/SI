<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>Sex-Imperium - potwierdzenie zresetowania hasła</title>
	<meta name="description" content="Potwierdzenie zresetowania hasła">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="{{asset('css/password_reset_confirmation.css')}}">
	<link href="https://fonts.googleapis.com/css?family=Oxanium|Aldrich|Exo+2&display=swap" rel="stylesheet">
</head>
<body class="full-body">
	@main_page_navbar(['navigationItems' => [['Strona główna',''],['Porno','porno'],['Prostytucja','prostytucja'], ['Randki', 'randki']]])
	@endmain_page_navbar
    
    <div class="user-notification">
      
       <div class="notification-line">Poprawnie zresetowano hasło dla użytkownika korzystającego z następującego adresu email : <span class="user-email">{{Session::get('email')}}</span>
       </div>
       @include('components.icons.icon_confirmation', ['showIconConfirmation' => true ])
      <div class="notification-line">
      	@if(Auth::check())
            Jesteś zalogowany. <a href="/" class="leave-confirmation-link">Przejście do strony głównej</a>
    	  @else
            Możesz się <a href="/logowanie" class="leave-confirmation-link">zalogować</a> lub przejść do <a href="/" class="leave-confirmation-link">strony głównej</a>
    	  @endif
      </div>
    </div>

    @footer
	@endfooter
</body>
</html>