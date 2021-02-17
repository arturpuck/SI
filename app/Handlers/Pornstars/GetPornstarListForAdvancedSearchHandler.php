<?php

namespace App\Handlers\Pornstars;

use App\Repositories\PornstarsRepository;
use Symfony\Component\HttpFoundation\Response;


Class GetPornstarListForAdvancedSearchHandler  {

    private PornstarsRepository $pornstarsRepository;

    public function __construct(PornstarsRepository $pornstarsRepository){

          $this->pornstarsRepository = $pornstarsRepository;
    }

    public function handle(){

     $pornstars =  $this->pornstarsRepository
                        ->select(['nickname'])
                        ->alphabeticalOrderByNickName()
                        ->get();

    return response()->json($pornstars->pluck('nickname'),200);
    }
}