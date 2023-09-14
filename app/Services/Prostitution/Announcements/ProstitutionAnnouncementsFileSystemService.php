<?php

namespace App\Services\Prostitution\Announcements;

use Exception;

final class ProstitutionAnnouncementsFileSystemService implements ProstitutionAnnouncementsFileSystem
{

    public function getAnnouncementPhotosFolder(string $announcementUid) : string
    {
        return public_path().'/'
               .config('filesystems.prostitution.announcements.photos').'/'.
               $announcementUid;
    }

    public function getPhotoFilePath(string $announcementUid, string $fileName) : string
    {
        $filePath = $this->createPathForNewPhoto($announcementUid, $fileName);
        if(!file_exists($filePath)) {
            throw new Exception("File does not exist $filePath");
        }
        return $filePath;
    }
    
    public function createPathForNewPhoto(string $announcementUid, string $fileName): string
    {
        $basePath = $this->getAnnouncementPhotosFolder($announcementUid);
        return $basePath.'/'.$fileName;
    }

    public function getAllPhotosURLs(string $announcementUid) : array
    {
        $pattern = $this->getAnnouncementPhotosFolder($announcementUid).'/*';
        $photos = glob($pattern);
        if(!$photos) {
            return [];
        }
        $result = [];
        $baseURL = route('prostitution.announcement.photo');
        foreach($photos as $photo) {
            $fileName = basename($photo);
            $queryParams = [
                'announcementUniqueIdentifier' => $announcementUid, 
                'fileName' => $fileName,
            ];
            $queryString = http_build_query($queryParams);
            $result[] =  $baseURL.'?'.$queryString;
        }
        return $result;
    }

}