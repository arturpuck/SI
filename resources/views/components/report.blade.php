@if(Session::has('success'))
<success-information>
  {{__(Session::get('success'))}}
</success-information>
@elseif($errors->any())
<div class="error-information-container">
		<div class="error-header"><x-icon-error-cross/>{{__('the_following_errors_occured')}}<x-icon-error-cross/></div> 
		<ul class="error-list">
            @foreach($errors->all() as $error)
               <li class="error-list-element">{{__($error)}}</li>
            @endforeach
         </ul>
    </div>
@endif

