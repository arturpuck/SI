<?php

namespace App\Handlers\Movies;

use App\Http\Requests\Movies\GetMovieCommentsRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\MovieComment;

class GetMovieCommentsHandler
{

  private ?int $movieID;
  private int $currentPage;
  private int $perPage;
  private ?int $parrentCommentId;

  public function handle(GetMovieCommentsRequest $request): CommentCollection
  {
    $this->movieID = $request->get('movie_id');
    $this->currentPage = $request->get('page');
    $this->perPage = $request->get('per_page');

    if ($this->parrentCommentId = $request->get('parent_comment_id')) {
      $comments = $this->getChildComments();
    } else {
      $comments = $this->getRootComments();
    }

    return new CommentCollection($comments['comments'], $comments['totalComments'], $this->currentPage);
  }

  private function getChildComments(): array
  {
    return MovieComment::query()
      ->filterByParentId($this->parrentCommentId)
      ->getForPageList($this->currentPage, $this->perPage);
  }

  private function getRootComments(): array
  {
    return MovieComment::query()
      ->filterByDirectComments()
      ->filterByMovieID($this->movieID)
      ->getForPageList($this->currentPage, $this->perPage);
  }
}
