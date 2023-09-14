<?php

namespace App\Handlers\Prostitution;

use App\Enum\Prostitution\AnnouncementPhotoType;
use App\Http\Requests\Prostitution\GetAnnouncementPhotoForEditorPanelRequest;
use Illuminate\Http\Response;
use Exception;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystem;

class GetAnnouncementPhotoForEditorPanelHandler
{
    public function __construct(private ProstitutionAnnouncementsFileSystem $photosFileSystem = new ProstitutionAnnouncementsFileSystemService){}
    public function handle(GetAnnouncementPhotoForEditorPanelRequest $request)
    {
        try {
            $announcementUID =$request->get('announcementUniqueIdentifier');
            $fileName = $request->get('fileName');
            $filePath = $this->photosFileSystem->getPhotoFilePath($announcementUID, $fileName);
            return response()->file($filePath);
        } catch (Exception $exception) {
            return new Response("File : $fileName was not found", 404);
        }

    }
}