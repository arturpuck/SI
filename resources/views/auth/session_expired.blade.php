<x-base title="{{__('session_expired')}}" customBodyClass="session-expired"  description="{{__('session_expired_description', ['minutes' => config('session.lifetime')])}}" >
    <main>
        <p class="user-notification">
         {{ __('session_expired_description', ['minutes' => config('session.lifetime')]) }}
         <a href="{{URL::previous()}}" class="link">{{__('back_to_previous_page')}}</a>
         <a href="{{route('main.page')}}" class="link">{{__('back_to_main_page')}}</a>
        </p>
    </main>
</x-base>