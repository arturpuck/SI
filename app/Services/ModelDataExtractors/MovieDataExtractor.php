<?php

namespace App\Services\ModelDataExtractors;

use App\Movie;
use App\User;

Class MovieDataExtractor{

    public static function getRating(Movie $movie) : ?float  {
        $ammountOfVotes = $movie->votes?->where('user_vote', '!=', null)->count();
        
        if($ammountOfVotes > 9){
            $votesSummary = $movie->votes->sum('user_vote');
            return round($votesSummary / $ammountOfVotes, 2);
        }

        return null;
    }

    public static function getAmmountOfSpermatozoids(Movie $movie, ?User $user = null) : array  {
         $result = ['total_spermatozoids' => intval($movie->votes?->sum('ammount_of_spermatozoids'))];
         if($user){
            $result['user_spermatozoids'] = intval($movie->votes?->where('user_id', $user->id)
                                                   ->first()->ammount_of_spermatozoids);
         }

         return $result;
    }

    public static function getAmmountOfLikes(Movie $movie, ?User $user = null) : array {
        $result = ['total_likes' => intval($movie->votes?->where('user_assigned_like', true)->count())];
        if($user){
            $result['user_likes_movie'] = boolval($movie->votes?->where('user_id', $user->id)
                                                                ->where('user_assigned_like', true)
                                                                ->isNotEmpty());
        }
        return $result;
    }

    public static function getUserRate(Movie $movie, User $user) :?int {
        return $movie->votes?->where('user_id', $user->id)->first()->user_vote;
    }
}