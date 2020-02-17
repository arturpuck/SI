<?php

namespace App\Notifications\Validators;

use Illuminate\Support\Facades\Validator;

class NotificationValidator
{
	private $data;
	private $rules;

	public function __construct(array $data, array $rules)
	{
        $this->data = $data;
        $this->rules = $rules;
	}

	public function validate()
	{
        $validator = Validator::make($data,$rules)
	}
}