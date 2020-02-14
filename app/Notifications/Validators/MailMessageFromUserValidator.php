<?php

namespace App\Notifications\Validators;

use App\Interfaces\NotificationValidator;
use Illuminate\Http\Request;

class MailMessageFromUserValidator implements NotificationValidator
{
	private $data;

	public function __construct(Request $request)
	{
       $this->data = $request;
	}
	
	public function validateNotification()
	{
       $this->data->validate([
          'email' => 'max:30',
          'subject' => 'max:30',
          'user-message' => 'required|min:3|max:1000'
       ]);

       return $this->data;
	}
}