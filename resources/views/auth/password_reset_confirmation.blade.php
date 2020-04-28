<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>Sex-Imperium - potwierdzenie zresetowania hasła</title>
	<meta name="description" content="Potwierdzenie zresetowania hasła">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="{{asset('css/password_reset.css')}}">
	<link href="https://fonts.googleapis.com/css?family=Oxanium|Aldrich|Exo+2&display=swap" rel="stylesheet">
</head>
<body class="full-body">
	@main_page_navbar(['navigationItems' => [['Strona główna',''],['Porno','porno'],['Prostytucja','prostytucja'], ['Randki', 'randki']]])
	@endmain_page_navbar
    
    <div class="user-notification">
       <div>Poprawnie zresetowano hasło dla użytkownika korzystającego z następującego adresu email : {{$email}}
       </div>
      <div>
      	@if(Auth::check())
            Jesteś zalogowany. Przejście do strony głównej
    	@else
            Możesz się zalogować lub przejść do strony głównej
    	@endif
      </div>
    </div>

    @footer
	@endfooter
</body>
</html>