<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendMessageToManagementRequest;
use App\Services\SendMessageToManagement;


class ContactFormController extends Controller
{
    
    public function sendMessageFromUser(SendMessageToManagementRequest $request, SendMessageToManagement $message)
    {
       
       return $message->send($request->validated())['success'] ? back()->with('success','Pomyślnie wysłano wiadomość') : back()->withErrors(['Nieoczekiwany błąd podczas wysyłania wiadomości']);
    }

     public function showContactForm()
    {
    	return view('contact');
    }
}
