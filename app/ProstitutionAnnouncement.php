<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\CustomQueryBuilders\Prostitution\ProstitutionAnnouncementQueryBuilder;
use App\Voivodeship;
use App\City;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Enum\Prostitution\AnnouncementPhotoType;
use Carbon\Carbon;
use App\UserType;
use App\SexualOrientation;

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

    public function userType()
    {
        return $this->belongsTo(UserType::class);
    }

    public function sexualOrientation()
    {
        return $this->belongsTo(SexualOrientation::class);
    }

    public function getAge() : int
    {
        $currentDate = Carbon::now();
        $dateOfBirth = Carbon::createFromFormat('Y-m-d', $this->birth_date);
        return $dateOfBirth->diffInYears($currentDate);
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

    public function isValid() : bool
    {
        if(!$this->valid_until) {
            return false;
        }
        $dateValidUntil = Carbon::createFromFormat('Y-m-d', $this->valid_until);
        return $dateValidUntil->isFuture();
    }

}