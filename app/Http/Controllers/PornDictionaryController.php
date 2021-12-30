<?php

namespace App\Http\Controllers;

use App\Handlers\PornDictionary\ShowPornDictionaryHandler;
use App\Http\Requests\PornDictionary\ShowPornDictionaryRequest;
use Illuminate\Http\Request;
use Illuminate\View\View;


class PornDictionaryController extends Controller
{
    public function showDictionary(ShowPornDictionaryRequest $request, ShowPornDictionaryHandler $handler) : View
    {
        return $handler->handle($request);
    }
}
