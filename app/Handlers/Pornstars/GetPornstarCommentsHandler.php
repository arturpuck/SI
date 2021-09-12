<?php

namespace App\Handlers\Pornstars;

use Illuminate\Http\Request;
use App\PornstarComment;
use App\Handlers\Pornstars\ShowPornstarProfileHandler;
use App\Repositories\PornstarCommentsRepository;
use App\Http\Requests\Pornstars\GetPornstarCommentsRequest;
use App\Http\Resources\Comment\CommentCollection;
use Symfony\Component\HttpFoundation\Response;

class GetPornstarCommentsHandler
{

    private PornstarCommentsRepository $pornstarCommentsRepository;

    public function __construct(PornstarCommentsRepository $pornstarCommentsRepository)
    {

        $this->pornstarCommentsRepository = $pornstarCommentsRepository;
    }

    public function handle(GetPornstarCommentsRequest $request): CommentCollection
    {
        $currentPage = $request->get('page');
        $commentsPerPage = $request->get('comments_per_page');

        $comments = $this->pornstarCommentsRepository
            ->with(['user'])
            ->filterByPornstarId($request->get('id'))
            ->orderByAddDate()
            ->countSelectedCommentsAndFilterByPage($currentPage, $commentsPerPage);


        return new CommentCollection($comments['comments'], $comments['total_comments'], $currentPage);
    }
}
