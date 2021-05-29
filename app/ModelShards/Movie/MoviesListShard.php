<?php

namespace App\ModelShards\Movie;

Class MoviesListShard {

    public int $totalMovies;
    public array $movies;

    public function __construct(int $totalMovies, MovieBasicDataShard ...$movies){
        $this->totalMovies = $totalMovies;
        $this->movies = $movies;
    }
}