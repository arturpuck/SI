<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use App\ProstituteAnnouncementComment;
use App\Http\Requests\Prostitution\SaveProstitutionCommentRequest;
use App\ProstitutionAnnouncement;

class SaveProstitutionAnnouncementCommentHandler
{

    public function handle(SaveProstitutionCommentRequest $request) : Response
    {
        $announcementId = ProstitutionAnnouncement::query()
                            ->filterByUniversallyUniqueIdentifier($request->get('announcementUid'))
                            ->get()
                            ->first()
                            ->id;

        ProstituteAnnouncementComment::create([
            'user_id' => \Auth::user()->id,
            'announcement_id' => $announcementId,
            'body' => $request->get('commentBody')
        ]);
        return new Response(status:201);
    }

}