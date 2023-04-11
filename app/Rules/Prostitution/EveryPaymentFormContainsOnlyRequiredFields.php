<?php

namespace App\Rules\Prostitution;

use Illuminate\Contracts\Validation\Rule;

class EveryPaymentFormContainsOnlyRequiredFields implements Rule
{
    const UNIT_KEY = 'unit';
    const PRICE_KEY = 'price';
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
        if(!is_array($value)) {
            return false;
        }

        foreach($value as $paymentForm) {
            $containsUnit = array_key_exists(self::PRICE_KEY, $paymentForm);
            $containsPrice = array_key_exists(self::UNIT_KEY, $paymentForm);
            $containsTwoKeys = count($paymentForm) === 2;

            if(!$containsPrice || !$containsUnit || !$containsTwoKeys) {
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
        return 'At least one payment form contains invalid data structure';
    }
}
