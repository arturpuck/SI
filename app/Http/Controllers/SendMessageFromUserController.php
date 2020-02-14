<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Constans\NotificationType;
use App\Factories\NotificationsFactory;

class SendMessageFromUserController extends Controller
{
    private $notification;

    public function __construct(NotificationsFactory $notificationFactory)
    {
       $this->notification = $notificationFactory->getInstance(NotificationType::SEND_MAIL_TO_OWNER);
    }

    public function sendMessageFromUser()
    {
       $this->notification->validate();
       $success = $this->notification->notify();
       dd($success);
       return redirect()->back()->with('success', $success);
    }
}
