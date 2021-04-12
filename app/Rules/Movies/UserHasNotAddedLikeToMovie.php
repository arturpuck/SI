<?php

namespace App\Rules\Movies;

use Illuminate\Contracts\Validation\Rule;
use App\MovieRating;

class UserHasNotAddedLikeToMovie implements Rule
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
        return !MovieRating::where(['movie_id' => $value, 
                                    'user_id' => \Auth::user()->id,
                                    'user_assigned_like' => true])
                                    ->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'You already like this movie';
    }
}
