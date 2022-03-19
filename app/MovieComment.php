<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\CustomQueryBuilders\Movie\MovieCommentQueryBuilder;

class MovieComment extends Model
{
    use HasFactory;

    protected $guarded = ['created_ad', 'updated_at'];
    protected $with = ['user'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function childComments() : HasMany
    {
        return $this->hasMany(self::class, 'parent_comment_id');
    }

    public function parentComment() : BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_comment_id');
    }

    public function addedAgo() : Attribute
    {
        return Attribute::get(
           get : fn() => Carbon::createFromTimeStamp(strtotime($this->created_at))->diffForHumans()
        );
    }

    public function newEloquentBuilder($query) : MovieCommentQueryBuilder
    {
        return new MovieCommentQueryBuilder($query);
    }



}
