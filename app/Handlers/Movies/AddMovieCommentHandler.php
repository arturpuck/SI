<?php

namespace App\Handlers\Movies;

use App\Http\Requests\Movies\AddMovieCommentRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\MovieComment;

class AddMovieCommentHandler
{

    public function handle(AddMovieCommentRequest $request): CommentCollection
    {
        $movieID = $request->get('movie_id');
        $userData = \Auth::check() ? ['user_id' => \Auth::user()->id] : ['nickname' => $request->get('userNickname')];
        $commentsPerPage = $request->get('commentsPerPage');
        if($parentCommentID = $request->get('parentCommentID')){
            $userData['parent_comment_id'] = $parentCommentID;
        }

        MovieComment::create(array_merge([
            'movie_id' => $movieID,
            'comment' => $request->get('body')
        ], $userData));

        $comments = MovieComment::query()->getPageList($movieID, 1, $commentsPerPage);
        return new CommentCollection($comments['comments'], $comments['totalComments'],1);
    }
}
