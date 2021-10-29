<!DOCTYPE html>
<html lang="{{App::getLocale()}}">
<head>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-M2LQVFK');</script>
<!-- End Google Tag Manager -->
	<meta charset="UTF-8">
	<title>{{$title}}</title>
	<meta name="description" content="{{$description}}">
	<meta name="author" content="Neuro-Boost">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta id="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
	<meta name="rating" content="adult" />
	<link rel="stylesheet" href="{{$cssFilePath}}">
	<link rel="preload" href="{{$jsFilePath}}" as="script">
	<link href="https://fonts.googleapis.com/css?family=Exo+2|Aldrich|Oxanium|Teko|Play&display=swap" rel="preload stylesheet" as="style">
	<link rel="apple-touch-icon" sizes="180x180" href="/images/decoration/icons/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/images/decoration/icons/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/images/decoration/icons/favicon/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	@isset($metadata) {{$metadata}} @endisset
</head>

<body class="full-body @isset($customBodyClass){{$customBodyClass}}@endisset">
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2LQVFK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	<div class="aplication-container" id="app">
		<navbar @auth v-bind:user-id="{{Auth::user()->id}}" user-name="{{Auth::user()->login}}" @if(Auth::user()->has_avatar)
			initial-avatar-file-name="{{Auth::user()->avatar_file_name}}"
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