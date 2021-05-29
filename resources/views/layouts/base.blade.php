<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>@yield('title')</title>
	<meta name="description" content="@yield('description')">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
	<link rel="stylesheet" href="@yield('file-with-styles')">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich|Oxanium|Play&display=swap" rel="stylesheet">
	@yield('fonts')
	<script src="https://kit.fontawesome.com/df4e1e2dba.js" crossorigin="anonymous"></script>
</head>
<body  class="full-body @isset($specificImageClass){{$specificImageClass}}@endisset">
<div class="app-container" id="app">
     <navbar
       @auth
         user-id="{{Auth::user()->id}}"
       @endauth

       @guest
		 register-route="{{route('auth.register.form')}}"
		 forgot-password-route="{{route('auth.password.reset.form')}}"
       @endguest
     >
     </navbar>
	@yield('content')
	</div>
    <x-footer/>
	@yield('scripts')
</body>
</html>