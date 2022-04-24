<?php

namespace App\CustomQueryBuilders\Traits;

Trait CommentsFilters
{
    public function chronological(): self
    {
        $this->orderBy('created_at', 'desc');
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

    public function filterByParentId(int $parentId): self
    {
        $this->where('parent_comment_id', $parentId);
        return $this;
    }
}