<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
 <!-- advanced search  -->
<url>
      <loc>{{route('movies.advanced.search.panel')}}</loc>
      <changefreq>monthly</changefreq>
</url>
<!-- contact form  -->

<url>
      <loc>{{route('contact.show.form')}}</loc>
      <changefreq>monthly</changefreq>
</url>
<!-- categories list -->
@foreach($categoriesURLs as $categoryURL)
<url>
      <loc>{{ $categoryURL }}</loc>
      <changefreq>weekly</changefreq>
</url>
@endforeach

<!-- porn dictionary  currently hardcoded ranges -->

<url>
   <loc>{{urldecode(route('dictionary.list', ['range' => 'a-c']))}}</loc>
   <changefreq>monthly</changefreq>
</url>
<url>
   <loc>{{urldecode(route('dictionary.list', ['range' => 'd-g']))}}</loc>
   <changefreq>monthly</changefreq>
</url>
<url>
   <loc>{{urldecode(route('dictionary.list', ['range' => 'h-z']))}}</loc>
   <changefreq>monthly</changefreq>
</url>

<!-- pornstars -->
@foreach($pornstars as $pornstar)
<url>
   <loc>{{ $pornstar->getProfileLink() }}</loc>
   <changefreq>monthly</changefreq>
</url>
@endforeach

<url>
   <loc> {{route('pornstars.list')}}</loc>
   <changefreq>monthly</changefreq>
   
   @foreach($pornstars as $pornstar)
   <image:image>
      <image:loc>{{$pornstar->getImageURL()}}</image:loc>
      <image:title>{{__('portrait_picture_of', ['nickname' => $pornstar->nickname])}}</image:title>
   </image:image>
   @endforeach
</url>


<!-- movies -->
<url>
   <loc>{{route('movies.new')}}</loc>
   <changefreq>daily</changefreq>
</url>

<url>
   <loc>{{route('movies.the-most-popular')}}</loc>
   <changefreq>monthly</changefreq>
</url>


@foreach($movies as $movie)
<url>
   <loc>{{$movie->getLink()}}</loc>
   <video:video>
      <video:thumbnail_loc>{{$movie->getThumbnailUrl()}}</video:thumbnail_loc>
      <video:title>{{$movie->getTitle()}}</video:title>
      <video:description>{{$movie->getVideoMetadataDescription()}}</video:description>
      <video:content_loc>{{$movie->getContentURL()}}</video:content_loc>
      <video:duration>{{$movie->getDurationInSeconds()}}</video:duration>
      <video:view_count>{{$movie->getViews()}}</video:view_count>
      <video:publication_date>{{$movie->getUploadDate()}}</video:publication_date>
      <video:family_friendly>no</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
      @if($basicCategoriesList = $movie->getBasicCategoriesList())
         @foreach($basicCategoriesList as $basicCategory)
            <video:tag>{{$basicCategory}}</video:tag>
         @endforeach
      @endif
      <video:category>Pornografia</video:category>
   </video:video>
   <changefreq>monthly</changefreq>
</url>
@endforeach
</urlset> 