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
        $result = [];

       $pornstarComments = PornstarComment::where('pornstar_id', $pornstarID)
                                            ->orderBy('created_at', 'desc')
                                            ->get();

        
        $totalComments = $pornstarComments->count();
        $result['total_comments'] = $totalComments;
        
        $pornstarComments = $pornstarComments->forPage($pageNumber,$commentsLimit);
        $result['comments'] = $pornstarComments->toArray();

        return response()->json($result);             
        
    }
}