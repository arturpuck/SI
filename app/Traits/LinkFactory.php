<?php

namespace App\Traits;

trait LinkFactory
{
    public function generateLinks(string $pattern, array $uniqueParts): array
    {
        return array_map(fn ($element) => str_replace('{}', $element, $pattern), $uniqueParts);
    }
}
