<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
 <!-- advanced search  -->
<url>
      <loc>{{$trimer->withoutHTTPS(route('movies.advanced.search.panel'))}}</loc>
      <changefreq>monthly</changefreq>
</url>
<!-- contact form  -->

<url>
      <loc>{{$trimer->withoutHTTPS(route('contact.show.form'))}}</loc>
      <changefreq>monthly</changefreq>
</url>
<!-- categories list -->
@foreach($categoriesURLs as $categoryURL)
<url>
      <loc>{{ $trimer->withoutHTTPS($categoryURL) }}</loc>
      <changefreq>weekly</changefreq>
</url>
@endforeach

<!-- porn dictionary  currently hardcoded ranges -->

<url>
   <loc>{{$trimer->withoutHTTPS(urldecode(route('dictionary.list', ['range' => 'a-c'])))}}</loc>
   <changefreq>monthly</changefreq>
</url>
<url>
   <loc>{{$trimer->withoutHTTPS(urldecode(route('dictionary.list', ['range' => 'd-g'])))}}</loc>
   <changefreq>monthly</changefreq>
</url>
<url>
   <loc>{{$trimer->withoutHTTPS(urldecode(route('dictionary.list', ['range' => 'h-z'])))}}</loc>
   <changefreq>monthly</changefreq>
</url>

<!-- pornstars -->
@foreach($pornstars as $pornstar)
<url>
   <loc>{{ $trimer->withoutHTTPS($pornstar->getProfileLink()) }}</loc>
   <changefreq>monthly</changefreq>
</url>
@endforeach

<url>
   <loc> {{$trimer->withoutHTTPS(route('pornstars.list'))}}</loc>
   <changefreq>monthly</changefreq>
   
   @foreach($pornstars as $pornstar)
   <image:image>
      <image:loc>{{$trimer->withoutHTTPS($pornstar->getImageURL())}}</image:loc>
      <image:title>{{__('portrait_picture_of', ['nickname' => $pornstar->nickname])}}</image:title>
   </image:image>
   @endforeach
</url>


<!-- movies -->
<url>
   <loc>{{$trimer->withoutHTTPS(route('movies.new'))}}</loc>
   <changefreq>daily</changefreq>
</url>

<url>
   <loc>{{$trimer->withoutHTTPS(route('movies.the-most-popular'))}}</loc>
   <changefreq>monthly</changefreq>
</url>


@foreach($movies as $movie)
<url>
   <loc>{{$trimer->withoutHTTPS($movie->getLink())}}</loc>
   <changefreq>monthly</changefreq>
</url>
@endforeach
</urlset> 