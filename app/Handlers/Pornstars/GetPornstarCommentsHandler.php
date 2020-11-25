<?php

namespace App\Handlers\Pornstars;

use Illuminate\Http\Request;
use App\PornstarComment;
use App\Handlers\Pornstars\ShowPornstarProfileHandler;
use App\Http\Requests\Pornstars\GetPornstarCommentsRequest;
use Symfony\Component\HttpFoundation\Response;

Class GetPornstarCommentsHandler  {

    public function handle(GetPornstarCommentsRequest $request) : Response{

        $pornstarID = $request->get('id');
        $commentsLimit = $request->get('comments_per_page');
        $pageNumber = $request->get('page');
        $offset = ($pageNumber - 1) * $commentsLimit;

       $pornstarComments = PornstarComment::where('pornstar_id', $pornstarID)
                                            ->orderBy('created_at', 'desc')
                                            ->skip($offset)
                                            ->take($commentsLimit)
                                            ->get();

        $totalComments = PornstarComment::count();

        return response()->json($pornstarComments->toArray());             
        
    }
}