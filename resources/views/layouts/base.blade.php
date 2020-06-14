<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>@yield('title')</title>
	<meta name="description" content="@yield('description')">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="@yield('file-with-styles')">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich|Oxanium&display=swap" rel="stylesheet">
	@yield('fonts')
	<script src="https://kit.fontawesome.com/df4e1e2dba.js" crossorigin="anonymous"></script>
</head>
<body  class="full-body">
<div id="app">
     <navbar
       @auth
         v-bind:authenticated-user="true"
         user-id="{{Auth::user()->id}}"
       @endauth

       @guest
         v-bind:authenticated-user="false"
         register-route="{{route('auth.register.form')}}"
         login-route="{{route('auth.login.form')}}"
       @endguest
     >
     </navbar>
	@yield('content')

	
	@footer
	@endfooter
	</div>
	<script src="@yield('scripts')"></script>
</body>
</html>