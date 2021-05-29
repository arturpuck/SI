<?php

namespace App\ModelShards\Movie;

use Illuminate\Support\Collection;
use App\ModelShards\Pornstar\PornstarsListShard;

Class MovieBasicDataShard {

   public ?Collection $pornstars;

    public function __construct(
        public int $id,
        public string $duration,
        public string $title,
        public int $views,
        public string $created_at,
        public MovieRatingShard $rating,
        public MovieLikesShard $likes,
        public SpermatozoidsShard $spermatozoids,
        ?PornstarsListShard $pornstarsList,
        public bool $is_translated_to_polish = false
    ){
       $this->pornstars = $pornstarsList?->pornstars;
    }
   
}