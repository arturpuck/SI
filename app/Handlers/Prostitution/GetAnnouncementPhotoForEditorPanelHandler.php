<?php

namespace App\Handlers\Prostitution;

use App\Enum\Prostitution\AnnouncementPhotoType;
use App\Http\Requests\Prostitution\GetAnnouncementPhotoForEditorPanelRequest;
use Illuminate\Http\Response;
use Exception;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;

class GetAnnouncementPhotoForEditorPanelHandler
{
    public function __construct(private ProstitutionAnnouncementsFileSystemService $photosFileSystem = new ProstitutionAnnouncementsFileSystemService){}
    public function handle(GetAnnouncementPhotoForEditorPanelRequest $request)
    {
        try {
            $announcementUID =$request->get('announcementUniqueIdentifier');
            $fileName = $request->get('fileName');
            $filePath = match($request->get('status')) {
                AnnouncementPhotoType::VALIDATED->value => $this->photosFileSystem->getAcceptedPhotoPath($fileName, $announcementUID),
                AnnouncementPhotoType::AWAITING_VERIFICATION->value => $this->photosFileSystem->getPhotoAwaitingVerificationPath($fileName, $announcementUID)
            };
            return response()->file($filePath);
        } catch (Exception $exception) {
            return new Response("File : $fileName was not found", 404);
        }

    }
}