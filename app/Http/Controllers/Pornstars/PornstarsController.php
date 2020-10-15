<?php

namespace App\Http\Controllers\Pornstars;

use Illuminate\Http\Request;
use App\Pornstar;
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
}
