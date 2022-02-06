<x-base title="{{__('sex_empire_main_page')}}" customBodyClass="{{$customBodyClass}}" description="{{__('sex_empire_main_page_description')}}">
   <main class="main-content">
        <div class="news-all">
            <h1 class="news-header">{{__('news_header')}}</h1>
                @foreach($news as $article)
                @include('news.'.$article->template_name)
                @endforeach
        </div>
    <h2 class="quick-start-header">
        {{__('quick_start')}}
        <rocket-launch-icon class="quick-start-icon"/>
   </h2>
    <ul class="quickstart-options-list">
        <li class="quickstart-option">
                <span class="quickstart-option-description">{{__('new_movies')}}</span>
                <movie-media-player-icon class="quickstart-option-icon" />
        </li>
        <li class="quickstart-option">
            <a href="{{route('pornstars.list')}}" class="quickstart-link">
                <span class="quickstart-option-description">{{__('pornstars_movie_caption')}}</span>
                <star-full-icon class="quickstart-option-icon" />
            </a>
        </li>
        <li v-on:click="showCategories" class="quickstart-option">
            <span class="quickstart-option-description">{{__('categories')}}</span>
            <video-playlist-icon class="quickstart-option-icon" />
        </li>
        <li class="quickstart-option">
          <a href="{{route('movies.advanced.search.panel')}}" class="quickstart-link">
            <span class="quickstart-option-description">{{__('search_engine')}}</span>
            <magnifier-icon class="quickstart-option-icon" />
          </a>
        </li>
      </ul>
      <horizontal-scroll-list>
          @foreach($latestMovies as $movie)
            <movie-box class="movie-box"
                duration="{{$movie->getDurationForHumans()}}"
                title="{{$movie->title}}"
                v-bind:views="{{$movie->views}}"
                @if(!$movie->pornstars->isEmpty())
                    v-bind:pornstars="{{json_encode($movie->pornstars_names)}}"
                @endif
                @if($movie->is_translated_to_polish)
                    v-bind:is-translated-to-polish="true"
                @endif
                v-bind:id="{{$movie->id}}">
            </movie-box>
          @endforeach
      </horizontal-scroll-list>
   </main>
   <movie-preview-complete></movie-preview-complete>
</x-base>