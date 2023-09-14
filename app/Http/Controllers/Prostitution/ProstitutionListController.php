<?php

namespace App\Http\Controllers\Prostitution;

use App\Handlers\Prostitution\GetAnnouncementInformationHandler;
use App\Http\Controllers\Controller;
use Illuminate\View\View;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Prostitution\GetProstituteAnnouncementRequest;
use App\Http\Requests\Prostitution\DeleteProstitutionAnnouncementRequest;
use App\Handlers\Prostitution\DeleteProstitutionAnnouncementHandler;
use App\ProstitutionAnnouncementPhotoToken;

class ProstitutionListController extends Controller
{
    public function showAnnouncementsList() : View
    {
        ProstitutionAnnouncementPhotoToken::query()->removeFromCurrentUser();
        return view('prostitution.prostitution_notices_list');
    }

    public function getAnnouncementInformation(GetProstituteAnnouncementRequest $request, GetAnnouncementInformationHandler $handler)
    {
        return $handler->handle($request);
    }

    public function deleteAnnouncement(DeleteProstitutionAnnouncementRequest $request, DeleteProstitutionAnnouncementHandler $handler) : JsonResponse
    {
        return $handler->handle($request);
    }
}
