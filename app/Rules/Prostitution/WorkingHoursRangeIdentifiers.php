<?php

namespace App\Rules\Prostitution;

use Illuminate\Contracts\Validation\Rule;

class WorkingHoursRangeIdentifiers implements Rule
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
            $identifiers = array_keys($range);
            $containsStart = in_array(self::START_IDENTIFIER, $identifiers);
            $containsEnd = in_array(self::END_IDENTIFIER, $identifiers);
            if((!$containsEnd) || (!$containsStart) || (count($identifiers) !== 2)) {
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
        return 'At least one day does not contain since or until, or contains illegal identifiers';
    }
}
