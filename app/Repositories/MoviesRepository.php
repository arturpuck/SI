<?php

namespace App\Repositories;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Movie;

Class MoviesRepository extends BaseRepository{
   
    public const MODEL_NAME = Movie::class;

    public function chronological() : MoviesRepository{
        $this->query = $this->query->orderBy('created_at', 'desc');
        return $this;
    }

    public function paginate($moviesPerPage = 100) : LengthAwarePaginator{
        return $this->query->paginate($moviesPerPage);
    }

    public function select(array $columnNames): MoviesRepository{
        foreach($columnNames as $columnName){
            $this->query = $this->query->addSelect($columnName);
        }

        return $this;
    }
}