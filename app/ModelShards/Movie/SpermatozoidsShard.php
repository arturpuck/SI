<?php

namespace App\ModelShards\Movie;

Class SpermatozoidsShard {

    public ?int $total_spermatozoids = null;
    public ?int $user_spermatozoids = null;

    public function __construct(?int $total_spermatozoids = null, ?int $user_spermatozoids = null){
         $this->validateSpermatozoids($total_spermatozoids, $user_spermatozoids);
         $this->total_spermatozoids = $total_spermatozoids;
         $this->user_spermatozoids = $user_spermatozoids;
    }

    private function validateSpermatozoids(?int $total_spermatozoids = null, ?int $user_spermatozoids = null){
       $total = $total_spermatozoids ?? 0;
       $userSpermatozoids = $user_spermatozoids ?? 0;

       if($total < 0){
        throw new \Exception('Total spermatozoids mus be integer over 0');
       }

       if(($userSpermatozoids  < 0) || ($total  < 0)){
        throw new \Exception('User spermatozoids mus be integer over 0');
       }

    }
    
}