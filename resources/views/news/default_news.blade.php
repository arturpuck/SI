<article class="default-news-body">
    <h3 class="default-news-header">
      <span class="fas default-news-header-icon fa-plus-square"></span>
      <span class="default-news-header-text">{{$article->news_header}}</span> 
      <time class="default-news-added-at-date">{{date("d-m-Y", strtotime($article->added_at))}}</time>
    </h3>
    <p class="default-news-content">{{$article->news_content}}</p>
</article>