<x-base title="{{__('user_settings_title')}} : {{Auth::user()->login}}" specificImageClass="{{$specificImageClass}}" description="{{__('user_settings_description')}}">
    <main class="user-settings-panel">
       <nav class="user-setting-tabs">
           <ul role="tabpanel" class="user-settings-tab-list">
               <li role="tab" id="basicUserDataTab" v-on:click="showApropriateContent" v-bind:class="{'active-tab' : basicUserDataTabIsActive}" class="user-settings-tab first-tab">
                   <span class="fas fa-user-edit tab-icon"></span>
                   {{__('data')}}
                </li>
               <li role="tab" id="avatarTab" v-on:click="showApropriateContent" v-bind:class="{'active-tab' : avatarTabIsActive}" class="user-settings-tab">
                  <span class="fas fa-image tab-icon"></span>
                  {{__('avatar')}}
                </li>
           </ul>
           <div class="arrows-container">
              <span role="button" class="fas fa-arrow-left arrow-icon"></span>
              <span role="button" class="fas fa-arrow-right arrow-icon"></span>
           </div>
       </nav>
       <div class="settings-controls-container">
            <div v-show="verificationInProgress" class="shadow-container">
                <expect-circle
                  label="{{__('data_is_beeing_saved')}}">
                </expect-circle>
            </div>
            <form v-show="basicUserDataTabIsActive" class="basic-user-data-settings user-settings">
                <text-input-combo
                    initial-value="{{Auth::user()->login}}"
                    v-on:click.native="showNotification"
                    name="login"
                    v-bind:is-disabled="true"
                    input-type="text">
                    {{ucfirst(__('login'))}} : 
                </text-input-combo>   
                <text-input-combo ref="Email"
                    v-bind:input-is-required="true"
                    v-bind:complete-validation-display-available="true"
                    initial-value="{{Auth::user()->email}}"
                    name="email"
                    input-type="email"
                    v-bind:on-blur-callback="validateEmail"
                    v-bind:error-message-box-available="true">
                    {{ucfirst(__('email'))}} : 
                </text-input-combo>
                <described-select ref="UserType"
                    v-bind:visible-options-list="['--{{__('choose')}}--',@foreach($userTypes as $userType) '{{__($userType->user_type_name.'_i')}}', @endforeach '{{__('i_dont_want_to_tell')}}']"
                    v-bind:option-values="['not-selected', @foreach($userTypes as $userType) '{{$userType->id}}', @endforeach '']"
                    v-bind:error-message-box-available="true"
                    v-bind:complete-validation-display-available="true"
                    v-bind:on-change-callback="validateSelect"
                    initial-value="{{Auth::user()->user_type_id}}"
                    name="user_type_id">
                    {{ucfirst(__('i_am'))}} : 
                </described-select>
                <described-select ref="SexualOrientation"
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
                    v-on:click.native="showNotification"
                    v-bind:is-disabled="true">
                    {{ucfirst(__('birth_date'))}}
                </date-picker>
                <accept-button v-on:click.native="attemptUserDataEdition">{{__('save_data')}}</accept-button>
            </form>
            <form v-show="avatarTabIsActive" class="avatar-settings user-settings">

            </form>
       </div>
    </main>
    <user-notification></user-notification>
</x-base>