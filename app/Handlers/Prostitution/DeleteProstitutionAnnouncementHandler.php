<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\Prostitution\DeleteProstitutionAnnouncementRequest;
use App\ProstitutionAnnouncement;

class DeleteProstitutionAnnouncementHandler
{
    public function handle(DeleteProstitutionAnnouncementRequest $request) : JsonResponse
    {
        $uid = $request->get('announcementUid');
        ProstitutionAnnouncement::query()
            ->filterByUniqueIdentifier($uid)
            ->delete();

        return new JsonResponse(compact('uid'));
    }

}