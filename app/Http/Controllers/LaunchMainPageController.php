<?php

namespace App\Http\Controllers;

use App\Handlers\MainPageHandler;

class LaunchMainPageController extends Controller
{
    public function showMainPage(MainPageHandler $mainPageHandler)
    {
       return $mainPageHandler->handle();
    }

}
