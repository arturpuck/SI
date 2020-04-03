<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>Sex-Imperium - odzyskiwanie hasła</title>
	<meta name="description" content="Odzyskiwanie hasła dla użytkownika sex-imperium">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="{{asset('css/password_reset.css')}}">
	<link href="https://fonts.googleapis.com/css?family=Oxanium|Aldrich|Exo+2&display=swap" rel="stylesheet">
</head>
<body class="full-body">
	@main_page_navbar(['navigationItems' => [['Strona główna',''],['Porno','porno'],['Prostytucja','prostytucja'], ['Randki', 'randki']]])
	@endmain_page_navbar

    @error_list
    @enderror_list

    @includeWhen(Session::has('success'), 'components.success_information', ['message' => Session::get('success')])

	@yield('reset_form')

    @footer
	@endfooter
</body>
</html>