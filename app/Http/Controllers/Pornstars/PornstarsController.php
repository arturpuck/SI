<?php

namespace App\Http\Controllers\Pornstars;

use Illuminate\Http\Request;
use App\Pornstar;
use App\Handlers\Pornstars\ShowPornstarProfileHandler;
use App\Handlers\Pornstars\GetPornstarCommentsHandler;
use App\Repositories\PornstarsRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\Pornstars\RatePornstarRequest;
use App\Http\Requests\Pornstars\GetPornstarCommentsRequest;
use Symfony\Component\HttpFoundation\Response;


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

    public function showPornstarProfile(Request $request, ShowPornstarProfileHandler $pornstarProfileHandler){

        return view('pornstars.pornstar_profile')
                   ->with(['pornstar' => $pornstarProfileHandler->handle($request)]);
    }

    public function ratePornstar(RatePornstarRequest $request){
        return \Auth::user()->ratePornstar($request);
    }

    public function getPornstarComments(GetPornstarCommentsRequest $request,GetPornstarCommentsHandler $getPornstarCommentsHandler) : Response{
        return $getPornstarCommentsHandler->handle($request);
    }
}
