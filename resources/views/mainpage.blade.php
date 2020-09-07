<x-base title="{{__('sex_empire_main_page')}}" specificImageClass="{{$specificImageClass}}" description="{{__('sex_empire_main_page_description')}}">
   <main class="main-content">
      <header class="introductory-content">
         <h1 class="introductory-header">{{__('welcome')}}<span class="fas introductory-header-icon fa-grin-hearts"></span></h1>
         <p class="news-introduction">{{__('news_introduction')}}</p>
         <h2 class="quick-start-header">{{__('quick_start')}}<span class="fas quick-start-icon fa-play-circle"></span></h2>
         <ul class="quickstart-options-list">
             <li class="quickstart-option">
                <span class="quickstart-option-description">{{__('pornstars')}}</span>
                <span class="fas quickstart-option-icon fa-star"></span>
            </li>
            <li class="quickstart-option">
                <span class="quickstart-option-description">{{__('categories')}}</span>
                <span class="fas quickstart-option-icon fa-images"></span>
            </li>
            <li class="quickstart-option">
                <span class="quickstart-option-description">{{__('search_engine')}}</span>
                <span class="fas quickstart-option-icon  fa-search"></span>
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