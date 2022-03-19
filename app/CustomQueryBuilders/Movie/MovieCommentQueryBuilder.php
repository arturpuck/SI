<?php

namespace App\CustomQueryBuilders\Movie;

use Illuminate\Database\Eloquent\Builder;
use App\CustomQueryBuilders\Traits\CommonQueryBuilderActions;

Class MovieCommentQueryBuilder extends Builder {

    use CommonQueryBuilderActions;

    public function chronological(): self
    {
        $this->orderBy('created_at', 'desc');
        return $this;
    }

    public function filterByMovieID(int $movieID): self
    {
        $this->where('movie_id', $movieID);
        return $this;
    }

    public function getPageList(int $movieID, int $pageNumber, int $perPage = 10): array
    {
        $totalComments = $this->chronological()
            ->filterByMovieID($movieID)
            ->count();

        $comments = $this->with(['user'])
            ->filterByPage($pageNumber, $perPage)
            ->get();
        
        return compact('totalComments', 'comments');
    }

    public function filterByDirectComments() : self
    {
        $this->whereDoesntHave('parentComment');
        return $this;
    }
}