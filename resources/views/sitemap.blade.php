<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
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
<!-- movies  -->

 @foreach($movies as $movie)
   <url>
      <loc>{{$movie->getLink()}}</loc>
      <changefreq>monthly</changefreq>
   </url>
@endforeach

<url>
      <loc>{{route('movies.new')}}</loc>
      <changefreq>daily</changefreq>
   </url>

   <url>
      <loc>{{route('movies.the-most-popular')}}</loc>
      <changefreq>monthly</changefreq>
   </url>

<!-- pornstars -->
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

@foreach($pornstars as $pornstar)
   <url>
      <loc>{{ $pornstar->getProfileLink() }}</loc>
      <changefreq>monthly</changefreq>
   </url>
@endforeach

</urlset> 