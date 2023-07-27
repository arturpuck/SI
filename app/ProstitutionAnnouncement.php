<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\CustomQueryBuilders\Prostitution\ProstitutionAnnouncementQueryBuilder;
use App\Voivodeship;
use App\City;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Enum\Prostitution\AnnouncementPhotoType;

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

    public function addControlSum(AnnouncementPhotoType $type, string $key, string $value) : void
    {
        $currentSum = json_decode($this->photos_control_sum, true);
        $currentSum[$type->value][$key] = $value;
        $this->setAttribute('photos_control_sum', json_encode($currentSum));
    }
    
    public function removeControlSum(AnnouncementPhotoType $type, string $key) : void
    {
        $currentSum = json_decode($this->photos_control_sum, true);
        unset($currentSum[$type->value][$key]);
        $this->setAttribute('photos_control_sum', json_encode($currentSum));
    }

}
