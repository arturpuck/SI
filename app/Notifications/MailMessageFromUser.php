<?php

namespace App\Notifications;

use App\Interfaces\NotificationValidator;
use App\Interfaces\Notifier;
use App\Mail\MessageFromUser;
use Mail;

class MailMessageFromUser implements Notifier
{
   private $validator;
   private $data;

   public function __construct(NotificationValidator $validator)
   {
     $this->validator = $validator;
   }

   public function validate()
   {
      $this->data = $this->validator->validateNotification();
   }

   public function notify()
   {
      $empireEmail = config('mail.empire_email');

      try
      {
          Mail::to($empireEmail)->send(new MessageFromUser($this->data->subject, $this->data->email, $this->data->user_message));

      }
      catch(\Exception $exception)
      {
         return false;
      }

      return true;
      
   }
}