<?php

namespace App\Http\Controllers\Prostitution;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;
use App\Handlers\Prostitution\ShowCreatorPanelHandler;

class CreateProstitutionNoticeController extends Controller
{
    public function showCreatorPanel(ShowCreatorPanelHandler $handler) : View
    {
        return $handler->handle();
    }
}
