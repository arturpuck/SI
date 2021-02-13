<x-base title="{{__('sex_empire_main_page')}}" specificImageClass="{{$specificImageClass}}" description="{{__('sex_empire_main_page_description')}}">
   <main class="main-content">
      <header class="introductory-content">
         <h1 class="introductory-header">
             {{__('welcome')}}
             <svg-vue icon="smile_in_glasses" class="introductory-header-icon"></svg-vue>
        </h1>
         <p class="news-introduction">{{__('news_introduction')}}</p>
         <h2 class="quick-start-header">
             {{__('quick_start')}}
             <svg-vue class="quick-start-icon" icon="rocket_launch"></svg-vue>
        </h2>
         <ul class="quickstart-options-list">
             <li class="quickstart-option">
                 <a href="{{route('pornstars.list')}}" class="quickstart-link">
                    <span class="quickstart-option-description">{{__('pornstars')}}</span>
                    <svg-vue class="quickstart-option-icon" icon="star_full"></svg-vue>
                </a>
            </li>
            <li class="quickstart-option">
                <span class="quickstart-option-description">{{__('categories')}}</span>
                <svg-vue class="quickstart-option-icon" icon="video_playlist"></svg-vue>
            </li>
            <li class="quickstart-option">
              <a href="{{route('movies.advanced.search.panel')}}" class="quickstart-link">
                <span class="quickstart-option-description">{{__('search_engine')}}</span>
                <svg-vue class="quickstart-option-icon" icon="search"></svg-vue>
              </a>
            </li>
          </ul>
      </header>
      <div class="news-all">
      <h2 class="news-header">{{__('news_header')}}</h2>
      <div class="news-container">
          @foreach($news as $article)
              @include('news.'.$article->template_name)
          @endforeach
      </div>
      </div>
   </main>
</x-base>