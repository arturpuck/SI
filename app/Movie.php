<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Pornstar;
use App\Services\ElegantPaginationBuilder;

class Movie extends Model
{
    use HasFactory;

    public $with = [
      'pornstars'
    ];


    public function getDurationAttribute($value){
        return Str::startsWith($value, "00") ? Str::substr($value,3,5) : $value;
    }

    public function pornstars(){
        return $this->belongsToMany(Pornstar::class,'movie_has_pornstar');
    }

    public function getPornstarsNamesAttribute(){
        return $this->pornstars->pluck('nickname')->all();
    }

}
