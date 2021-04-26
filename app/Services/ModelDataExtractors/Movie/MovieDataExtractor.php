<?php

namespace App\Services\ModelDataExtractors\Movie;

use App\Movie;
use App\ModelShards\Pornstar\PornstarsListShard;
use App\ModelShards\Pornstar\PornstarBasicDataShard;
use App\Pornstar;


Class MovieDataExtractor{

    public static function getPornstarsList(Movie $movie) : ?PornstarsListShard {

        if($movie->pornstars?->isNotEmpty()){
           $pornstarsList = [];
           $movie->pornstars->each(function(Pornstar $pornstar) use (&$pornstarsList){
               $pornstarsList[] = new PornstarBasicDataShard($pornstar->nickname, $pornstar->id);
           });
           return new PornstarsListShard(...$pornstarsList);
        }
        return null;
    }
}