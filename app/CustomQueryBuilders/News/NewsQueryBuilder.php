<?php

namespace App\CustomQueryBuilders\News;

use Illuminate\Database\Eloquent\Builder;
use App\CustomQueryBuilders\Traits\CommonQueryBuilderActions;

class NewsQueryBuilder extends Builder
{
   use CommonQueryBuilderActions; 

   public function orderByAddedDate() : self
   {
      $this->orderBy('added_at', 'DESC');
      return $this;
   }

}