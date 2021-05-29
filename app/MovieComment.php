<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieComment extends Model
{
    use HasFactory;

    protected $guarded = ['created_ad', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
