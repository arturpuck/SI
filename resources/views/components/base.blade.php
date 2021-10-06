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
	<link rel="apple-touch-icon" sizes="57x57" href="/images/decoration/icons/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/images/decoration/icons/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/images/decoration/icons/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/images/decoration/icons/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/images/decoration/icons/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/images/decoration/icons/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/images/decoration/icons/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/images/decoration/icons/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/images/decoration/icons/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="/images/decoration/icons/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/images/decoration/icons/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/images/decoration/icons/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/images/decoration/icons/favicon/favicon-16x16.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich|Oxanium|Teko|Play&display=swap" rel="stylesheet">
	@isset($fonts) {{fonts}} @endisset
</head>

<body class="full-body @isset($customBodyClass){{$customBodyClass}}@endisset">
	<div class="aplication-container" id="app">
		<navbar @auth v-bind:user-id="{{Auth::user()->id}}" user-name="{{Auth::user()->login}}" @if(Auth::user()->has_avatar)
			avatar-file-name="{{Auth::user()->avatar_file_name}}"
			@endif
			@endauth
			>
		</navbar>
		<x-report />
		{{$slot}}
		<cookie-notification v-show="showCookiePolicyNotification"></cookie-notification>
	</div>
	<x-footer />
	<script src="{{$jsFilePath}}"></script>
</body>

</html>