<?php

namespace App\Handlers\User;

use App\Http\Requests\User\CheckIfEmailExistsRequest;
use App\User;
use Illuminate\Http\JsonResponse;

class CheckIfEmailAlreadyExistsHandler
{
    public function handle(CheckIfEmailExistsRequest  $request) : JsonResponse
    {
         $emailExists = User::where('email', $request->route('email'))->exists();
         $message = $emailExists ? 'exists' : 'does not exist';
         return response()->json($message, 200)->header('Content-Type', 'text/plain');
    }
}
