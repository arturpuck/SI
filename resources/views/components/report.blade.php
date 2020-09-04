@if(Session::has('success'))
<div class="success-information">
   <div class="confirmation-text">
      {{__(Session::get('success'))}}
   </div>
   <div class="icon-background">
      <x-icon-confirmation aditional-class-name="icon-confirmation-center"/>
   </div>   
</div>
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

