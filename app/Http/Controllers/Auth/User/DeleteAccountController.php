<?php

namespace App\Http\Controllers\Auth\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\DeleteAccountRequest;
use Symfony\Component\HttpFoundation\Response;
use App\Handlers\User\DeleteAccountHandler;


class DeleteAccountController extends Controller
{
    public function deleteAccount(DeleteAccountRequest $request, DeleteAccountHandler $handler) : Response
    {
        return $handler->handle($request);
    }
}
