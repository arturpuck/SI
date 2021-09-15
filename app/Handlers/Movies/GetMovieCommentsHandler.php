<?php

namespace App\Handlers\Movies;

use App\Repositories\MovieCommentsRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Movies\GetMovieCommentsRequest;
use App\Http\Resources\Comment\CommentCollection;

class GetMovieCommentsHandler
{

  public function __construct(public MovieCommentsRepository $movieCommentsRepository)
  {
  }


  public function handle(GetMovieCommentsRequest $request): CommentCollection
  {

    $movieID = $request->get('movie_id');
    $currentPage = $request->get('page');
    $perPage = $request->get('per_page');
    $comments = $this->movieCommentsRepository->getPageList($movieID, $currentPage, $perPage);

    return new CommentCollection($comments['comments'], $comments['totalComments'], $currentPage);
  }
}
