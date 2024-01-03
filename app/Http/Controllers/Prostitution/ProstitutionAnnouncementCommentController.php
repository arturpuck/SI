<?php

namespace App\Http\Controllers\Prostitution;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Http\Requests\Prostitution\SaveProstitutionCommentRequest;
use App\Handlers\Prostitution\SaveProstitutionAnnouncementCommentHandler;
use App\Http\Requests\Prostitution\GetProstitutionAnnouncementCommentsRequest;
use App\Handlers\Prostitution\GetProstitutionAnnouncementCommentsHandler;

class ProstitutionAnnouncementCommentController extends Controller
{
    public function addComment(SaveProstitutionCommentRequest $request, SaveProstitutionAnnouncementCommentHandler $handler) : Response 
    {
        return $handler->handle($request);
    }

    public function getComments(GetProstitutionAnnouncementCommentsRequest $request, GetProstitutionAnnouncementCommentsHandler $handler)
    {
        return $handler->handle($request);
    }
}
