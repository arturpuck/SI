<x-base title="{{__('news_title')}}" customBodyClass="empire-background-image-{{$backgroundNumber}}" description="{{__('news_description')}}">
<main class="news-list">
    @foreach($news as $article)
        @include('news.'.$article->template_name)
    @endforeach
</main>
</x-base>