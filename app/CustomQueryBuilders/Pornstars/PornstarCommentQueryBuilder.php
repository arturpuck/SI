<?php

namespace App\CustomQueryBuilders\Pornstars;

use Illuminate\Database\Eloquent\Builder;
use App\CustomQueryBuilders\Traits\CommonQueryBuilderActions;
use App\CustomQueryBuilders\Traits\CommentsFilters;

Class PornstarCommentQueryBuilder extends Builder
{

    use CommonQueryBuilderActions, CommentsFilters;


    public function filterByPornstarId(int $pornstarID) : self
    {
        $this->where('pornstar_id', $pornstarID);
        return $this;
    }

}