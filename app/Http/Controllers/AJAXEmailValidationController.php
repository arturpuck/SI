<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\CheckIfEmailExistsRequest;

class AJAXEmailValidationController extends Controller
{
    function checkIfEmailAlreadyExists(CheckIfEmailExistsRequest $request)
    {
      return response('valid', 200)->header('Content-Type', 'text/plain');           
    }
}
