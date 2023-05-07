<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\Prostitution\DeleteProstitutionAnnouncementRequest;
use App\ProstitutionAnnouncement;

class DeleteProstitutionAnnouncementHandler
{
    public function handle(DeleteProstitutionAnnouncementRequest $request) : JsonResponse
    {
        $id = $request->get('announcementID');
        ProstitutionAnnouncement::destroy($id);
        return new JsonResponse(compact('id'));
    }

}