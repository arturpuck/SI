<?php

namespace App\Services;

use Throwable;
use Illuminate\Support\Facades\Log;

Class FailureLogger 
{
   public static function logToFile(Throwable $failure) : void 
   {
      $message = $failure->getMessage();
      $file = $failure->getFile();
      $line = $failure->getLine();
      $code = $failure->getCode();
      $trace = $failure->getTrace();

      $errorMessage = "Messge : $message".PHP_EOL.
                      "File : $file".PHP_EOL.
                      "Line : $line".PHP_EOL.
                      "Code : $code".PHP_EOL;

     Log::error($errorMessage, $trace);
   }
}