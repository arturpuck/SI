<?php

namespace App\Handlers\Movies;

use App\Http\Requests\Movies\AddMovieCommentRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\MovieComment;
use App\Repositories\MovieCommentsRepository;
use App\Services\ModelDataExtractors\Movie\MovieCommentsDataExtractor;

class AddMovieCommentHandler
{
    public function __construct(public MovieCommentsRepository $movieCommentsRepository)
    {
    }

    public function handle(AddMovieCommentRequest $request): CommentCollection
    {
        $movieID = $request->get('movie_id');
        $userData = \Auth::check() ? ['user_id' => \Auth::user()->id] : ['nickname' => $request->get('userNickname')];
        $commentsPerPage = $request->get('commentsPerPage');

        MovieComment::create(array_merge([
            'movie_id' => $movieID,
            'comment' => $request->get('body')
        ], $userData));

        $comments = $this->movieCommentsRepository->getPageList($movieID, 1, $commentsPerPage);

        return new CommentCollection($comments['comments'], $comments['totalComments'],1);
    }
}
