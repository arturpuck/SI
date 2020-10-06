<?php

namespace App\Repositories;
use App\Movie;
use App\Traits\Repositories\ElegantPagination;
use App\Services\ElegantPaginator;

Class MoviesRepository extends BaseRepository{
   
    public const MODEL_NAME = Movie::class;

    use ElegantPagination;

    public function chronological() : MoviesRepository{
        $this->query = $this->query->orderBy('created_at', 'desc');
        return $this;
    }

    public function paginate($pageNumber, $baseURL, $elementsPerPage = 100) : ElegantPaginator{
        return $this->paginateElegantly($this->query,$pageNumber, $baseURL, 'movies', $elementsPerPage);
    }

    public function select(array $columnNames): MoviesRepository{
    foreach($columnNames as $columnName){
            $this->query = $this->query->addSelect($columnName);
    }

        return $this;
    }
}