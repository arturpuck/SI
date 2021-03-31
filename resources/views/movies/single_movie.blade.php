<x-base title="{{$title}}" customBodyClass="standard-background" description="{{$description}}">
    <main class="movie-block">
        <div class="player-container">
            <video id="player" playsinline controls>
               <source src="/movies/{{$movie->id}}.mp4" type="video/mp4" />
            </video>
        </div>
        <section class="movie-desktop">
          <h1 class="movie-desktop__header">
              <movie-roll-icon class="movie-desktop__icon--movie-roll"></movie-roll-icon>
              <span class="movie-desktop__title">
                {{$movie->title}}
              </span>
            </h1>
            <div class="movie-information__details">
                <span class="movie-information__detail">
                   <television-icon class="movie-information__icon--smaller"></television-icon>
                   <span class="movie-information__detail-key">{{__('movie_views')}}</span>
                   <span class="separator"> : </span>
                   <span class="movie-information__detail-value">{{$movie->views}}</span>
                </span>
                <span class="movie-information__detail">
                   <date-confirmed-icon class="movie-information__icon--smaller"></date-confirmed-icon>
                   <span class="movie-information__detail-key">{{__('movie_added_at')}}</span>
                   <span class="separator"> : </span>
                   <time datetime="{{$movie->created_at}}" class="movie-information__detail-value">{{$movie->created_at}}</time>
                </span>
                @if($movie->pornstars->isNotEmpty())
                <span class="movie-information__detail">
                   <star-full-icon class="movie-information__icon--star"></star-full-icon>
                   <span class="movie-information__detail-key">{{__('pornstars_movie_caption')}}</span>
                   <span class="separator"> : </span>
                   @foreach($movie->pornstars as $pornstar)
                      <a href="{{route('pornstars.profile', ['nickname' => $pornstar->slugify('nickname')])}}" class="movie-information__pornstar-profile-link">{{$pornstar->nickname}}</a>
                   @endforeach
                </span>
                @endif
                <span class="movie-information__detail" @if(!$movie->hasRatingByAverage()) title="{{__('when_movie_rating_occurs_explanation')}}" @endif>
                   <chart-growth-icon class="movie-information__icon--smaller"></chart-growth-icon>
                   <span class="movie-information__detail-key">{{__('average_rating')}}</span>
                   <span class="separator"> : </span>
                   <span class="movie-information__detail-value">{{$movie->showRatingByAverage()}}</span>
                </span>
                <span class="movie-information__detail">
                   <spermatozoid-icon class="movie-information__icon--smaller"></spermatozoid-icon>
                   <span class="movie-information__detail-key">{{__('ammount_of_spermatozoids')}}</span>
                   <span class="separator"> : </span>
                   <span class="movie-information__detail-value">{{$movie->ammountOfSpermatozoids()}}</span>
                </span>
                <span class="movie-information__detail">
                   <like-icon class="movie-information__icon--smaller"></like-icon>
                   <span class="movie-information__detail-key">{{__('ammount_of_likes')}}</span>
                   <span class="separator"> : </span>
                   <span class="movie-information__detail-value">{{$movie->ammountOfLikes()}}</span>
                </span>
                <a href="{{asset('/movies/'.$movie->id.'.mp4')}}" class="movie-information__download-link" download="{{$movie->title}}">
                   <download-icon class="movie-information__icon--download"></download-icon>
                   <span class="movie-information__detail-value">{{__('download')}}</span>
                </a>
            </div>
            <div class="movie-voting">
               @if(\Auth::check())
                 <star-rating label="{{__('your_rate')}}" v-bind:show-number="true"
                    @if($movie->hasBeenRatedByCurrentUser())
                       v-bind:initial-value="{{$movie->currentUserRate()}}"
                    @endif
                    v-on:selected="rateMovie"
                    v-bind:rated-element-id="{{$movie->id}}"
                 >
                 </star-rating>
               @else
                  <div class="movie-voting__registered-users-only-info">
                     <unknown-person-icon class="movie-voting__icon"></unknown-person-icon>
                     <div class="movie-voting__registered-users-only-text">
                           {{__('you_have_to_be_loged_in_to_vote_and_assign_likes_and_spermatozoids')}}
                     </div>
                  </div>
               @endif
               <div>
                   <div class="movie-voting__assign-spermatozoid-label">{{__('give_spermatozoid_if_you_came_watching_this_movie')}}</div>
                   <spermatozoid-icon v-on:click.native="addSpermatozoid({{$movie->id}})" role="button" class="movie-voting__spermatozoid-icon"></spermatozoid-icon>
               </div>
            </div>
        </section>
    </main>
    <user-notification></user-notification>
</x-base>
