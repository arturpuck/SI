<?php

namespace App\Handlers\Pornstars;

use App\Http\Requests\Pornstars\GetPornstarCommentsRequest;
use App\Http\Resources\Comment\CommentCollection;
use App\PornstarComment;

class GetPornstarCommentsHandler
{
    private ?int $pornstarID;
    private int $currentPage;
    private int $commentsPerPage;
    private ?int $parrentCommentId;

    public function handle(GetPornstarCommentsRequest $request): CommentCollection
    {
        $this->currentPage = $request->get('page');
        $this->commentsPerPage = $request->get('comments_per_page');
        $this->pornstarID = $request->get('pornstar_id');

        if ($this->parrentCommentId = $request->get('parent_comment_id')) {
            $comments = $this->getChildComments();
        } else {
            $comments = $this->getRootComments();
        }

        return new CommentCollection($comments['comments'], $comments['totalComments'], $this->currentPage);
    }

    private function getChildComments(): array
    {
        return PornstarComment::query()
            ->filterByParentId($this->parrentCommentId)
            ->getForPageList($this->currentPage, $this->commentsPerPage);
    }

    private function getRootComments(): array
    {
        return PornstarComment::query()
            ->filterByDirectComments()
            ->filterByPornstarID($this->pornstarID)
            ->getForPageList($this->currentPage, $this->commentsPerPage);
    }
}
