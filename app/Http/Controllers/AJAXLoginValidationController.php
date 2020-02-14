<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;

class AJAXLoginValidationController extends Controller
{
    function checkIfLoginAlreadyExists($login)
    {
        try
        {
            if(User::where('login', '=', $login)->exists())
            {
        	     return response('invalid', 200)
                      ->header('Content-Type', 'text/plain');
            }
            else
            {
        	   return response('valid', 200)
                   ->header('Content-Type', 'text/plain');
            }
        }
        catch(\Exception $error)
        {
        	return response($error->getMessage(), 400);
        }
        
    }
}
