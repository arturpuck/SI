<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use App\Handlers\News\ShowNewsByPageHandler;
use App\Http\Requests\News\ShowNewsByPageRequest;

class NewsController extends Controller
{
    public function showNews(ShowNewsByPageRequest $request, ShowNewsByPageHandler $handler) : View
    {
         return $handler->handle($request);
    }
}
