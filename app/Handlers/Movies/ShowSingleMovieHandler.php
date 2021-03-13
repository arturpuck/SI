<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Validators\MoviesAdvancedSearchValidator;


Class ShowSingleMovieHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(string $slug){

       $movie = $this->moviesRepository->filterBySlug($slug)
                                        ->withAllRelations()
                                        ->get()
                                        ->first();
       ++$movie->views;
       $movie->save();
       
       $similarMovies = $this->moviesRepository->filterBySimilarMovies($movie)
                                                ->get();
        dd($similarMovies);
    }
    

}