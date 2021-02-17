<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PornstarRate extends Model
{
    use HasFactory;

    protected $table = 'user_voted_pornstar';
    protected $fillable = [
        'pornstar_id',
        'user_id',
        'rate'
    ];
}
