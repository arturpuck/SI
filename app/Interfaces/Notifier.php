<?php

namespace App\Interfaces;

interface Notifier
{
	public function validate();
	public function notify();
}

