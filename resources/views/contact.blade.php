@extends('layouts.base')

@section('title')
  Kontakt z obsługą Sex-Imperium
@endsection

@section('file-with-styles')
 {{asset('css/contact.css')}}
@endsection

@section('content')
@includeWhen(Session::has('success'), 'components.success_information', ['message' => Session::get('success')])

   @error_list
   @enderror_list

	<form method="POST" class="contact-form">
		@csrf
		<div class="form-description">Aby skontaktować się z obsługą prosimy o skorzystanie z poniższego formularza.</div>

        @single_line_labeled_text_input(['description' => "Email :", "name" => "email", "type" => "email", 'verificationIcons' => true, 'initialValue' => old('email') ? old('email') : '', 'showConfirmation' => ($errors->any() and !$errors->has('email')), 'placeholder' => 'niewymagany', 'showError' => $errors->has('email')])
		@endsingle_line_labeled_text_input

		@single_line_labeled_text_input(['description' => "Temat :", "name" => "subject", "type" => "text", 'verificationIcons' => true, 'placeholder' => 'niewymagany', 'initialValue' => old('subject') ? old('subject') : '', 'showError' => $errors->has('subject'), 'showConfirmation' => ($errors->any() and !$errors->has('subject'))])
		@endsingle_line_labeled_text_input

		<label for="user-message" class="message-label">Treść wiadomości</label>
		<div class="icon-wraper">
			 @includeWhen($errors->has('message'), 'components.icons.icon_error', ['showIconError' => true])
			 @includeWhen($errors->any() and !$errors->has('message'), 'components.icons.icon_confirmation', ['showIconConfirmation' => true])
		<textarea min="3" max="1000" placeholder="wymagana : 3 - 1000 znaków" max="1000" required id="user-message" name="message" rows="10" class="user-message @if($errors->has('message'))input-with-error @elseif($errors->any() and !$errors->has('message')) input-correct-value @endif">{{old('message') ? old('message') : ''}}</textarea>
		</div>
		<submit-button>Wyślij</submit-button>
	</form>
@endsection

@section('scripts')
<script src="{{asset('js/contact.js')}}"></script> 
@endsection