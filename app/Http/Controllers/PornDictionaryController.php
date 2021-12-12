<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class PornDictionaryController extends Controller
{
    public function showDictionary() : View
    {
       return view('porn_dictionary');
    }
}
