<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Nationality;
use App\Movie;
use Carbon\Carbon;
use App\PornstarRate;
use App\PornstarComment;
use App\Traits\Slugifier;
use App\Traits\Models\PornstarDataExtractor;

class Pornstar extends Model
{
    use HasFactory, Slugifier, PornstarDataExtractor;

    public const SMALL_PROFILE_IMAGE_PATH = 'images/decoration/pornstars/profile-small/';

    public int $userRate;
    public bool $limitComments = true;
    public int $commentsLimit = 20;

    protected $hidden = ['pivot'];

    public function nationality()
    {
        return $this->belongsTo(Nationality::class);
    }

    public function getAgeAttribute()
    {
        return Carbon::parse($this->born)->age;
    }

    public function movies()
    {
        return $this->belongsToMany(Movie::class, 'movie_has_pornstar');
    }

    public function getVotesAverageAttribute(): float
    {
        return round(($this->votes->sum('rate') / $this->amount_of_votes), 2);
    }

    public function votes()
    {
        return $this->hasMany(PornstarRate::class);
    }

    public function getamountOfVotesAttribute(): int
    {
        return $this->votes->count();
    }

    public function getHasAnyVotesAttribute(): bool
    {
        return $this->amount_of_votes > 0;
    }

    public function getHasBeenRatedByCurrentUserAttribute(): bool
    {

        $currentUserRate =  $this->votes->first(function ($item, $key) {
            return $item->user_id == \Auth::user()->id;
        });

        if ($currentUserRate !== null) {
            $this->userRate = $currentUserRate->rate;
            return true;
        }

        return false;
    }

    public function getCurrentUserRateAttribute()
    {
        return $this->userRate;
    }

    public function comments()
    {
        return $this->limitComments ?
            $this->hasMany(PornstarComment::class)->limit($this->commentsLimit)->orderBy('created_at', 'desc') :
            $this->hasMany(PornstarComment::class);
    }

    public function getamountOfCommentsAttribute(): int
    {
        return $this->comments->count();
    }

    public function getHasAnyCommentsAttribute(): bool
    {
        return $this->amount_of_comments > 0;
    }
}
