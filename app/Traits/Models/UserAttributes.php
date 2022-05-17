<?php

namespace App\Traits\Models;

Trait UserAttributes 
{
    public function isEmployee() : bool
    {
        return $this?->userType->user_type_name === 'employee';
    }
}