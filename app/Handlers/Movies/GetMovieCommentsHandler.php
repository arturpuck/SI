<?php

namespace App\Handlers\Movies;

use App\Repositories\MovieCommentsRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\GetMovieCommentsRequest;


Class GetMovieCommentsHandler {

    public function __construct(public MovieCommentsRepository $movieCommentsRepository){}


    public function handle(GetMovieCommentsRequest $request) : Response {

      $movieID = $request->get('movie_id');
      $currentPage = $request->get('page');
      $perPage = $request->get('per_page'); 

      $comments = $this->movieCommentsRepository->filterByMovieID($movieID)
                                          ->chronological()
                                          ->getForPageList($currentPage, $perPage);
                                          
      return response()->json($comments, 200);
    }
    
}