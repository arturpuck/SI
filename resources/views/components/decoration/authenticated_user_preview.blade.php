<div class="authenticated-user-preview">
    @if(Auth::user()->has_avatar)
      <img src="{{Auth::user()->avatar_file_path}}" alt="{{__('avatar_belongs_to_user_with_nickname')}} : {{Auth::user()->login}}"  class="authenticated-user-avatar">
    @else
      <span class="fas fa-user authenticated-user-undefined-avatar"></span>
    @endif
    <span class="authenticated-user-nickname">{{Auth::user()->login}}</span>
</div>