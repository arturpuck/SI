<movie-preview-complete></movie-preview-complete>

@if($movies->hasPages())
<links-box v-bind:show-fixed-shortcuts="true" v-bind:links="{{json_encode($links, true)}}" v-bind:initial-current-page="{{$movies->pageNumber()}}"></links-box>
@endif

<ul class="movies-container">
    @foreach($movies->items() as $movie)
        <movie-box
            duration="{{$movie->duration}}"
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

@if($movies->hasPages())
<links-box v-bind:links="{{json_encode($links, true)}}" v-bind:initial-current-page="{{$movies->pageNumber()}}"></links-box>
@endif