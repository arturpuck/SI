<?php

namespace App\Rules\Prostitution;

use Illuminate\Contracts\Validation\Rule;

class HourOfStartIsBeforeHourOfEnd implements Rule
{
    const START_IDENTIFIER = 'since';
    const END_IDENTIFIER = 'until';
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
        foreach($value as $range) {
            if(!array_key_exists(self::START_IDENTIFIER, $range)) {
                return false;
            }

            if(!array_key_exists(self::END_IDENTIFIER, $range)) {
                return false;
            }
            $timeSince = strtotime($range[self::START_IDENTIFIER]);
            $timeUntil = strtotime($range[self::END_IDENTIFIER]);

            if($timeUntil < $timeSince) {
                return false;
            }
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'At least one working day starts later then finishes';
    }
}
