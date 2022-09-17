<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CustomQueryBuilders\News\NewsQueryBuilder;

class News extends Model
{
    protected $table = 'news';

    public $timestamps = false;

    protected $fillable = [
        'news_header',
        'news_content',
        'added_at',

    ];

    public function newEloquentBuilder($query) : NewsQueryBuilder
    {
        return new NewsQueryBuilder($query);
    }
}
