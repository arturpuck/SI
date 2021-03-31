<?php

namespace App\Rules\Movies;

use Illuminate\Contracts\Validation\Rule;
use App\MovieRating;
use Carbon\Carbon;

class LastSpermatozoidWasAddedNoLongerThan implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $movieRating = MovieRating::where('user_id', \Auth::user()->id)
                                   ->whereNotNull('last_spermatozoid_added_at')
                                   ->orderBy('last_spermatozoid_added_at', 'DESC')
                                   ->take(1)
                                   ->get();

        return $movieRating->isEmpty() ? true : 
               Carbon::now()->subMinutes(30)->gte($movieRating->first()->last_spermatozoid_added_at);

    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'cum limit exceeded';
    }
}
