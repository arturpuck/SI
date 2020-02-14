<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Symfony\Component\HttpFoundation\Response;

class AJAXEmailValidationController extends Controller
{
    function checkIfEmailAlreadyExists($email)
    {
        try
        {
            if(User::where('email', '=', $email)->exists())
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
