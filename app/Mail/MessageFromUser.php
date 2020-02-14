<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MessageFromUser extends Mailable
{
    use Queueable, SerializesModels;
    private $message;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subject,$from, $message)
    {
        $this->subject = empty($subject) ? "Brak tematu" : $subject;
        $this->from = empty($from) ? "Nie podano emaila" : $from;
        $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->from($this->from)
                    ->view('mail.message_from_user')
                    ->subject($this->subject)
                    ->with(['messageContent' => $this->message]);
    }
}
