<x-base title="{{__('pornstar_profile_page_title')}} {{$pornstar->nickname}}" description="{{__('pornstar_profile_description', ['nickname' => $pornstar->nickname])}}">
   <main id="pornstar-profile-container" data-pornstar-id="{{$pornstar->id}}" class="pornstar-profile-container">
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
                        <span class="pornstar-current-age">({{__('pornstar_current_age')}} : {{$pornstar->age}})</span>
                     </dl>
                  </div>
                  <div class="pornstar-data-key-value-pair">
                     <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_birth_place')}} : </dt>
                     <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->birth_place}}</dl>
                  </div>
                  <div class="pornstar-data-key-value-pair">
                     <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_nationality')}} : </dt>
                     <dl class="pornstar-data-value pornstar-data-list-element">{{__($pornstar->nationality->name.'_nationality')}}</dl>
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
            <camera-icon class="tab-icon"></camera-icon>
            {{__('movies')}}
         </li>
         <li class="pornstar-profile-tab" id="comments-tab" v-bind:class="{'active-tab' : pornstarCommentsTabIsActive}" v-on:click="showComments" v-bind:aria-selected="pornstarCommentsTabIsActive" aria-controls="comments-section">
            <comment-icon class="tab-icon"></comment-icon>
            {{__('comments')}}
         </li>
         <li class="pornstar-profile-tab" id="rank-tab" v-bind:class="{'active-tab' : pornstarRankingTabIsActive}" v-on:click="changeTab" v-bind:aria-selected="pornstarRankingTabIsActive" aria-controls="ranking-section">
            <podium-icon class="tab-icon"></podium-icon>
            {{__('ranking')}}
         </li>
      </ul>
      <section id="movies-section" v-show="pornstarMoviesTabIsActive" class="action-section">
         <movie-preview-complete></movie-preview-complete>
         <ul class="movies-container">
            @foreach($pornstar->movies as $movie)
            <movie-box duration="{{$movie->duration}}" title="{{$movie->title}}" v-bind:views="{{$movie->views}}" @if($movie->is_translated_to_polish)
               v-bind:is-translated-to-polish="true"
               @endif
               v-bind:id="{{$movie->id}}">
            </movie-box>
            @endforeach
         </ul>
      </section>
      <section id="ranking-section" v-show="pornstarRankingTabIsActive" class="action-section rank-section">
         @if($pornstar->has_any_votes)
         <div v-if="pornstarHasAnyVotes" class="current-rating">
            <div class="pornstar-current-rating">
               <span v-text="translations.currentNumberOfVotes" class="pornstar-votes-data"></span>
               <span v-text="numberOfVotes" class="pornstar-votes-data"></span>
            </div>
            <div class="rate-container">
               <div v-text="averageRatingLabel" class="pornstar-votes-data"></div>
               <star-rating v-bind:fixed-value="true"></star-rating>
            </div>
         </div>
         @else
         <div v-else class="no-data-info">
            {{__('this_pornstar_has_no_votes')}}
         </div>
         @endif
         @if(Auth::check())
         <div class="voting-all">
            <box-voting-icon class="voting-icon"></box-voting-icon>
            <div class="pornstar-votes-data">{{__('your_rate')}}</div>
            <div class="user-vote-element">
               <star-rating v-bind:rated-element-id="{{$pornstar->id}}" v-on:selected="ratePornstar" v-bind:show-number="true"></star-rating>
            </div>
         </div>
         @else
         <div class="unauthenticated-users-info">
            {{__('you_have_to_be_loged_in_to_vote')}}
            <stop-hand-icon class="authenticated-users-only-icon"></stop-hand-icon>
         </div>
         @endif
      </section>
      <section id="comments-section" v-show="pornstarCommentsTabIsActive" class="action-section comments-section">
         <relative-shadow-container v-show="processingCommentsInProgress">
            <expect-circle v-bind:label="expectCircleLabel"></expect-circle>
         </relative-shadow-container>
         <comment-list v-on:comment="saveComment" @auth v-bind:authenticated-user="true" authenticated-user-nickname="{{\Auth::user()->login}}" avatar-file-path="{{Auth::user()->avatar_file_path}}" @endauth></comment-list>
      </section>
   </main>
   <user-notification></user-notification>
</x-base>