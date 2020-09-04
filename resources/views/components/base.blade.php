<!DOCTYPE html>
<html lang="{{App::getLocale()}}">
<head>
	<meta charset="UTF-8">
	<title>{{$title}}</title>
	<meta name="description" content="{{$description}}">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
	<link rel="stylesheet" href="{{$cssFilePath}}">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich|Oxanium|Play&display=swap" rel="stylesheet">
	@isset($fonts) {{fonts}} @endisset
	<script src="https://kit.fontawesome.com/df4e1e2dba.js" crossorigin="anonymous"></script>
</head>
<body  class="full-body @isset($specificImageClass){{$specificImageClass}}@endisset">
	<x-report/>
    <div class="app-container" id="app">
     <navbar
       @auth
         v-bind:user-id="{{Auth::user()->id}}"
		 user-name="{{Auth::user()->login}}"
		 logout-route="{{route('auth.logout')}}"
       @endauth

       @guest
		 register-route="{{route('auth.register.form')}}"
		 forgot-password-route="{{route('auth.request.password.reset.link.form')}}"
		 login-route="{{route('auth.login')}}"
       @endguest
     >
     </navbar>
	{{$slot}}
	</div>
    <x-footer/>
	<script src="{{$jsFilePath}}"></script>
</body>
</html>