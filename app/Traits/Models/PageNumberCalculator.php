<?php

namespace App\Traits\Models;

trait PageNumberCalculator 
{
    public static function getNumberOfTotalPages(int $newsPerPage) : int
    {
        return ceil(self::count() / $newsPerPage);
    }
}