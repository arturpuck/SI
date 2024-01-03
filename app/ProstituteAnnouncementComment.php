<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\ProstitutionAnnouncement;

class ProstituteAnnouncementComment extends Model
{
    use HasFactory;

    protected $guarded = ['approved'];

    public function announcement()
    {
        return $this->belongsTo(ProstitutionAnnouncement::class, 'announcement_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
