<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\CustomQueryBuilders\Prostitution\ProstitutionAnnouncementQueryBuilder;
use App\Voivodeship;
use App\City;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProstitutionAnnouncement extends Model
{
    use HasFactory, SoftDeletes;

    public function newEloquentBuilder($query): ProstitutionAnnouncementQueryBuilder
    {
        return new ProstitutionAnnouncementQueryBuilder($query);
    }

    public function region()
    {
        return $this->belongsTo(Voivodeship::class,'region_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

}
