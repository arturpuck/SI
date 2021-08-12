<?php

namespace App\Http\Controllers;
use App\Repositories\NewsRepository;

use Illuminate\Http\Request;

class LaunchMainPageController extends Controller
{
    public function showMainPage(NewsRepository $newsRepository)
    {
       
        $news = $newsRepository
                ->filterByPage(1)
                ->chronological()
                ->get();
        
        return view('mainpage')->with([
            'customBodyClass' => 'empire-background-image-'.rand(1,4),
            'news' => $news
        ]);
    }

    public function test()
    {
       return view('test');
    }
}
