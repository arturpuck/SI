<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\ProstitutionAnnouncement;
use App\Http\Requests\Prostitution\CreateProstitutionAnnouncementRequest;

class CreateProstitutionAnnouncementHandler
{
    public function handle(CreateProstitutionAnnouncementRequest $request) : JsonResponse
    {
        $announcement = new ProstitutionAnnouncement();
    }

}