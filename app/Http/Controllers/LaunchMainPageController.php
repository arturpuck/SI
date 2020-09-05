<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LaunchMainPageController extends Controller
{
    public function showMainPage()
    {
    	return view('mainpage')->with([
            'specificImageClass' => 'mainpage-background-image-'.rand(1,4)
        ]);
    }
}
