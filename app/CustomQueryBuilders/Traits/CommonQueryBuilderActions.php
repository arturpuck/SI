<?php

namespace App\CustomQueryBuilders\Traits;

Trait CommonQueryBuilderActions 
{
    public function filterByPage(int $page, int $perPage = 100): self
    {
      $skip = (intval($page) - 1) * $perPage;
      $this->query
        ->skip($skip)
        ->take($perPage);
      return $this;
    }
}