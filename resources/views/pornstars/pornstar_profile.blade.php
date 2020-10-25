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
         <li class="pornstar-profile-tab" id="movies-tab" v-bind:class="{'active-tab' : pornstarMoviesTabIsActive}" v-on:click="changeTab" v-bind:aria-selected="pornstarMoviesTabIsActive" aria-controls="movies-tab">
            <span class="fas fa-video"></span>
            {{__('movies')}}
         </li>
         <li class="pornstar-profile-tab" id="comments-tab" v-bind:class="{'active-tab' : pornstarCommentsTabIsActive}" v-on:click="changeTab" v-bind:aria-selected="pornstarCommentsTabIsActive" aria-controls="comments-tab">
            <span class="fas fa-comments"></span>
            {{__('comments')}}
         </li>
         <li class="pornstar-profile-tab" id="rank-tab" v-bind:class="{'active-tab' : pornstarRankingTabIsActive}" v-on:click="changeTab" v-bind:aria-selected="pornstarRankingTabIsActive" aria-controls="ranking-tab">
            <span class="fas fa-level-up-alt"></span>
            {{__('ranking')}}
         </li>
      </ul>
     <section id="movies-tab" v-show="pornstarMoviesTabIsActive" class="action-section">
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
     <section id="rank-tab" v-show="pornstarRankingTabIsActive" class="action-section rank-section">
      <div class="current-rating">
         <span class="pornstar-votes-count">{{__('current_number_of_votes')}} : </span>
         <span class="pornstar-votes-count">{{$pornstar->votes_number}}</span>
         <star-rating></star-rating>
      </div>
     </section>
   </main>
</x-base>