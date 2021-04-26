<?php

namespace App\ModelShards\Movie;

use App\ModelShards\Pornstar\PornstarsListShard;

Class MovieBasicDataShard {


    public function __construct(
        public int $views,
        public string $created_at,
        public MovieRatingShard $rating,
        public MovieLikesShard $likes,
        public SpermatozoidsShard $spermatozoids,
        public ?PornstarsListShard $pornstars

    ){}
   
}