<?php

namespace App\ModelShards\Pornstar;
use Illuminate\Support\Collection;

Class PornstarsListShard {

    public ?Collection $pornstars = null;

    public function __construct(?PornstarBasicDataShard ...$pornstars){
         if($pornstars){
             $this->pornstars = collect($pornstars);
         }
         
    }
 
}