<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PornstarComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'pornstar_id',
        'user_id',
        'comment',
        'parent_comment_id',
        'nickname'
    ];
}
