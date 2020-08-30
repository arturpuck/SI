<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset="UTF-8">
	<title>{{__('reset_your_password')}}</title>
</head>
<body style="background:black; text-align:center; color:white;
            font-family: 'Arial Black', Gadget, sans-serif; font-size:18px;">
	<div style="padding:5px;">
		<div>
		{{__('we_have_registered_password_reset_request')}}
	</div>
    <div class="link">
    	<a style="color:#05f21d; font-size:20px;" href="{{$link}}">{{__('password_reseting')}}</a>
    </div>
	</div>
</body>
</html>
