<?php

namespace App\Handlers\Pornstars;

use Illuminate\Http\Request;
use App\PornstarComment;
use App\Handlers\Pornstars\ShowPornstarProfileHandler;
use App\Repositories\PornstarCommentsRepository;
use App\Http\Requests\Pornstars\GetPornstarCommentsRequest;
use Symfony\Component\HttpFoundation\Response;

Class GetPornstarCommentsHandler  {

    private PornstarCommentsRepository $pornstarCommentsRepository;

    public function __construct(PornstarCommentsRepository $pornstarCommentsRepository){

        $this->pornstarCommentsRepository = $pornstarCommentsRepository;
  }

    public function handle(GetPornstarCommentsRequest $request) : Response{

        $comments = $this->pornstarCommentsRepository
                            ->filterByPornstarId($request->get('id'))
                            ->orderByAddDate()
                            ->countSelectedCommentsAndFilterByPage($request->get('page'), $request->get('comments_per_page'));

       return response()->json($comments,200);
        
    }
}