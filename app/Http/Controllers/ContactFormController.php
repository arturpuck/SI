<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendMessageToManagementRequest;
use App\Services\Contact\SendMessageToManagement;


class ContactFormController extends Controller
{
    
    public function sendMessageFromUser(SendMessageToManagementRequest $request, SendMessageToManagement $message)
    {
       return $message->send($request->validated())['success'] ? back()->with('success','message_has_been_sen_successfully') : back()->withErrors(['unexpected_error_occured_while_sending_the_email']);
    }

     public function showContactForm()
    {
    	return view('contact')->with([
            'specificImageClass' => 'empire-background-image-'.rand(1,1)
        ]);
    }
}
