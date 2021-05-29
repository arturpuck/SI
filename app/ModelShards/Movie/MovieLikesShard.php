<?php

namespace App\ModelShards\Movie;

Class MovieLikesShard {

    public ?int $total_likes = null;
    public bool $user_likes_movie = false;

    public function __construct(?int $total_likes = null, bool $user_likes_movie = false){
         $this->validateLikes($total_likes);
         $this->total_likes = $total_likes;
         $this->user_likes_movie = $user_likes_movie;
    }

    private function validateLikes(?int $total_likes){
       $total = $total_likes ?? 0;

       if($total < 0){
        throw new \Exception('Total likes mus be integer over 0');
       }

    }
    
}