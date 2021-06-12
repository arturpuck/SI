<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class MovieComment extends Model
{
    use HasFactory;

    protected $guarded = ['created_ad', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getAddedAgoAttribute(): string
    {
        return Carbon::createFromTimeStamp(strtotime($this->created_at))->diffForHumans();
    }
}
