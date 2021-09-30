<?php

namespace App\Http\Controllers\Pornstars;

use Illuminate\Http\Request;
use App\Pornstar;
use App\Handlers\Pornstars\ShowPornstarProfileHandler;
use App\Handlers\Pornstars\GetPornstarCommentsHandler;
use App\Handlers\Pornstars\AddPornstarCommentHandler;
use App\Handlers\Pornstars\GetPornstarListForAdvancedSearchHandler;
use App\Repositories\PornstarsRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\Pornstars\RatePornstarRequest;
use App\Http\Requests\Pornstars\GetPornstarCommentsRequest;
use App\Http\Requests\Pornstars\AddPornstarCommentRequest;
use App\Http\Resources\Comment\CommentCollection;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Pornstars\GetPornstarRatingRequest;
use App\Handlers\Pornstars\GetPornstarRatingHandler;
use App\Handlers\Pornstars\RatePornstarHandler;

class PornstarsController extends Controller
{
    public function getPornstarsList(PornstarsRepository $pornstarsRepository){

        $pornstars = $pornstarsRepository
                     ->select(['nickname'])
                     ->alphabeticalOrderByNickName()
                     ->get();

        return view('pornstars.pornstars_list')
               ->with(['pornstarsNickNames' => $pornstars->pluck('nickname')->toArray()]);
    }

    public function showPornstarProfile(Request $request, ShowPornstarProfileHandler $pornstarProfileHandler, $nickname){

        return view('pornstars.pornstar_profile')
                   ->with(['pornstar' => $pornstarProfileHandler->handle($request)]);
    }

    public function ratePornstar(RatePornstarRequest $request, RatePornstarHandler $ratePornstarHandler){
        return $ratePornstarHandler->handle($request);
    }

    public function getPornstarComments(GetPornstarCommentsRequest $request,GetPornstarCommentsHandler $getPornstarCommentsHandler) : CommentCollection{
        return $getPornstarCommentsHandler->handle($request);
    }

    public function addPornstarComment(AddPornstarCommentRequest $request, AddPornstarCommentHandler $pornstarCommentHandler) : CommentCollection{
        return $pornstarCommentHandler->handle($request);
    }

    public function getPornstarListForAdvancedSearch(GetPornstarListForAdvancedSearchHandler $handler){
         return $handler->handle();
    }

    public function getPornstarRating(GetPornstarRatingRequest $request, GetPornstarRatingHandler $pornstarRatingHandler) : Response
    {
        return $pornstarRatingHandler->handle($request);
    }

}
