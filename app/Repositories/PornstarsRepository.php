<?php

namespace App\Repositories;
use App\Pornstar;
use App\Traits\Repositories\ElegantPagination;
use App\Services\ElegantPaginator;

Class PornstarsRepository extends BaseRepository{

    public const MODEL_NAME = Pornstar::class;

    use ElegantPagination;

    public function alphabeticalOrderByNickName(string $direction = 'asc') : PornstarsRepository{
        $this->query = $this->query->orderBy('nickname', $direction);
        return $this;
    }

    public function filterByNickName(string $nickname) : PornstarsRepository{
        $this->query = $this->query->where('nickname', $nickname);
        return $this;
    }

    public function paginate($pageNumber, $baseURL, $elementsPerPage = 100) : ElegantPaginator{
        return $this->paginateElegantly($this->query,$pageNumber, $baseURL, 'movies', $elementsPerPage);
    }
}