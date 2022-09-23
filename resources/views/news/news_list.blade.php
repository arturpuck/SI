<x-base title="{{__('news_title')}}" customBodyClass="empire-background-image-{{$backgroundNumber}}" description="{{__('news_description')}}">
<main class="news-all">
    <div class="news-list">
        @foreach($news as $article)
            @include('news.'.$article->template_name)
        @endforeach
    </div>
@if(isset($links))
    <div class="links-section">
        <links-box 
        show-fixed-shortcuts="false"
        v-bind:links="{{json_encode($links, true)}}" 
        v-bind:initial-current-page="{{$pageNumber}}"></links-box> 
    </div>
@endif
</main>
</x-base>