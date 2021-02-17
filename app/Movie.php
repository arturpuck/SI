<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Pornstar;
use App\Nationality;
use App\Location;
use App\StoryOrCostumeType;
use App\Services\ElegantPaginationBuilder;

class Movie extends Model
{
    use HasFactory;

    protected $hidden = ['pivot'];

    public function getDurationAttribute($value){
        return Str::startsWith($value, "00") ? Str::substr($value,3,5) : $value;
    }

    public function pornstars(){
        return $this->belongsToMany(Pornstar::class,'movie_has_pornstar');
    }


    public function getPornstarsNamesAttribute(){
        return $this->pornstars->pluck('nickname')->all();
    }

    public function actressNationality(){
        return $this->belongsTo(Nationality::class, 'actress_nationality_id');
    }

    public function location(){
        return $this->belongsTo(Location::class, 'action_location_id');
    }

    public function storyOrCostumeType(){
        return $this->belongsTo(StoryOrCostumeType::class, 'story_or_costume_type_id');
    }

}
