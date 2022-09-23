<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CustomQueryBuilders\News\NewsQueryBuilder;
use App\Traits\Models\PageNumberCalculator;

class News extends Model
{
    use PageNumberCalculator;
    
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
