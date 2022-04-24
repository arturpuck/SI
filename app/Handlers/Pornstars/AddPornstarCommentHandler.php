<?php

namespace App\Handlers\Pornstars;

use App\Http\Requests\Pornstars\AddPornstarCommentRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\PornstarComment;
use App\Http\Resources\Comment\CommentResource;

Class AddPornstarCommentHandler  {

    private ?int $pornstarID;
    private ?int $commentsPerPage;

    public function handle(AddPornstarCommentRequest $request) : CommentCollection | CommentResource{

        $this->pornstarID = $request->get('pornstar_id');
        $this->commentsPerPage = $request->get('commentsPerPage');
        $userData = \Auth::check() ? ['user_id' => \Auth::user()->id] : ['nickname' => $request->get('userNickname')];
        if($parentCommentID = $request->get('parentCommentID')){
            $userData['parent_comment_id'] = $parentCommentID;
        }

        $addedComment =  PornstarComment::create(array_merge([
            'pornstar_id' => $this->pornstarID,
            'comment' => $request->get('body')
        ], $userData));

       return $parentCommentID ? new CommentResource($addedComment) : $this->getLatestComments();

    }

    private function getLatestComments() : CommentCollection
    {
        $comments = PornstarComment::query()
                           ->filterByPornstarID($this->pornstarID)
                           ->filterByDirectComments()
                           ->getForPageList(1, $this->commentsPerPage);

        return new CommentCollection($comments['comments'], $comments['totalComments'], 1);
    }
}