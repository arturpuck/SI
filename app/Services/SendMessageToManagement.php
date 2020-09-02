<?php

namespace App\Services;

use App\Notifications\SendEmail;
use App\Mail\SimpleEmail;

class SendMessageToManagement
{
	public function send(array $data){
              $data['subject'] ??= "Brak tematu";
              $data['email'] ??= "noadress@mail.com";
              $email = new SimpleEmail($data['message'], $data['subject'], $data['email']);
              $receipient = config('mail.management_email');
              $notification = new SendEmail($email,[$receipient]);
              return $notification->send();
	}
}