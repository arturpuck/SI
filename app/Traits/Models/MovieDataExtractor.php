<?php

namespace App\Traits\Models;

use App\Pornstar;
use Illuminate\Support\Str;

trait MovieDataExtractor
{

    public function getDurationForHumans() : string 
    {
        $duration = $this->getDuration();
        return Str::startsWith($duration, "00") ? Str::substr($duration, 3, 5) : $duration;
    }

    public function getComplexLikesData(?int $userID = null, ?bool $userLikesMovie = null): array
    {
        $data = [
            'totalLikes' => $this->getNumberOfLikes(),
        ];

        if ($userID) {
            $data['userLikesMovie'] = boolval($this->votes?->where('user_id', $userID)
                ->where('user_assigned_like', true)
                ->isNotEmpty());
        }

        if ($userLikesMovie !== null) {
            $data['userLikesMovie'] = $userLikesMovie;
        }
        return $data;
    }

    public function getNumberOfLikes() : int 
    {
        return intval($this->votes?->where('user_assigned_like', true)?->count());
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
        return ($ammountOfVotes > 9) ? round($this->votes->sum('user_vote') / $ammountOfVotes, 2) : null;
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

    public function getSlug(): string
    {
        return str_replace([' ', ',', '.', '!'], '-', $this->title);
    }

    public function getLink(): string
    {
        return urldecode(route('movies.show.single', ['movieID' => $this->id, 'slug' => $this->getSlug()]));
    }

    public function getVideoMetadataDescription(): string
    {
        $description = __('adult_content').'. ';
        
        if($basicCategoresList = $this->getBasicCategoriesList()){
            $basicCategoresList = implode(', ', $basicCategoresList );
            $description .= __("falls_into_the_following_categories").' : '.$basicCategoresList.'. ';
        }

        if($gadgetsList = $this->getGadgetsList()){
           $gadgetsList = implode(', ', $gadgetsList);
           $description .= __('the_following_gadgets_are_used').' : '.$gadgetsList.'. ';
        }

        if($location = $this->getActionLocation()){
            $description .= __('movie_takes_place_in_location').' : '.__($location).'. ';
        }

        if($pornstars = $this->getPornstarsList()){
            $pornstars = implode(', ',array_column($pornstars, 'nickname'));
            $description .= __('the following_pornstars_play_role_in_this_movie').' : '.$pornstars.'.';
        }

        return $description;
    }

    public function getThumbnailUrl() : string 
    {
       return URL()->to(config('important_directories.thumbnails_directory')).'/'.$this->id.'.jpg';
    }

    public function getContentURL() : string
    {
        return URL()->to(config('important_directories.movies_directory')).'/'.$this->id.'.mp4';
    }

    public function getDurationInISO8601() : string
    {
        $timeIngridients = explode(':', $this->getDuration());
        return "PT".$timeIngridients[0].'H'.$timeIngridients[1].'M'.$timeIngridients[2].'S';
    }

   
}
