<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\CustomQueryBuilders\Prostitution\ProstitutionAnnouncementQueryBuilder;

class ProstitutionAnnouncement extends Model
{
    use HasFactory;

    public function newEloquentBuilder($query): ProstitutionAnnouncementQueryBuilder
    {
        return new ProstitutionAnnouncementQueryBuilder($query);
    }
}
