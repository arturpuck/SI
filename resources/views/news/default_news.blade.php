<article class="default-news-body">
    <h2 class="default-news-header">
      <add-file-icon class="news-header-icon"></add-file-icon>
      <span class="default-news-header-text">{{$article->news_header}}</span> 
      <time class="default-news-added-at-date">{{date("d-m-Y", strtotime($article->added_at))}}</time>
    </h3>
    <p class="default-news-content">{{$article->news_content}}</p>
</article>