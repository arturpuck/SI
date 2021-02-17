<?php

namespace App\Handlers\Movies;

use App\Repositories\MoviesRepository;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Helpers\Validators\MoviesAdvancedSearchValidator;


Class AdvancedSearchHandler {

    public function __construct(private MoviesRepository $moviesRepository){}

    public function handle(Request $request):Response{

        $validationResult = MoviesAdvancedSearchValidator::validate($request);

        if($validationResult === true){

            $page = $request->get('page');
            $request->request->remove('page');

            $this->moviesRepository->select([
                'movies.id',
                'title',
                'views',
                'created_at',
                'is_translated_to_polish',
                'votes_count',
                'votes_summary',
                'duration'
            ])->withBasicPornstarList();

            foreach($request->all() as $fieldName => $value){

                $methodName = "filterBy".ucfirst($fieldName);
                $this->moviesRepository->$methodName($value);
            }
           
            $totalMatchingMovies = $this->moviesRepository->count();
            
            $this->moviesRepository->filterByPage($page);
            $movies = $this->moviesRepository->get();
            return response()->json(['totalMovies' => $totalMatchingMovies, 'movies' => $movies],200);
        }
        else{
            return $validationResult;
        }
    }
    

}