<?php

namespace App\Handlers\Pornstars;

use App\Handlers\Pornstars\ShowPornstarProfileHandler;
use App\Http\Requests\Pornstars\AddPornstarCommentRequest;
use App\Repositories\PornstarCommentsRepository;
use Symfony\Component\HttpFoundation\Response;
use App\PornstarComment;

Class AddPornstarCommentHandler  {

    private PornstarCommentsRepository $pornstarCommentsRepository;

    public function __construct(PornstarCommentsRepository $pornstarCommentsRepository){

          $this->pornstarCommentsRepository = $pornstarCommentsRepository;
    }

    public function handle(AddPornstarCommentRequest $request) : Response{

       $this->pornstarCommentsRepository->storeComment($request);
       $this->pornstarCommentsRepository->resetQuery();

       $lastComments = $this->pornstarCommentsRepository
                            ->filterByPornstarId($request->get('pornstar_id'))
                            ->orderByAddDate()
                            ->getTotalCommentsAndSelectByPage(1);

       return response()->json($lastComments,200);
    }
}