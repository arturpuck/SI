<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Validators\MoviePropertiesValidator;
use App\Http\Resources\Movie\MovieCollection;

Class AdvancedSearchHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(Request $request) {

        $validationResult = MoviePropertiesValidator::validate($request);

        if($validationResult === true){

            $page = $request->get('page');

            $this->moviesRepository->withBasicPornstarList();
            $filters = $request->all();
            unset($filters['page']);
            foreach($filters as $fieldName => $value){

                $methodName = "filterBy".ucfirst($fieldName);
                $this->moviesRepository->$methodName($value);
            }
           
            $totalMatchingMovies = $this->moviesRepository->count();
            
            $movies = $this->moviesRepository->filterByPage($page);
            $movies = $this->moviesRepository->get();
            return new MovieCollection($movies, $totalMatchingMovies,$page);
        }
        else{
            return $validationResult;
        }
    }
    

}