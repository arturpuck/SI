<x-base title="{{$title}}" description="{{$description}}">
   <main>
    <h1 class="prostitute-nickname">{{$announcement->nickname}}</h1>
    <section data-short-phone-number="{{$shortPhoneNumber}}...{{__('show_number')}}" data-announcement-uid="{{$announcement->uniqueID}}" class="announcement-information">
      <images-gallery class="images-gallery" alt="{{$announcement->nickname}}" v-bind:urls="{{$urls}}"></images-gallery>
      <div class="table-container">
      <table class="announcement-details">
        @isset($announcement->phone_number)
        <tr class="phone-number-row">
          <th class="details-header phone-header details-cell">
            <phone-icon class="phone-icon"></phone-icon>
            <span>
              {{__('phone_number')}} :
            </span>
          </th>
          <td class="details-value details-cell">
            <phantom-button v-on:click="fetchPhoneNumber" v-if="!completePhoneNumberIsDisplayed" v-text="phoneNumber" class="phone-button"></phantom-button>
            <a v-bind:href="phoneNumberHrefAttribute" v-if="completePhoneNumberIsDisplayed" v-text="phoneNumber" class="phone-number"></a>
          </td>
        </tr>
        @endisset
        <tr>
          <th class="details-header details-cell">
            {{ucfirst(__('city'))}}
          </th>
          <td class="details-value details-cell">
            {{$announcement->city->name}}
          </td>
        </tr>
        <tr>
          <th class="details-header details-cell">
            {{ucfirst(__('voivodeship'))}}
          </th>
          <td class="details-value details-cell">
            {{$announcement->region->name}}
          </td>
        </tr>
        <tr>
          <th class="details-header details-cell">
            {{ucfirst(__('age'))}}
          </th>
          <td class="details-value details-cell">
            {{$announcement->getAge()}}
          </td>
        </tr>
        @isset($announcement->userType)
        <tr>
          <th class="details-header details-cell">
              {{ucfirst(__('user_type'))}}
          </th>
          <td class="details-value details-cell">
            {{__($announcement->userType->user_type_name)}}
          </td>
        </tr>
        @endisset
        @isset($announcement->sexualOrientation->sexual_orientation_name)
        <tr>
          <th class="details-header details-cell">
              {{(__('sexual_orientation'))}}
          </th>
          <td class="details-value details-cell">
            {{__($announcement->sexualOrientation->sexual_orientation_name)}}
          </td>
        </tr>
        @endisset
        @if($announcement->tits_size > 0)
        <tr>
          <th class="details-header details-cell">
              {{(ucfirst(__('tits_size')))}}
          </th>
          <td class="details-value details-cell">
            {{__($announcement->tits_size)}}
          </td>
        </tr>
        @endif
        @if($announcement->height_in_centimeters > 0)
        <tr>
          <th class="details-header details-cell">
              {{(ucfirst(__('human_height')))}}
          </th>
          <td class="details-value details-cell">
            {{$announcement->height_in_centimeters}} cm
          </td>
        </tr>
        @endif
        @if($announcement->weight_in_kilograms > 0)
        <tr>
          <th class="details-header details-cell">
              {{(ucfirst(__('weight')))}}
          </th>
          <td class="details-value details-cell">
            {{$announcement->weight_in_kilograms}} kg
          </td>
        </tr>
        @endif
        @isset($announcement->hair_color)
        <tr>
          <th class="details-header details-cell">
              {{(ucfirst(__('hair_color')))}}
          </th>
          <td class="details-value details-cell">
          {{(__($announcement->hair_color.'_hair_color'))}}
          </td>
        </tr>
        @endif
      </table>
      </div>
      <div class="table-container">
      <header class="section-header">
        <bed-heart-icon class="services-icon"></bed-heart-icon>
        {{ucfirst(__('main_services'))}}
      </header>
        <table class="announcement-details">
          @foreach($mainServices as $name => $value)
          <tr>
            <th class="details-header details-cell">
              {{(ucfirst(__($name)))}}
            </th>
            <td class="details-value details-cell">
              {{(__($value))}}
            </td>
          </tr>
          @endforeach
        </table>
        @isset($secondaryServices)
        <div class="services-separator">{{ucfirst(__('remaining_services'))}}</div>
        <ul class="remaining-services-list">
          @foreach($secondaryServices as $service)
            <li class="secondary-service">{{__($service)}}</li>
          @endforeach
        </ul>
        @endisset
      </div>
      <div class="table-container">
        <header class="section-header">
          <money-bag-icon class="money-section-icon"></money-bag-icon>
          {{ucfirst(__('price_list'))}} {{__('and')}} {{__('working_hours')}}
        </header>
        <table class="announcement-details">
          @foreach($paymentForms as $key => $paymentForm)
          <tr>
            <th class="details-header details-cell">
              {{ucfirst(__($paymentForm['unit']))}} :
            </th>
            <td class="details-value details-cell">
            {{$paymentForm['price']}} PLN
            </td>
          </tr>
          @endforeach
        </table>
        <table class="announcement-details table-separator">
          @isset($workingHours)
            @foreach($weekdays as $index => $weekDay)
            @isset($workingHours[$weekDay])
            <tr>
              <th class="details-header details-cell">
               {{__($weekDay)}}
              </th>
              <td class="details-value details-cell">
                {{__('since')}} : {{$workingHours[$weekDay]['since']}} - {{__('until')}} : {{$workingHours[$weekDay]['until']}}
              </td>
            </tr>
            @endisset
            @endforeach
          @else
           <div class="no-working-hours-info">
            {{__('the_user_has_not_provided_working_hours')}}
           </div> 
          @endisset
        </table>
      </div>
    </section>
    <section class="announcement-secondary-information">
    <info-circle-icon class="info-icon"></info-circle-icon>
      @isset($announcement->description)
      <div class="announcement-description">
         {{$announcement->description}}
      </div>
      @endisset
      <ul role="tablist" class="comments-tablist">
        <li role="tab" v-on:click="showCommentForm" v-bind:class="{'seleced-tab' : !showCommentsList}" v-bind:aria-selected="!showCommentsList" aria-controls="adding-comment-section" class="comments-tab">
          <add-plus-icon class="comment-tab-icon"></add-plus-icon>
          {{__('adding_comment_caption')}}
        </li>
        <li role="tab" v-on:click="getComments" v-bind:class="{'seleced-tab' : showCommentsList}" v-bind:aria-selected="showCommentsList" aria-controls="comments-list" class="comments-tab">
          <comment-icon class="comment-tab-icon"></comment-icon>
          {{__('comment_list')}}
        </li>
      </ul>
      <div class="comments-section-container">
        <expect-shadow-circle circle-label="{{__('processing_comments')}}" v-show="commentsProcessingInProgress"></expect-shadow-circle>
        <div v-bind:class="{'hidden-section' : showCommentsList}" class="adding-comment-section" id="adding-comment-section">
          @auth
          <div class="adding-comments-limitations">
            {{__('adding_prostitute_comments_limitation')}}
          </div>
            <simple-add-text v-on:add-text="tryToSaveComment" class="comment-box-section"></simple-add-text>
          @else
            <div class="only-authenticated-users-info">
              <div>
                <padlock-icon class="comments-for-authenticated-only-icon"></padlock-icon>
              </div>
              {{__('you_have_to_be_authenticated_to_add_comment')}}
            </div>
          @endauth
        </div>
        <div class="comments-list-container" v-bind:class="{'hidden-section' : !showCommentsList}" id="comments-list-section">
          <simple-comments-list class="comments-list" v-bind:comments="comments"></simple-comments-list>
        </div>
      </div>
    </section>
   </main>
</x-base>