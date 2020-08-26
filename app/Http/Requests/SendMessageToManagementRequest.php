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
           'email.email' => 'email_is_invalid',
           'subject.max' => 'subject_length_exceeds_40_characters',
           'message.required' => 'message_is_missing',
           'message.min' => 'message_must_contain_at_least_3_characters',
           'message.max' => 'message_must_not_exceed_1000_characters'
        ];
    }
}
