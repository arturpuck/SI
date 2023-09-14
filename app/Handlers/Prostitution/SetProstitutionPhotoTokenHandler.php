<?php

namespace App\Handlers\Prostitution;

use App\ProstitutionAnnouncement;
use Illuminate\Http\JsonResponse;
use App\Traits\Prostitution\PhotoTokenGenerator;
use Illuminate\Support\Facades\Session;
use App\ProstitutionAnnouncementPhotoToken;

final class SetProstitutionPhotoTokenHandler
{
    use PhotoTokenGenerator;

    public function handle() : JsonResponse
    {
        $photoToken = $this->generatePhotoToken();
        ProstitutionAnnouncementPhotoToken::query()->assignToCurrentUser($photoToken);
        return new JsonResponse(compact('photoToken'),200);
    }

}