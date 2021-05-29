<?php

namespace App\Services\ModelDataExtractors\Movie;

use App\MovieRating;
use App\User;
use App\ModelShards\Movie\MovieRatingShard;
use App\ModelShards\Movie\SpermatozoidsShard;
use App\ModelShards\Movie\MovieLikesShard;

Class MovieRatingsDataExtractor{

    public static function getRating(?User $user, MovieRating ...$movieRatings) : MovieRatingShard  {
        $movieRatings = collect($movieRatings);
        $ammountOfVotes = $movieRatings?->where('user_vote', '!=', null)?->count();
        
        if($ammountOfVotes > 9){
            $votesSummary = $movieRatings?->sum('user_vote');
            $overall_rating = round($votesSummary / $ammountOfVotes, 2);
        }
        else{
            $overall_rating = null;
        }
        
        $user_rating = $user ? $movieRatings?->where('user_id', $user->id)->first()?->user_vote : null;
        return new MovieRatingShard($overall_rating, $user_rating);
        
    }

    public static function getAmmountOfSpermatozoids(?User $user = null, MovieRating ...$movieRatings) : SpermatozoidsShard  {
        $movieRatings = collect($movieRatings);

        $totalSpermatozoids = intval($movieRatings?->sum('ammount_of_spermatozoids'));
        $userSpermatozoids = $user ?  intval($movieRatings?->where('user_id', $user->id)
                                                           ->first()?->ammount_of_spermatozoids)
                                    : null;

         return new SpermatozoidsShard($totalSpermatozoids, $userSpermatozoids);
    }

    public static function getAmmountOfLikes(?User $user = null, MovieRating ...$movieRatings) : MovieLikesShard {
        $movieRatings = collect($movieRatings);
        $totalLikes = intval($movieRatings?->where('user_assigned_like', true)?->count());
        $userLikesMovie = boolval($movieRatings?->where('user_id', $user?->id)
                                                                ->where('user_assigned_like', true)
                                                                ->isNotEmpty());
        
        return new MovieLikesShard($totalLikes, $userLikesMovie);
    }

    public static function getUserRate(User $user, MovieRating ...$movieRatings) :?int {
        $movieRatings = collect($movieRatings);
        return $movieRatings?->where('user_id', $user->id)->first()?->user_vote;
    }
}