<div class="movies-container">
    @foreach($movies as $movie)
        <movie-box
            duration="{{$movie->duration}}"
            description="{{$movie->description}}"
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
</div>