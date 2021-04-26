<x-base title="{{$title}}" customBodyClass="standard-background" description="{{$description}}">
    <main class="movie-block">
        <div class="player-container">
            <video id="player" ref="player" data-movie-id="{{$movie->id}}" playsinline controls>
               <source src="/movies/{{$movie->id}}.mp4" type="video/mp4" />
            </video>
        </div>
        <section class="movie-desktop">
            <relative-shadow-container v-show="showMovieDesktopFetchingDecoration">
               <expect-circle label="{{__('fetching_movie_data')}}"></expect-circle>
            </relative-shadow-container>
          <h1 class="movie-desktop__header">
              <movie-roll-icon class="movie-desktop__icon--movie-roll"></movie-roll-icon>
              <span class="movie-desktop__title">
                {{$movie->title}}
              </span>
            </h1>
            <div class="movie-information__details">
                <span class="movie-information__detail">
                   <television-icon class="movie-information__icon--smaller"></television-icon>
                   <span v-text="viewsLabel" class="movie-information__detail-value"></span>
                </span>
                <span class="movie-information__detail">
                   <date-confirmed-icon class="movie-information__icon--smaller"></date-confirmed-icon>
                   <time v-bind:datetime="addedAtLabel" v-text="addedAtLabel" class="movie-information__detail-value"></time>
                </span>
                
                <span v-if="moviePornstars" class="movie-information__detail">
                   <star-full-icon class="movie-information__icon--star"></star-full-icon>
                   <span class="movie-information__detail-key">{{__('pornstars_movie_caption')}}</span>
                   <span class="separator"> : </span>
                   <a class="movie-information__pornstar-profile-link"></a>
                </span>
                
                <span class="movie-information__detail">
                   <chart-growth-icon class="movie-information__icon--smaller"></chart-growth-icon>
                   <span v-text="averageRatingLabel" class="movie-information__detail-value"></span>
                </span>
                <span class="movie-information__detail">
                   <spermatozoid-icon class="movie-information__icon--smaller"></spermatozoid-icon>
                   <span v-text="spermatozoidsLabel" class="movie-information__detail-value"></span>
                </span>
                <span class="movie-information__detail">
                   <like-icon class="movie-information__icon--smaller"></like-icon>
                   <span v-text="likesLabel" class="movie-information__detail-value"></span>
                </span>
                <a href="{{asset('/movies/'.$movie->id.'.mp4')}}" class="movie-information__download-link" download="{{$movie->title}}">
                   <download-icon class="movie-information__icon--download"></download-icon>
                   <span class="movie-information__detail-value">{{__('download')}}</span>
                </a>
            </div>
            <div class="movie-voting">
               @if(\Auth::check())
                 <p class="movie-voting__information-container">
                    <info-circle-icon class="movie-voting__info-circle-icon"></info-circle-icon>
                    <span class="movie-voting__information">{{__('movie_voting_information')}}</span>  
                 </p>
                 <star-rating label="{{__('your_rate')}}" v-bind:show-number="true"  v-on:selected="rateMovie">
                 </star-rating>
                 
                  <spermatozoid-icon v-on:click.native="addSpermatozoid" role="button" class="movie-voting__vote-icon--spermatozoid-icon"></spermatozoid-icon>
                  <like-background-icon v-on:click.native="addLike" role="button" class="movie-voting__vote-icon--like-background-icon"></like-background-icon>
               @else
                  <div class="movie-voting__registered-users-only-info">
                     <unknown-person-icon class="movie-voting__icon"></unknown-person-icon>
                     <div class="movie-voting__registered-users-only-text">
                           {{__('you_have_to_be_loged_in_to_vote_and_assign_likes_and_spermatozoids')}}
                     </div>
                  </div>
               @endif
            </div>
        </section>
        <section class="movie-lower-section">
           <ul role="tablist" class="tablist">
              <li role="tab" aria-controls="similar-movies-tabpanel" v-bind:aria-selected="similarMoviesTabIsSelected" v-bind:class="similarMoviesClassName">
                  <movie-roll-icon class="tablist__icon"></movie-roll-icon>
                   {{__('similar_movies')}} 
              </li>
              <li role="tab" aria-controls="movie-comments-tabpanel" v-bind:aria-selected="movieCommentsTabIsSelected" v-bind:class="movieCommentsClassName">
                   <comment-pen-icon class="tablist__icon"></comment-pen-icon>
                   {{__('comments')}}
              </li>
           </ul>
           <div aria-hidden="true" class="tablist__bar"></div>
           <div id="similar-movies-tabpanel" role="tabpanel" class="similar-movies-tabpanel">
              <relative-shadow-container v-show="showSimilarMoviesFetchingDecoration">
                  <expect-circle label="{{__('fetching_related_movies')}}"></expect-circle>
               </relative-shadow-container>
           </div>
           <div role="tabpanel" id="movie-comments-tabpanel" class="movie-comments-tabpanel">
           
           </div>
        </section>
    </main>
    <user-notification></user-notification>
</x-base>
