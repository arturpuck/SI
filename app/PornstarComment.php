<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\User;
use Carbon\Carbon;
use App\CustomQueryBuilders\Pornstars\PornstarCommentQueryBuilder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;

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

    public $with = [
        'user'
    ];

    protected $appends = [
        'added_by_authenticated_user',
        'user_nickname',
        'avatar_file_path',
        'added_ago'
    ];

    public function user()
    {
        return $this->belongsTo(User::class)->select(['id', 'login', 'avatar_file_name']);
    }

    public function childComments(): HasMany
    {
        return $this->hasMany(self::class, 'parent_comment_id');
    }


    public function parentComment(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_comment_id');
    }

    public function getAddedByAuthenticatedUserAttribute(): bool
    {
        return isset($this->user_id);
    }

    public function getUserNicknameAttribute(): string
    {
        return  $this->user->login ?? $this->nickname;
    }

    public function getAvatarFilePathAttribute(): string
    {
        return $this->user->avatar_file_path ?? '';
    }

    public function getAddedAgoAttribute(): string
    {
        return Carbon::createFromTimeStamp(strtotime($this->created_at))->diffForHumans();
    }

    public function newEloquentBuilder($query): PornstarCommentQueryBuilder
    {
        return new PornstarCommentQueryBuilder($query);
    }

    public function addedAgo(): Attribute
    {
        return Attribute::get(
            get: fn () => Carbon::createFromTimeStamp(strtotime($this->created_at))->diffForHumans()
        );
    }
}
