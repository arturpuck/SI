<x-base title="{{__('sex_empire_main_page')}}" customBodyClass="{{$customBodyClass}}" description="{{__('sex_empire_main_page_description')}}">
   <main class="main-content">
      <header class="introductory-content">
         <h1 class="introductory-header">
             {{__('welcome')}}
             <smile-in-glasses-icon class="introductory-header-icon"/>
        </h1>
         <p class="news-introduction">{{__('news_introduction')}}</p>
         <h2 class="quick-start-header">
             {{__('quick_start')}}
             <rocket-launch-icon class="quick-start-icon"/>
        </h2>
         <ul class="quickstart-options-list">
             <li class="quickstart-option">
                 <a href="{{route('pornstars.list')}}" class="quickstart-link">
                    <span class="quickstart-option-description">{{__('pornstars')}}</span>
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