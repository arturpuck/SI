<?php

namespace App;

use App\Location;
use App\Nationality;
use App\Pornstar;
use App\StoryOrCostumeType;
use App\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Movie extends Model
{
    use HasFactory;

    protected $hidden = ['pivot'];

    public $timestamps = false;

    private const SEX_TYPES_COLUMNS = [
        'anal', 'blowjob', 'pussy_fuck', 'handjob', 'tittfuck', 'pussy_licking',
        'feet_petting', 'position_69',
    ];

    public function getDurationAttribute($value)
    {
        return Str::startsWith($value, "00") ? Str::substr($value, 3, 5) : $value;
    }

    public function pornstars()
    {
        return $this->belongsToMany(Pornstar::class, 'movie_has_pornstar');
    }

    public function getPornstarsNamesAttribute()
    {
        return $this->pornstars->pluck('nickname')->all();
    }

    public function actressNationality()
    {
        return $this->belongsTo(Nationality::class, 'actress_nationality_id');
    }

    public function location()
    {
        return $this->belongsTo(Location::class, 'action_location_id');
    }

    public function storyOrCostumeType()
    {
        return $this->belongsTo(StoryOrCostumeType::class, 'story_or_costume_type_id');
    }

    public function votes()
    {
        return $this->hasMany(MovieRating::class);
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


}
