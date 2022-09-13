<x-base title="{{__('sex_empire_main_page')}}" description="{{__('sex_empire_main_page_description')}}">
   <main class="main-content">
    <h1 class="main-page-header">
        {{__('the_most_popular_movies')}}
        <achievement-medal-award-icon class="medal-icon"></achievement-medal-award-icon>
    </h1>
    <ul class="movies-container">
    @foreach($theMostPopularMovies as $movie)
        <movie-box
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
</ul>
<links-box v-bind:links="{{json_encode($linksForTheMostPopular, true)}}" v-bind:initial-current-page="1"></links-box> 
<h2 class="main-page-header">
    {{__('the_latest_movies')}}
    <new-board-icon class="board-icon"></new-board-icon>
</h2>
<ul class="movies-container">
    @foreach($latestMovies as $movie)
        <movie-box
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
</ul>
<links-box v-bind:links="{{json_encode($linksForLatestMovies, true)}}" v-bind:initial-current-page="1"></links-box> 
   </main>
   <movie-preview-complete></movie-preview-complete>
</x-base>