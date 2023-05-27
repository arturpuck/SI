<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;

final class UnsetProstitutionPhotoTokenHandler
{

    public function handle() : Response
    {
        Session::remove('prostitutePhotoVerificationToken');
        return new Response(status:200);
    }

}