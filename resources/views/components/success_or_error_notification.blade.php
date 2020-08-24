@if(Session::has('success'))
<div class="success-information">
       {{Session::get('success')}}
</div>
@elseif($errors->any())
	<div class="error-information-container information-container">
		Wykryto następujące problemy:
		<ul class="error-list">
            @foreach($errors->all() as $error)
               <li class="error-list-element">{{$error}}</li>
            @endforeach
         </ul>
    </div>
@endif

