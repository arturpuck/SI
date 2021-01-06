<x-base title="{{__('pornstar_profile_page_title')}} {{$pornstar->nickname}}" description="{{__('pornstar_profile_description', ['nickname' => $pornstar->nickname])}}">
   <main class="pornstar-profile-container">
     <section class="pornstar-personal-data-container">
       <img src="/images/decoration/pornstars/profile-small/{{str_replace(' ','_',$pornstar->nickname)}}.jpg" alt="{{__('pornstar_profile_image_description', ['nickname' => $pornstar->nickname])}}" class="pornstar-profile-image">
       <article class="pornstar-personal-data">
          <h1 class="pornstar-nickname-header">{{$pornstar->nickname}}</h1>
          <div class="pornstar-scrollable-content">
            <dl class="pornstar-basic-data-list">
               <div class="pornstar-data-key-value-pair">
                  <dt class="pornstar-data-key pornstar-data-list-element">{{__('true_name')}} : </dt>
                  <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->true_name}}</dl>
               </div>
               <div class="pornstar-data-key-value-pair">
                  <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_born_at')}} : </dt>
                  <dl class="pornstar-data-value pornstar-data-list-element">
                     {{$pornstar->born}}
                     <span class="fas fa-birthday-cake pornstar-data-icon"></span>
                     <span class="pornstar-current-age">({{__('pornstar_current_age')}} : {{$pornstar->age}})</span>
                  </dl>
               </div>
               <div class="pornstar-data-key-value-pair">
                  <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_birth_place')}} : </dt>
                  <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->birth_place}}</dl>
               </div>
               <div class="pornstar-data-key-value-pair">
                  <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_nationality')}} : </dt>
                  <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->nationality->name}}</dl>
               </div>
               <div class="pornstar-data-key-value-pair">
                  <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_activity_period')}} : </dt>
                  <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->years_active}}</dl>
               </div>
               <div class="pornstar-data-key-value-pair">
                  <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_tits_type')}} : </dt>
                  <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->enhanced_tits ? __('artificial_titts') : __('natural_titts')}}</dl>
               </div>
               @if($pornstar->official_website)
               <div class="pornstar-data-key-value-pair">
                  <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_official_website')}} : </dt>
                  <dl class="pornstar-data-value pornstar-data-list-element">
                     <a class="neutral-link" href="http://www.{{$pornstar->official_website}}">{{$pornstar->official_website}}</a>
                     <span class="fas fa-house-user pornstar-data-icon"></span>
                  </dl>
               </div>
               @endif
            </dl>
            <p class="pornstar-description">
               {{$pornstar->description_beginning}}
            </p>
            <p class="pornstar-description">
               {{$pornstar->description_end}}
            </p>
          </div>
        </article>
     </section>
     <ul class="pornstar-profile-tabpanel" role="tabpanel">
         <li class="pornstar-profile-tab" id="movies-tab" v-bind:class="{'active-tab' : pornstarMoviesTabIsActive}" v-on:click="changeTab" v-bind:aria-selected="pornstarMoviesTabIsActive" aria-controls="movies-section">
            <span class="fas fa-video"></span>
            {{__('movies')}}
         </li>
         <li class="pornstar-profile-tab" id="comments-tab" v-bind:class="{'active-tab' : pornstarCommentsTabIsActive}" v-on:click="showComments({{$pornstar->id}})" v-bind:aria-selected="pornstarCommentsTabIsActive" aria-controls="comments-section">
            <span class="fas fa-comments"></span>
            {{__('comments')}}
         </li>
         <li class="pornstar-profile-tab" id="rank-tab" v-bind:class="{'active-tab' : pornstarRankingTabIsActive}" v-on:click="changeTab" v-bind:aria-selected="pornstarRankingTabIsActive" aria-controls="ranking-section">
            <span class="fas fa-level-up-alt"></span>
            {{__('ranking')}}
         </li>
      </ul>
     <section id="movies-section" v-show="pornstarMoviesTabIsActive" class="action-section">
       <fixed-shadow-container v-show="showsPreview">
          <movie-preview/>
       </fixed-shadow-container>
       <ul class="movies-container">
         @foreach($pornstar->movies as $movie)
            <movie-box
               duration="{{$movie->duration}}"
               title="{{$movie->title}}"
               v-bind:views="{{$movie->views}}"
         
               @if($movie->is_translated_to_polish)
                  v-bind:is-translated-to-polish="true"
               @endif
                  v-bind:id="{{$movie->id}}">
            </movie-box>
         @endforeach
       </ul>
     </section>
     <section id="ranking-section" v-show="pornstarRankingTabIsActive" class="action-section rank-section">
     @if($pornstar->has_any_votes)
         <div class="current-rating">
           <div class="pornstar-current-rating">
               <span class="pornstar-votes-data">{{__('current_number_of_votes')}} : </span>
               <span class="pornstar-votes-data">{{$pornstar->ammount_of_votes}}</span>
               <span class="fas fa-vote-yea voter-icon"></span>
            </div>
            <div class="rate-container">
                <div class="pornstar-votes-data">{{__('votes_average')}} : {{$pornstar->votes_average}}</div>
                <star-rating v-bind:initial-value="{{$pornstar->votes_average}}" v-bind:fixed-value="true"></star-rating>
            </div>  
         </div>
      @else
        <div class="no-data-info">
           {{__('this_pornstar_has_no_votes')}}
        </div>
      @endif
      @if(Auth::check())
      <div class="voting-all">
         <span class="fas fa-person-booth voting-person-icon"></span>
            <div class="pornstar-votes-data">{{__('your_rate')}}</div>
            <div class="user-vote-element">
               <star-rating 
                  v-bind:rated-element-id="{{$pornstar->id}}" 
                  v-on:selected="ratePornstar"
                     @if($pornstar->has_been_rated_by_current_user)
                        v-bind:initial-value="{{$pornstar->current_user_rate}}"
                     @endif 
                  v-bind:show-number="true">
               </star-rating>
            </div>
      </div>
      @else
         <div class="unauthenticated-users-info">
             {{__('you_have_to_be_loged_in_to_vote')}} <span class="fas fa-user-lock"></span>
         </div>
      @endif
     </section>
     <section id="comments-section" v-show="pornstarCommentsTabIsActive" class="action-section comments-section">
         <relative-shadow-container v-show="processingCommentsInProgress">
            <expect-circle v-bind:label="expectCircleLabel"></expect-circle>
         </relative-shadow-container>
         <accept-button  v-show="!showCommentPanel" v-on:click.native="showCommentForm">
            {{__('publish_comment')}}
            <span class="fas fa-comment comment-icon"></span>
         </accept-button>
         <div v-bind:class="{'opened-show-on-demand-container' : showCommentPanel}" class="hide-content-show-on-demand-container">
                 <comment-box 
                     v-on:send="saveComment"
                     @if(Auth::check())
                        v-bind:authenticated-user="true"
                        authenticated-user-nickname="{{Auth::user()->login}}"
                        @if(Auth::user()->has_avatar)
                           avatar-file-path="{{Auth::user()->avatar_file_path}}"
                        @endif
                     @endif>
                 </comment-box>
         </div>
         <div v-if="anyCommentsAvailable" v-text="ammountOfCommentsCaption" class="ammount-of-comments-info"></div>
         <ul class="comments-list">
            <comment-body v-for="comment in pornstarComments[currentCommentsPage]"
               v-bind:comment-body="comment.comment"
               v-bind:authenticated-user="comment.added_by_authenticated_user"
               v-bind:avatar-file-path="comment.avatar_file_path"
               v-bind:added-ago="comment.added_ago"
               v-bind:user-nickname="comment.user_nickname">
            </comment-body>
         </ul>
         <links-box v-bind:initial-current-page="1" v-if="linksBoxShouldBeDisplayed">
             <template v-slot:pages-list>
                <li v-for="pageNumber in pagesNumber" v-on:click="fetchPornstarComments(pageNumber)"  class="pagination-link-list-element">
                   <button v-bind:aria-label="getAriaLabelAttributeValueForSubPageButton(pageNumber)" v-text="pageNumber" v-bind:class="{'current-page-link' : checkCurrentPage(pageNumber)}" class="pagination-link"></button>
               </li>
             </template>
             <template v-slot:aditional-links>
                <li v-show="currentCommentsPageIsNotFirst" class="aditional-link-list-element">
                   <button v-on:click="fetchPornstarComments(currentCommentsPage - 1)" class="aditional-link-button">
                       <span class="fas fa-angle-left" aria-hidden="true"></span> 
                       {{__('previous_page')}}
                   </button>
               </li>
               <li v-show="currentCommentsPageIsNotFirst" class="aditional-link-list-element">
                   <button v-on:click="fetchPornstarComments(1)" class="aditional-link-button">
                       <span class="fas fa-fast-backward" aria-hidden="true"></span> 
                       {{__('first_page')}}
                   </button>
               </li>
               <li v-show="currentCommentsPageIsNotLast" class="aditional-link-list-element">
                   <button v-on:click="fetchPornstarComments(pagesNumber)" class="aditional-link-button"> 
                       {{__('last_page')}}
                       <span class="fas fas fa-fast-forward" aria-hidden="true"></span>
                   </button>
               </li>
               <li v-show="currentCommentsPageIsNotLast" class="aditional-link-list-element">
                   <button v-on:click="fetchPornstarComments(currentCommentsPage + 1)" class="aditional-link-button">
                       {{__('next_page')}}
                       <span class="fas fa-angle-right" aria-hidden="true"></span> 
                   </button>
               </li> 
             </template>
         </links-box>
         <div v-if="!anyCommentsAvailable" class="no-data-info">
               {{__('this_pornstar_has_no_comments')}}
         </div>
     </section>
   </main>
   <user-notification></user-notification>
</x-base>