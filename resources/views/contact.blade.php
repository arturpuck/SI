<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>Kontakt z obsługą portalu Sex-imperium</title>
	<meta name="description" content="Skontaktuj się z obsługą portalu sex-imperium. Coś nie działa, chciałbyś zasugerować zmiany lub zapytać o coś innego? Pisz śmiało, informacje od użytkowników są bardzo cenne!">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="{{asset('css/contact.css')}}">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich|Oxanium&display=swap" rel="stylesheet">
</head>
<body class="full-body">
	@main_page_navbar(['navigationItems' => [['Strona główna',''],['Porno','porno'],['Prostytucja','prostytucja'], ['Randki', 'randki']]])
	@endmain_page_navbar

	@includeWhen(Session::has('success'), 'components.success_information', ['message' => Session::get('success')])

   @error_list
   @enderror_list

	<form method="POST" class="contact-form">
		@csrf
		<div class="form-description">Aby skontaktować się z obsługą prosimy o skorzystanie z poniższego formularza.</div>
		<div class="icon-wraper">
		   @include('components.icons.icon_error', ['showIconError' => $errors->has('email')])
		   @single_line_labeled_text_input(['description' => "Email :", "name" => "email", "type" => "email", 'placeholder' => 'niewymagany', 'initialValue' => old('email') ? old('email') : '', 'showConfirmation' => ($errors->any() and !$errors->has('email')), 'showError' => $errors->has('email')])
		   @endsingle_line_labeled_text_input
		</div>
		<div class="icon-wraper">
		  @include('components.icons.icon_error', ['showIconError' => $errors->has('subject')])
		  @single_line_labeled_text_input(['description' => "Temat :", "name" => "subject", "type" => "text", 'placeholder' => 'niewymagany : 0-40 znaków', 'initialValue' => old('subject') ? old('subject') : '', 'showConfirmation' => ($errors->any() and !$errors->has('subject')), 'showError' => $errors->has('subject')])
		  @endsingle_line_labeled_text_input
		</div>
		
		<label for="user-message" class="message-label">Treść wiadomości</label>
		<div class="icon-wraper">
			 @include('components.icons.icon_error', ['showIconError' => $errors->has('message')])
		<textarea min="3" max="1000" placeholder="wymagana : 3 - 1000 znaków" max="1000" required id="user-message" name="message" rows="10" class="user-message @error('message') input-with-error @enderror">{{old('message') ? old('message') : ''}}</textarea>
		</div>
		<input type="submit" class="submit-button" value="Wyślij">
	</form>

	@footer
	@endfooter
</body>
</html>