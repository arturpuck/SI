<?php

namespace App\Http\Controllers\Prostitution;

use App\Http\Controllers\Controller;
use Illuminate\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use App\Handlers\Prostitution\ShowCreatorPanelHandler;
use App\Handlers\Prostitution\GetFormOptionsHandler;
use App\Handlers\Prostitution\CreateProstitutionAnnouncementHandler;
use App\Handlers\Prostitution\UpdateProstitutionAnnouncementHandler;
use App\Http\Requests\Prostitution\CreateProstitutionAnnouncementRequest;
use App\Http\Requests\Prostitution\UpdateProstitutionAnnouncementRequest;


class CreateProstitutionNoticeController extends Controller
{
    public function showCreatorPanel(ShowCreatorPanelHandler $handler) : View
    {
        return $handler->handle();
    }

    public function getNoticeFormOptions(GetFormOptionsHandler $handler) : JsonResponse
    {
        return $handler->handle();
    }

    public function createProstitutionAnnouncement(CreateProstitutionAnnouncementRequest $request, CreateProstitutionAnnouncementHandler $handler) : Response
    {
        return $handler->handle($request);
    }

    public function updateProstitutionAnnouncement(UpdateProstitutionAnnouncementRequest $request, UpdateProstitutionAnnouncementHandler $handler) : Response
    {
        return $handler->handle($request);
    }

}
