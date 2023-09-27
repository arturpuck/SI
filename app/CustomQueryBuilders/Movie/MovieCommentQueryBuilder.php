<?php

namespace App\CustomQueryBuilders\Movie;

use Illuminate\Database\Eloquent\Builder;
use App\CustomQueryBuilders\Traits\CommonQueryBuilderActions;
use App\CustomQueryBuilders\Traits\CommentsFilters;

class MovieCommentQueryBuilder extends Builder
{

    use CommonQueryBuilderActions, CommentsFilters;

    public function filterByMovieID(int $movieID): self
    {
        $this->where('movie_id', $movieID);
        return $this;
    }

}
