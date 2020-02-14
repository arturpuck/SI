<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LaunchMainPageController extends Controller
{
    public function showMainPage()
    {
    	$randomImageNumber = rand(1,3);
    	return view('mainpage')->with(['randomImageNumber' => $randomImageNumber]);
    }
}
