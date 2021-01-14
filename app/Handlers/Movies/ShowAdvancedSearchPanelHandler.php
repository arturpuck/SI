<?php

namespace App\Handlers\Movies;

use App\Repositories\PornstarsRepository;
use Symfony\Component\HttpFoundation\Response;


Class ShowAdvancedSearchPanelHandler  {

    private PornstarsRepository $pornstarsRepository;

    public function __construct(PornstarsRepository $pornstarsRepository){

          $this->pornstarsRepository = $pornstarsRepository;
    }

    public function handle(){

     $pornstars =  $this->pornstarsRepository
                        ->select(['nickname'])
                        ->alphabeticalOrderByNickName()
                        ->get();

    return view('movies.advanced_search')->with([
                                            'title' => 'porn_movies_advanced_search',
                                            'description' => 'advanced_search_description',
                                            'pornstars' => $pornstars
                                         ]);
    }
}