<?php

namespace App\Factories;

use App\Constans\NotificationType;
use App\Interfaces\Notifier;
use App\Notifications\Validators\MailMessageFromUserValidator;
use App\Notifications\MailMessageFromUser;


class NotificationsFactory
{
	public function getInstance($notificationType) : Notifier
	{
         switch($notificationType)
         {
         	case NotificationType::SEND_MAIL_TO_OWNER:
              return $this->buildOwnerMailNotification();
         	break;
         }
	}

	private function buildOwnerMailNotification()
	{
        $request = request();
        $validator =  new MailMessageFromUserValidator($request);
        return new MailMessageFromUser($validator,$request);
	}
}