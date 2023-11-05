<?php

namespace App\Handlers\Prostitution;

use App\Http\Requests\Prostitution\GetProstitutionAnnouncementPhotoRequest;
use Illuminate\Http\Response;
use Exception;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystem;

class GetAnnouncementPhotoForEditorPanelHandler
{
    public function __construct(private ProstitutionAnnouncementsFileSystem $photosFileSystem = new ProstitutionAnnouncementsFileSystemService)
    {
    }
    public function handle(GetProstitutionAnnouncementPhotoRequest $request)
    {
        try {
            $announcementUID = $request->get('announcementUniqueIdentifier');
            $fileName = $request->get('fileName');
            $filePath = $this->photosFileSystem->getPhotoFilePath($announcementUID, $fileName);
            return response()->file($filePath);
        } catch (Exception $exception) {
            return new Response("File : $fileName was not found", 404);
        }
    }
}
