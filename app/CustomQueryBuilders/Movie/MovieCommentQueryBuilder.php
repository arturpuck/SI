<?php

namespace App\CustomQueryBuilders\Movie;

use Illuminate\Database\Eloquent\Builder;
use App\CustomQueryBuilders\Traits\CommonQueryBuilderActions;

class MovieCommentQueryBuilder extends Builder
{

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

    public function getForPageList(int $pageNumber, int $perPage = 10): array
    {
        $this->chronological();
        $totalComments = $this->count();

        $comments = $this->with(['user'])
            ->filterByPage($pageNumber, $perPage)
            ->get();

        return compact('totalComments', 'comments');
    }

    public function filterByDirectComments(): self
    {
        $this->whereDoesntHave('parentComment');
        return $this;
    }

    public function withLastChildrenComments(int $numberOfCommentsToFetch = 5): self
    {
        $this->with(['childComments.childComments.childComments' =>
        fn (Builder $query) => $query->chronological()
            ->take($numberOfCommentsToFetch)]);
        return $this;
    }

    public function filterByParentId(int $parentId): self
    {
        $this->where('parent_comment_id', $parentId);
        return $this;
    }

    public function filterByLatestDirectComments(int $ammountComments): self
    {
        $this->filterByDirectComments();
        $this->orderBy('created_at', 'desc');
        $this->take($ammountComments);
        return $this;
    }
}
