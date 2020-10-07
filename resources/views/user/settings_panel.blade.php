<x-base title="{{__('user_settings_title')}} : {{Auth::user()->login}}" specificImageClass="{{$specificImageClass}}" description="{{__('user_settings_description')}}">
    <main class="user-settings-panel">
       <nav class="user-setting-tabs">
           <ul role="tabpanel" class="user-settings-tab-list">
               <li role="tab" v-bind:aria-selected="basicUserDataTabIsActive" aria-controls="basic-data-panel" id="basicUserDataTab" v-on:click="showApropriateContent" v-bind:class="{'active-tab' : basicUserDataTabIsActive}" class="user-settings-tab first-tab">
                   <span class="fas fa-user-edit tab-icon"></span>
                   {{__('data')}}
                </li>
               <li role="tab" v-bind:aria-selected="avatarTabIsActive" aria-controls="avatar-panel" id="avatarTab" v-on:click="showApropriateContent" v-bind:class="{'active-tab' : avatarTabIsActive}" class="user-settings-tab">
                  <span class="fas fa-image tab-icon"></span>
                  {{__('avatar')}}
                </li>
                <li role="tab" v-bind:aria-selected="passwordTabIsActive" aria-controls="password-panel" id="passwordTab" v-on:click="showApropriateContent" v-bind:class="{'active-tab' : passwordTabIsActive}" class="user-settings-tab">
                  <span class="fas fa-key tab-icon"></span>
                  {{__('password')}}
                </li>
                <li role="tab" v-bind:aria-selected="otherTabIsActive" aria-controls="other-panel" id="otherTab" v-on:click="showApropriateContent" v-bind:class="{'active-tab' : otherTabIsActive}" class="user-settings-tab">
                  <span class="fas fa-cogs tab-icon"></span>
                  {{__('other')}}
                </li>
           </ul>
           <div class="arrows-container">
               <phantom-button v-on:click.native="previousTab" label="{{__('previous_tab')}}">
                  <span class="fas fa-arrow-left arrow-icon"></span>
               </phantom-button>
               <phantom-button v-on:click.native="nextTab" label="{{__('next_tab')}}">
                  <span class="fas fa-arrow-right arrow-icon"></span>
               </phantom-button>
           </div>
       </nav>
       <div class="settings-controls-container">
            <div v-show="verificationInProgress" class="shadow-container">
                <expect-circle v-bind:label="currentExpectDecorationLabel"></expect-circle>
            </div>
            <form id="basic-data-panel" v-show="basicUserDataTabIsActive" class="basic-user-data-settings user-settings">
                <div class="information-for-user">
                    <div>
                       <span class="fas fa-info-circle information-icon"></span>
                    </div>
                    {{__('password_is_required_for_any_changes')}}
                </div>
                <text-input-combo
                    initial-value="{{Auth::user()->login}}"
                    v-on:click.native="notifyUserAboutLockedInput"
                    name="login"
                    v-bind:is-disabled="true"
                    input-type="text">
                    {{ucfirst(__('login'))}} : 
                </text-input-combo>   
                <text-input-combo ref="email"
                    v-bind:input-is-required="true"
                    v-bind:complete-validation-display-available="true"
                    initial-value="{{Auth::user()->email}}"
                    name="email"
                    input-type="email"
                    v-bind:on-blur-callback="validateEmail"
                    v-bind:error-message-box-available="true">
                    {{ucfirst(__('email'))}} : 
                </text-input-combo>
                <described-select ref="user_type_id"
                    v-bind:visible-options-list="['--{{__('choose')}}--',@foreach($userTypes as $userType) '{{__($userType->user_type_name.'_i')}}', @endforeach '{{__('i_dont_want_to_tell')}}']"
                    v-bind:option-values="['not-selected', @foreach($userTypes as $userType) '{{$userType->id}}', @endforeach '']"
                    v-bind:error-message-box-available="true"
                    v-bind:complete-validation-display-available="true"
                    v-bind:on-change-callback="validateSelect"
                    initial-value="{{Auth::user()->user_type_id}}"
                    name="user_type_id">
                    {{ucfirst(__('i_am'))}} : 
                </described-select>
                <described-select ref="sexual_orientation_id"
                    v-bind:visible-options-list="['--{{__('choose')}}--',@foreach($sexualOrientations as $sexualOrientation) '{{__($sexualOrientation->sexual_orientation_name)}}', @endforeach '{{__('i_dont_want_to_tell')}}']"
                    v-bind:option-values="['not-selected', @foreach($sexualOrientations as $sexualOrientation) '{{$sexualOrientation->id}}', @endforeach '']"
                    v-bind:error-message-box-available="true"
                    v-bind:complete-validation-display-available="true"
                    initial-value="{{Auth::user()->sexual_orientation_id}}"
                    v-bind:on-change-callback="validateSelect"
                    name="sexual_orientation_id">
                    {{ucfirst(__('orientation'))}} : 
                </described-select>
                <date-picker
                    name="birth_date"
                    initial-value="{{Auth::user()->birth_date}}"
                    v-on:click.native="notifyUserAboutLockedInput"
                    v-bind:is-disabled="true">
                    {{ucfirst(__('birth_date'))}}
                </date-picker>
                <text-input-combo ref="password"
                    v-bind:input-is-required="true"
                    v-bind:complete-error-display-available="true"
                    name="password"
                    input-type="password"
                    v-bind:on-blur-callback="validatePassword"
                    v-bind:error-message-box-available="true">
                    {{ucfirst(__('password'))}} : 
                </text-input-combo>
                <accept-button v-on:click.native="tryToEditUserData">{{__('save_data')}}</accept-button>
            </form>
            <form id="avatar-panel" action="{{route('auth.user.upload.avatar')}}" method="POST" v-show="avatarTabIsActive" enctype="multipart/form-data" class="avatar-settings user-settings">
                @method('PUT')    
                @csrf
                <div class="icon-information-container">
                    <span class="fas fa-info-circle information-icon"></span>
                </div>
                <p class="information-for-user">
                    {{__('avatar_requirements_information')}}
                </p>
               
                <div class="information-for-user avatar-notification">
                    @if(Auth::user()->has_avatar)
                        {{__('current_avatar')}}
                    @else
                        {{__('no_avatar_has_been_choosen')}}
                    @endif
                </div>
                <div ref="avatar_frame" @if(Auth::user()->has_avatar) data-initial-image="{{Auth::user()->avatar_file_path}}" @endif  v-bind:style="{backgroundImage : avatarFileBackgroundImageAdress}" class="undefined-avatar-frame avatar">
                    <span v-bind:class="{'fas' : !avatarFile, 'fa-user' : !avatarFile}" class="undefined-avatar"></span>
                </div>
                @if(Auth::user()->has_avatar)
                <button v-on:click="deleteAvatar" v-show="showDeleteAvatarButton" class="delete-avatar-button" type="button">
                    {{__('delete_my_avatar')}}
                    <span class="fas fa-trash-alt trash-icon"></span>
                </button>
                @endif
                <label  class="choose-avatar-button">
                    {{__('choose_avatar')}}
                    <input type="file" v-on:change="processImageFromHardDrive" name="avatar_from_hard_drive" class="avatar-file">
                    <span class="fas fa-hdd disc-icon"></span>
                </label>
                <div v-text="avatarFileName" class="avatar-file-name"></div>
                <submit-button>{{__('accept_avatar')}}</submit-button>
            </form>
            <form id="password-panel" v-show="passwordTabIsActive" class="user-settings">
                <div class="icon-information-container">
                   <span class="fas fa-info-circle information-icon"></span>
                </div>
                <p class="information-for-user">
                    {{__('edit_password_notification')}}
               </p>
               <text-input-combo ref="current_password"
                 v-bind:complete-error-display-available="true"
                 name="password"
                 v-bind:error-message-box-available="true"
                 input-type="password"
                 v-bind:on-blur-callback="validatePassword">
                 {{ucfirst(__('current_password'))}} : 
                </text-input-combo>
                <text-input-combo ref="new_password"
                 v-bind:complete-error-display-available="true"
                 name="new_password"
                 v-bind:error-message-box-available="true"
                 input-type="password"
                 v-bind:on-blur-callback="validatePassword">
                 {{ucfirst(__('new_password'))}} : 
                </text-input-combo>
                <text-input-combo ref="new_password_confirmation"
                 v-bind:complete-error-display-available="true"
                 name="new_password_confirmation"
                 input-type="password"
                 v-bind:error-message-box-available="true"
                 v-bind:on-blur-callback="validatePassword">
                 {{__('new_password_confirmation')}} : 
                </text-input-combo>
                <accept-button v-on:click.native="tryToChangeUserPassword">{{__('change_password')}}</accept-button>
            </form>
            <form id="other-panel" v-show="otherTabIsActive" class="user-settings other-settings">
               <div class="icon-information-container">
                   <span class="fas fa-info-circle information-icon"></span>
               </div>
               <p class="information-for-user">
                    {{__('other_settings_information')}}
               </p>
               <labeled-checkbox ref="show_my_age_setting"
                name="shows_birthday"
                class="settings-panel-checkbox"
                v-bind:checked-at-start="{{Auth::user()->shows_birthday}}">
                  {{__('show_my_age_to_other_users')}}
                </labeled-checkbox>
                <text-input-combo ref="current_password_other_settings"
                 v-bind:complete-error-display-available="true"
                 name="password"
                 v-bind:error-message-box-available="true"
                 input-type="password"
                 v-bind:on-blur-callback="validatePassword">
                 {{__('password')}} : 
                </text-input-combo>
                <accept-button v-on:click.native="tryToChangeOtherSettings">{{__('save_data')}}</accept-button>
            </form>
       </div>
    </main>
    <user-notification></user-notification>
</x-base>