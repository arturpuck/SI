<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LaunchMainPageController extends Controller
{
    public function showMainPage()
    {
    	return view('mainpage')->with(['randomImageNumber' => rand(1,3)]);
    }
}
