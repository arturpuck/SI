<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SendMessageToManagementRequest extends FormRequest
{
   
    public function authorize()
    {
        return true;
    }

   
    public function rules()
    {
        return [
          'email' => ['nullable','email'],
          'subject' => ['nullable','max:40'],
          'message' => ['required','min:3','max:1000']
        ];
    }

    public function messages()
    {
        return [
           'email.email' => 'Email jest nieprawidłowy',
           'subject.max' => 'Długość tematu przekracza 40 znaków',
           'message.required' => 'Nie podano treści wiadomości',
           'message.min' => 'Wiadomość musi zawierać co najmniej 3 znaki',
           'message.max' => 'Wiadomość nie może zawierać więcej niż 1000 znaków'
        ];
    }
}
