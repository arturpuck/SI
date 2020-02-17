<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>Kontakt z obsługą portalu Sex-imperium</title>
	<meta name="description" content="Skontaktuj się z obsługą portalu sex-imperium. Coś nie działa, chciałbyś zasugerować zmiany lub zapytać o coś innego? Pisz śmiało, informacje od użytkowników są bardzo cenne!">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="{{asset('css/contact.css')}}">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich&display=swap" rel="stylesheet">
</head>
<body class="full-body">
	@main_page_navbar(['navigationItems' => [['Strona główna',''],['Porno','porno'],['Prostytucja','prostytucja'], ['Randki', 'randki']]])
	@endmain_page_navbar

	@if(Session::has('success'))
        <div class="success-information-container information-container">
        	{{Session::get('success')}}
        </div>
	@endif

	@if($errors->any())
	<div class="error-information-container information-container">
    <div class="stop-sign-main">
    	<div class="white-bar-main"></div>
    </div>
		Wykryto następujące problemy:
		<ul class="error-list">
            @foreach($errors->all() as $error)
               <li class="error-list-element">{{$error}}</li>
            @endforeach
         </ul>
    </div>
	@endif

	<form method="POST" class="contact-form">
		@csrf
		<div class="form-description">Aby skontaktować się z obsługą prosimy o skorzystanie z poniższego formularza. Pola email i temat nie są wymagane, treść wiadomości nie może przekroczyć 1000 znaków</div>
		@single_line_labeled_text_input(['description' => "Email :", "name" => "email", "type" => "email"])
		@endsingle_line_labeled_text_input
		@single_line_labeled_text_input(['description' => "Temat :", "name" => "subject", "type" => "text"])
		@endsingle_line_labeled_text_input
		<label for="user-message" class="message-label">Treść wiadomości</label>
		<textarea max="1000" required id="user-message" name="message" rows="10" class="user-message"></textarea>
		<input type="submit" class="submit-button" value="Wyślij">
	</form>

	@footer
	@endfooter
</body>
</html>