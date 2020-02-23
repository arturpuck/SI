<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\AJAXLoginValidationRequest;

class AJAXLoginValidationController extends Controller
{
    function checkIfLoginAlreadyExists(AJAXLoginValidationRequest $request)
    {
       return response('valid', 200)->header('Content-Type', 'text/plain');    
    }
}
