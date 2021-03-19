<x-base title="{{$title}}" customBodyClass="standard-background" description="{{$description}}">
    <main class="movie-block">
        <div class="player-container">
            <video id="player" playsinline controls>
               <source src="/movies/{{$movie->id}}.mp4" type="video/mp4" />
            </video>
        </div>
    </main>
</x-base>