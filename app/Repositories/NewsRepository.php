<?php

namespace App\Repositories;

Class NewsRepository extends BaseRepository{

    public const MODEL_NAME = 'news';

    public function filterByPage(int $page, $newsPerPage = 10) : NewsRepository{
       $this->query = $this->query
            ->offset(($page - 1) * $newsPerPage)
            ->limit($newsPerPage);
       return $this;
    }

    public function chronological() : NewsRepository{
        $this->query = $this->query->orderBy('added_at', 'desc');
        return $this;
    }
}