<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Movie;

class MovieRating extends Model
{
    use HasFactory;

    protected $fillable = [
        'movie_id',
        'user_id',
        'player_id',
        'user_vote',
        'user_assigned_spermatozoid',
        'user_assigned_like',
    ];

    public $timestamps = false;

    public function movie(){
        return $this->belongsTo(Movie::class);
    }


}
