<?php

namespace App\Rules\Prostitution;

use Illuminate\Contracts\Validation\Rule;
use App\ProstitutionAnnouncement;

class CurrentUserOwnsProstitutionAnnouncement implements Rule
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
        return ProstitutionAnnouncement::query()->assignedToCurrentLoggedUser()
                                                ->filterByUniversallyUniqueIdentifier($value)
                                                ->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
