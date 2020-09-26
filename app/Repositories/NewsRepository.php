<?php

namespace App\Repositories;
use App\News;

Class NewsRepository extends BaseRepository{

    public const MODEL_NAME = News::class;

    public function filterByPage(int $page, $perPage = 10) : NewsRepository{
       $this->query = $this->query
            ->offset(($page - 1) * $perPage)
            ->limit($perPage);
       return $this;
    }

    public function chronological() : NewsRepository{
        $this->query = $this->query->orderBy('added_at', 'desc');
        return $this;
    }
}