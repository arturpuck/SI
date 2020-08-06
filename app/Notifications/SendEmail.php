<?php

namespace App\Notifications;

use App\Mail\MessageFromUser;
use Mail;
use Illuminate\Mail\Mailable;

class SendEmail
{
   private $mail;
   private $receipient;

   public function __construct(Mailable $mail, array $receipients)
   {
     $this->mail = $mail;
     $this->receipients = $receipients;
   }

   public function notify()
   {
      $response = ['success' => true, 'failed_emails' => []];

         foreach($this->receipients as $receipient)
         {
            try
            {
               Mail::to($receipient)->send($this->mail);
            }
            catch(\Exception $exception)
            {
                $response['success'] = false;
                array_push($response['failed_emails'], $receipient);
            }
         }
         
      return $response;
      }
   
}