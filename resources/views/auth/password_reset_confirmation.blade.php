<x-base title="{{__('password_reset_confirmation')}}" description="{{__('password_reset_confirmation')}}">
    <div class="user-notification-container">
		<div class="icon-background">
		   <x-icon-confirmation aditional-class-name="icon-confirmation-center"/>
		</div>
		<div class="user-message">
            {{__('password_has_been_successfully_changed')}}
		</div>
		<address class="user-email-address">{{$email}}</address>
	</div>
</x-base>