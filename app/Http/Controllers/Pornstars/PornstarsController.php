<?php

namespace App\Http\Controllers\Pornstars;

use Illuminate\Http\Request;
use App\Pornstar;
use App\Handlers\Pornstars\PornstarProfileHandler;
use App\Repositories\PornstarsRepository;
use App\Http\Controllers\Controller;


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

    public function showPornstarProfile(Request $request, PornstarProfileHandler $pornstarProfileHandler){

        return view('pornstars.pornstar_profile')
                   ->with(['pornstar' => $pornstarProfileHandler->handle($request)]);
    }
}
