<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use App\ProstitutionAnnouncementPhotoToken;

final class UnsetProstitutionPhotoTokenHandler
{

    public function handle() : Response
    {
        ProstitutionAnnouncementPhotoToken::query()->removeFromCurrentUser();
        return new Response(status:200);
    }

}