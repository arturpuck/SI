<?php

namespace App\Handlers\Pornstars;

use App\Handlers\Pornstars\ShowPornstarProfileHandler;
use App\Http\Requests\Pornstars\AddPornstarCommentRequest;
use App\Repositories\PornstarCommentsRepository;
use App\Http\Resources\Comment\CommentCollection;
use App\PornstarComment;

Class AddPornstarCommentHandler  {

    private PornstarCommentsRepository $pornstarCommentsRepository;

    public function __construct(PornstarCommentsRepository $pornstarCommentsRepository){

          $this->pornstarCommentsRepository = $pornstarCommentsRepository;
    }

    public function handle(AddPornstarCommentRequest $request) : CommentCollection{

       $this->pornstarCommentsRepository->storeComment($request);
       $this->pornstarCommentsRepository->resetQuery();

       $lastComments = $this->pornstarCommentsRepository
                            ->with(['user'])
                            ->filterByPornstarId($request->get('pornstar_id'))
                            ->orderByAddDate()
                            ->countSelectedCommentsAndFilterByPage(1);

        return new CommentCollection($lastComments['comments'], $lastComments['total_comments'], 1);
    }
}