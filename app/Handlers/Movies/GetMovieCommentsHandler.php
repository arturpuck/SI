<?php

namespace App\Handlers\Movies;

use App\Repositories\MovieCommentsRepository;
use App\Http\Requests\Movies\GetMovieCommentsRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\MovieComment;

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
    $comments = MovieComment::query()
                              ->filterByDirectComments()
                              ->getPageList($movieID, $currentPage, $perPage);

    return new CommentCollection($comments['comments'], $comments['totalComments'], $currentPage);
  }
}
