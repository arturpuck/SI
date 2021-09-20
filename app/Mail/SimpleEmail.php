<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SimpleEmail extends Mailable
{
    use Queueable, SerializesModels;

    private string $sender;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public string $msg, string $subject = "Brak tematu", public string $userEmail = 'none')
    {
       $this->sender = config('mail.management_email');
       $this->subject = $subject;
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
