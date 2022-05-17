<?php

namespace App\Http\Controllers\Employees;

use Illuminate\View\View;
use App\Http\Controllers\Controller;
use App\Handlers\Employees\ShowEmployeePanelHandler;
use App\Handlers\Employees\AddMovieForAcceptationHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class MoviesAddedByEmployeeController extends Controller
{
    public function showMovieEditionPanel(ShowEmployeePanelHandler $handler) : View
    {
        return $handler->handle();
    }

    public function addMovieForAcceptation(AddMovieForAcceptationHandler $handler, Request $request) : JsonResponse
    {
       return $handler->handle($request);
    }
}
