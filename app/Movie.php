<?php

namespace App;

use App\Location;
use App\Nationality;
use App\Pornstar;
use App\StoryOrCostumeType;
use App\Traits\Models\MovieDataExtractor;
use App\Traits\Models\MovieAccessors;
use App\Traits\Models\MovieCategoriesExtractor;
use App\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Movie extends Model
{
    use HasFactory, MovieDataExtractor, MovieAccessors, MovieCategoriesExtractor;

    protected $hidden = ['pivot'];
    public $timestamps = false;

    private const SEX_TYPES_COLUMNS = [
        'anal', 'blowjob', 'pussy_fuck', 'handjob', 'tittfuck', 'pussy_licking',
        'feet_petting', 'position_69',
    ];


    public function pornstars()
    {
        return $this->belongsToMany(Pornstar::class, 'movie_has_pornstar', 'movie_has_pornstar.movie_id', 'movie_has_pornstar.pornstar_id');
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
}
