<?php

namespace App\Http\Controllers\Prostitution;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Handlers\Prostitution\SetProstitutionPhotoTokenHandler;
use App\Handlers\Prostitution\UnsetProstitutionPhotoTokenHandler;

class ProstitutionAnnouncementTokenController extends Controller
{
    public function setVerificationToken(SetProstitutionPhotoTokenHandler $handler) : JsonResponse
    {
        return $handler->handle();
    }

    public function unsetVerificationToken(UnsetProstitutionPhotoTokenHandler $handler) : Response
    {
        return $handler->handle();
    }
}
