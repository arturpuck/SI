<?php

namespace App\Handlers\User;

use App\Http\Requests\User\CheckIfLoginExistsRequest;
use App\User;
use Illuminate\Http\JsonResponse;

class CheckIfLoginAlreadyExistsHandler
{
    public function handle(CheckIfLoginExistsRequest  $request) : JsonResponse
    {
         $loginExists = User::where('login', $request->route('login'))->exists();
         $message = $loginExists ? 'exists' : 'does not exist';
         return response()->json($message, 200)->header('Content-Type', 'text/plain');
    }
}
