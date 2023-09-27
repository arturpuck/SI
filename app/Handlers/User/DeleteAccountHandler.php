<?php

namespace App\Handlers\User;

use App\Http\Requests\User\DeleteAccountRequest;
use Symfony\Component\HttpFoundation\Response;


class DeleteAccountHandler
{
    public function handle(DeleteAccountRequest $request) : Response
    {
        $user = \Auth::user();
        \Auth::logout();
        $user->deletePreviousAvatarFileFromStorage();
        $user->delete();
        return back()->with('success', 'your_account_and_all_related_data_has_been_deleted');

    }
}
