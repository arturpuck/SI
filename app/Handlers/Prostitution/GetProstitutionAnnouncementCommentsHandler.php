<?php

namespace App\Handlers\Prostitution;

use App\ProstituteAnnouncementComment;
use App\Http\Requests\Prostitution\GetProstitutionAnnouncementCommentsRequest;
use App\Http\Resources\Prostitution\ProstitutionAnnouncementCommentDisplayedOnCommentList;

class GetProstitutionAnnouncementCommentsHandler
{

    public function handle(GetProstitutionAnnouncementCommentsRequest $request)
    {
        $comments = ProstituteAnnouncementComment::query()
                                                ->whereHas('announcement', fn($query) => $query->where('uniqueID', $request->get('announcementUid')))
                                                ->where('approved', true)
                                                ->get();
                                                
        return ProstitutionAnnouncementCommentDisplayedOnCommentList::collection($comments);
    }

}