<?php

namespace App\Handlers\Movies;

use App\Http\Resources\Movie\MovieCollection;
use App\Movie;

use App\Repositories\MoviesRepository;
use App\Services\ModelDataExtractors\Movie\MovieDataExtractor;


class GetSimilarMoviesHandler
{

    public function __construct(public MoviesRepository $moviesRepository)
    {
    }

    public function handle(Movie $movie): MovieCollection
    {

        $movies = $this->moviesRepository->withBasicPornstarList()
            ->filterBySimilarMovies($movie, 25)
            ->get()
            ->unique('id'); //this actually sucks, the sql query should not return the same rows twice which is actaully happening sometimes right now - later fix
            //->all();

      //  $moviesList = MovieDataExtractor::getMoviesBasicData(...$movies);
      //  return response()->json($moviesList, 200);
      return new MovieCollection($movies, $movies->count(),1);
    }
}
