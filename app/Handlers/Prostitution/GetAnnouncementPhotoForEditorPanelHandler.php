<?php

namespace App\Handlers\Prostitution;

use App\Enum\Prostitution\AnnouncementPhotoType;
use App\Http\Requests\Prostitution\GetAnnouncementPhotoForEditorPanelRequest;
use Illuminate\Http\Response;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsPhotosService as PhotosService;
use Exception;
use App\Enum\Prostitution\PhotoType;

class GetAnnouncementPhotoForEditorPanelHandler
{
    public function handle(GetAnnouncementPhotoForEditorPanelRequest $request)
    {
        try {
            $photosService = new PhotosService(auth()->user()->id, $request->get('announcementUniqueIdentifier'));
            $fileName = $request->get('fileName');
            $filePath = match($request->get('status')) {
                AnnouncementPhotoType::VALIDATED->value => $photosService->getAcceptedPhotoPath($fileName),
                AnnouncementPhotoType::AWAITING_VERIFICATION->value => $photosService->getPhotoAwaitingVerificationPath($fileName)
            };
            return response()->file($filePath);
        } catch (Exception $exception) {
            return new Response("File : $fileName was not found", 404);
        }

    }
}