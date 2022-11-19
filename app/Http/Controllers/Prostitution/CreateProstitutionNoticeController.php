<?php

namespace App\Http\Controllers\Prostitution;

use App\Http\Controllers\Controller;
use Illuminate\View\View;
use Illuminate\Http\JsonResponse;
use App\Handlers\Prostitution\ShowCreatorPanelHandler;
use App\Handlers\Prostitution\GetFormOptionsHandler;

class CreateProstitutionNoticeController extends Controller
{
    public function showCreatorPanel(ShowCreatorPanelHandler $handler) : View
    {
        return $handler->handle();
    }

    public function getNoticeFormOptions(GetFormOptionsHandler $handler) : JsonResponse
    {
        return $handler->handle();
    }
}
