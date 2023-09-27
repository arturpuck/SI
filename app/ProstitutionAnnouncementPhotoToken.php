<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\CustomQueryBuilders\Prostitution\ProstitutionAnnouncementPhotoTokenQueryBuilder;

class ProstitutionAnnouncementPhotoToken extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'token'];

    public function newEloquentBuilder($query): ProstitutionAnnouncementPhotoTokenQueryBuilder
    {
        return new ProstitutionAnnouncementPhotoTokenQueryBuilder($query);
    }
}
