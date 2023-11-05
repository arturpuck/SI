<?php

namespace App\Handlers\Prostitution;

use App\ProstitutionAnnouncement;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class ShowProstitutionAnnouncementDetailsHandler
{
    public function handle(string $announcementUid) : ProstitutionAnnouncement
    {
       $announcement = ProstitutionAnnouncement::query()
                        ->with(['city', 'region'])
                        ->filterByUniqueIdentifier($announcementUid)
                        ->filterByOnlyApproved()
                        ->get();

        if($announcement->isEmpty()) {
            throw new ModelNotFoundException(__('announcement_with_gived_uid_does_not-exist_or_is_not_approved'), 404);
        }
        return $announcement->first();
    }

}