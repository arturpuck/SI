<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShowContactFormController extends Controller
{
    public function showContactForm()
    {
    	return view('contact');
    }

}
