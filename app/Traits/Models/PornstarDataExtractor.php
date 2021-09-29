<?php

namespace App\Traits\Models;

trait PornstarDataExtractor
{
   public function getRating(?int $userID = null) : array
   {
       

       return [
           'overallRating' => $this->getAverageRating(),
           'userRating' => $userID ? $this->votes->where('userID', $userID)->first()->rate : null
       ];
   }

   public function getAverageRating() : ?float 
   {
     $ammountOfVotes = intval($this->votes?->count());
     return $ammountOfVotes > 9 ? round($this->votes->sum('rate') / $ammountOfVotes, 2) : null
   }
}