<?php

namespace App\Notifications;

use App\Mail\MessageFromUser;
use Mail;
use Illuminate\Mail\Mailable;
use App\Interfaces\Sender;

class SendEmail implements Sender
{
   private $mail;
   private $receipient;

   public function __construct(Mailable $mail, array $receipients){
     $this->mail = $mail;
     $this->receipients = $receipients;
   }

   public function send(){

      $response = ['success' => true, 'failed_emails' => []];

         foreach($this->receipients as $receipient){
            try{
               Mail::to($receipient)->send($this->mail);
            }
            catch(\Exception $exception){
                $response['success'] = false;
                dd($exception->getMessage());
                array_push($response['failed_emails'], $receipient);
            }
         }
         
      return $response;
      }
   
}