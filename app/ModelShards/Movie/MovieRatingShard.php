<?php

namespace App\ModelShards\Movie;

Class MovieRatingShard {

    public ?float $overall_rating = null;
    public ?int $user_rating = null;

    public function __construct(?float $overall_rating = null, ?int $user_rating = null){
         $this->validateRating($overall_rating, $user_rating);
         $this->overall_rating = $overall_rating;
         $this->user_rating = $user_rating;
    }

    private function validateRating(?float $overall_rating = null, ?int $user_rating = null){
       $overall = $overall_rating ?? 0;
       $userRating = $user_rating ?? 0;

       if(($overall > 10) || ($overall < 0)){
        throw new \Exception('Overall rating should be between 0 and 10');
       }

       if(($userRating  > 10) || ($userRating  < 0)){
        throw new \Exception('User rating should be between 0 and 10');
       }

    }
    
}