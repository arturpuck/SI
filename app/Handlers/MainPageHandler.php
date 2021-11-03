<?php

namespace App\Handlers;

use Illuminate\View\View;
use App\Repositories\NewsRepository;
use App\Repositories\MoviesRepository;

Class MainPageHandler 
{
    public function __construct(private NewsRepository $newsRepository, private MoviesRepository $moviesRepository){}

     public function handle() : View
     {
        $news = $this->newsRepository
                    ->filterByPage(1)
                    ->chronological()
                    ->get();

        $latestMovies = $this->moviesRepository
                        ->withBasicPornstarList()
                        ->filterByAmmountOfTheLatest(15)
                        ->get();
        
        return view('mainpage')->with([
            'customBodyClass' => 'empire-background-image-'.rand(1,4),
            'news' => $news,
            'latestMovies' => $latestMovies
        ]); 
     }
}