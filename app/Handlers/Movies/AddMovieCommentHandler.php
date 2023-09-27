<?php

namespace App\Handlers\Movies;

use App\Http\Requests\Movies\AddMovieCommentRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\MovieComment;
use App\Http\Resources\Comment\CommentResource;

class AddMovieCommentHandler
{

    private ?int $movieID;
    private ?int $commentsPerPage;

    public function handle(AddMovieCommentRequest $request): Commentresource | CommentCollection
    {
        $this->movieID = $request->get('movie_id');
        $this->commentsPerPage = $request->get('commentsPerPage');
        $userData = \Auth::check() ? ['user_id' => \Auth::user()->id] : ['nickname' => $request->get('userNickname')];
        if($parentCommentID = $request->get('parentCommentID')){
            $userData['parent_comment_id'] = $parentCommentID;
        }

        $addedComment =  MovieComment::create(array_merge([
            'movie_id' => $this->movieID,
            'comment' => $request->get('body')
        ], $userData));

       return $parentCommentID ? new CommentResource($addedComment) : $this->getLatestComments();
    }

    private function getLatestComments() : CommentCollection
    {
        $comments = MovieComment::query()
                           ->filterByDirectComments()
                           ->filterByMovieID($this->movieID)
                           ->getForPageList(1, $this->commentsPerPage);

        return new CommentCollection($comments['comments'], $comments['totalComments'], 1);
    }

}
