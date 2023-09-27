<?php

namespace App\Traits\Prostitution;

use Illuminate\Support\Str;

trait PhotoTokenGenerator
{
    private function generatePhotoToken() : string 
    {
        return strtoupper(Str::random(rand(4,8)));
    }
}