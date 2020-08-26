<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SimpleEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $sender;
    private $msg;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(String $msg, String $subject = "Brak tematu", String $sender = "undefined@email.com")
    {
        $this->subject = $subject;
        $this->sender = $sender;
        $this->msg = $msg;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->from($this->sender)
                    ->view('mails.simple_email')
                    ->subject($this->subject)
                    ->with(['messageContent' => $this->msg]);
    }
}
