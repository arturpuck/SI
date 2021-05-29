@if($errors->any())
	<div class="error-information-container information-container">
		Wykryto następujące problemy:
		<ul class="error-list">
            @foreach($errors->all() as $error)
               <li class="error-list-element">{{__($error)}}</li>
            @endforeach
         </ul>
    </div>
	@endif