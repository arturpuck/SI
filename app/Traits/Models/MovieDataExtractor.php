<?php

namespace App\Traits\Models;

use App\Pornstar;
use Illuminate\Support\Str;

trait MovieDataExtractor
{

    public function getDurationAttribute($value)
    {
        return Str::startsWith($value, "00") ? Str::substr($value, 3, 5) : $value;
    }

    public function getLikesData(?int $userID = null, ?bool $userLikesMovie = null): array
    {
        $data = [
            'totalLikes' => intval($this->votes?->where('user_assigned_like', true)?->count()),
        ];

        if ($userID) {
            $data['userLikesMovie'] = boolval($this->votes?->where('user_id', $userID)
                ->where('user_assigned_like', true)
                ->isNotEmpty());
        }

        if($userLikesMovie !== null){
            $data['userLikesMovie'] = $userLikesMovie;
        }
        return $data;
    }

    public function getPornstarsList(): ?array
    {
        if ($this->pornstars->isNotEmpty()) {
            return $this->pornstars->map(fn (Pornstar $pornstar) => ['id' => $pornstar->id, 'nickname' => $pornstar->nickname])->toArray();
        } else {
            return null;
        }
    }

    public function getRatings(?int $userID = null): array
    {
        return [
            'overallRating' => $this->getAverageRating(),
            'userRating' => $userID ? $this->votes?->where('user_id', $userID)->first()?->user_vote : null
        ];
    }
    
    public function getAverageRating(): ?float
    {
        $ammountOfVotes = intval($this->votes?->where('user_vote', '!=', null)?->count());
        return ($ammountOfVotes > 9) ? round($this->votes->sum('user_vote') / $ammountOfVotes,2) : null;
    }

    public function getSpermatozoids(?int $userID = null): array
    {
        return [
            'totalSpermatozoids' => intval($this->votes?->sum('ammount_of_spermatozoids')),
            'userSpermatozoids' => intval($this->votes?->where('user_id', $userID)->count())
        ];
    }

    public function getSpecificSexTypesAttribute()
    {
        $matchingTypes = [];

        foreach (self::SEX_TYPES_COLUMNS as $sexType) {

            $propertyName = $sexType . '_percentage';
            if ($this->$propertyName > 90) {
                $matchingTypes[] = $propertyName;
            }
        }

        return count($matchingTypes) > 0 ? $matchingTypes : false;
    }

   public function getSlug() : string 
   {
     return str_replace([' ', ',', '.', '!'], '-', $this->title);
   }

   public function getLink() : string 
   {
       return urldecode(route('movies.show.single', ['movieID' => $this->id, 'slug' => $this->getSlug()]));
   }

}
