<script type="application/ld+json">
{
   "@context": "https://schema.org",
   "@type": "VideoObject",
   "description" : "{{ $movie->getVideoMetadataDescription()}}",
   "name" : "{{$movie->getTitle()}}",
   "thumbnailUrl" : ["{{$movie->getThumbnailUrl()}}"],
   "uploadDate" : "{{$movie->getUploadDate()}}",
   "contentUrl" : "{{$movie->getContentUrl()}}",
   "duration" : "{{$movie->getDurationInISO8601()}}",
   "interactionStatistic":
   [
      {
       "@type": "InteractionCounter",
       "interactionType": { "@type": "WatchAction" },
       "userInteractionCount": {{$movie->getViews()}}
      },

      {
       "@type": "InteractionCounter",
       "interactionType": { "@type": "LikeAction" },
       "userInteractionCount": {{$movie->getNumberOfLikes()}}
      }
   ]
     
}
</script>