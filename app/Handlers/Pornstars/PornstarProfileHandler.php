<?php

namespace App\Handlers\Pornstars;

use App\Handlers\Handler;
use Illuminate\Http\Request;
use App\Pornstar;
use App\Handlers\Pornstars\PornstarProfileHandler;
use App\Repositories\PornstarsRepository;

Class PornstarProfileHandler extends Handler {

   private PornstarsRepository $pornstarsRepository;

    public function __construct(PornstarsRepository $pornstarsRepository){
         $this->pornstarsRepository = $pornstarsRepository;
    }

    public function handle(Request $request){

        $pornstarNickName = str_replace('_', ' ', $request->route('nickname'));
        $pornstar = $this->pornstarsRepository
                     ->filterByNickname($pornstarNickName)
                     ->get();

        if($pornstar->count() !== 1){
            abort(404);
        } 
        
        return $pornstar->first();
    }
}