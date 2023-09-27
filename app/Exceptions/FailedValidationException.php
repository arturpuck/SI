<?php

namespace App\Exceptions;

use Exception;

class FailedValidationException extends Exception
{
    public function __construct(protected array $errors){}

    public function getErrorsList() : array {
        return $this->errors;;
    }
}

//If you wander why I creaated thiss exception class it is becaause I cannot always use custom request or use laravel validation