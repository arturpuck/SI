<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Validators\MoviesAdvancedSearchValidator;
use App\Http\Resources\Movie\MovieCollection;

Class AdvancedSearchHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(Request $request) {

        $validationResult = MoviesAdvancedSearchValidator::validate($request);

        if($validationResult === true){

            $page = $request->get('page');
            $request->request->remove('page');

            $this->moviesRepository->withBasicPornstarList();

            foreach($request->all() as $fieldName => $value){

                $methodName = "filterBy".ucfirst($fieldName);
                $this->moviesRepository->$methodName($value);
            }
           
            $totalMatchingMovies = $this->moviesRepository->count();
            
            $this->moviesRepository->filterByPage($page);
            $movies = $this->moviesRepository->get();
            return new MovieCollection($movies, $totalMatchingMovies,$page);
        }
        else{
            return $validationResult;
        }
    }
    

}