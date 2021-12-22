<?php

namespace App\Rules\PornDictionary;

use Illuminate\Contracts\Validation\Rule;

class ValidPornDictionaryRange implements Rule
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
        if($value === null) {
            return true;
        }
        $rangeLetters = explode('-', $value);
        return (count($rangeLetters) === 2) && $this->isLetter($rangeLetters[0]) && $this->isLetter($rangeLetters[1]);
    }

    protected function isLetter(string $symbol) : bool
    {
        return preg_match('/[a-zA-Z]/', $symbol);
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
