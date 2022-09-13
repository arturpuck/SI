<?php

namespace App\Traits;

trait LinkFactory
{
    public function generateLinks(string $pattern, array $uniqueParts): array
    {
        return array_map(fn ($element) => str_replace('{}', $element, $pattern), $uniqueParts);
    }

    public function generateLinksByRange(int $start, int $end, string $routeName): array
    {
        $result = [];
        for($loopIndex = $start; $loopIndex <= $end; $loopIndex++) {
            $result[] = route($routeName, $loopIndex);
        }
        return $result;
    }
}
