<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class PaginationDoesNotExceedAvailableItems implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(private string $class, private int $perPage)
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
        return is_int($value) ? $this->class::query()
                                         ->filterByPage($value, $this->perPage)
                                         ->exists() : false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'There is no page available with this number';
    }
}
