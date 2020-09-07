<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';

    public $timestamps = false;

    protected $fillable = [
        'news_header',
        'news_content',
        'added_at',

    ];
}
