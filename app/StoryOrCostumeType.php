<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoryOrCostumeType extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'name'
    ];
}
