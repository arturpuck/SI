<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\UserType;
use App\SexualOrientation;
use App\Voivodeship;
use App\Http\Requests\Prostitution\CreateProstitutionAnnouncementRequest;

class CreateProstitutionAnnouncementHandler
{
    public function handle(CreateProstitutionAnnouncementRequest $request) : JsonResponse
    {
        
        return new JsonResponse();
    }

}