<?php

namespace App\Services\Prostitution\Announcements;

use App\ProstitutionAnnouncement;
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
        $baseURL = $this->getPhotoBaseURL();
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

    private function getPhotoBaseURL() : string
    {
        return route('prostitution.announcement.photo');
    }

    public function getThumbnailUrl(ProstitutionAnnouncement $announcement) : string
    {
        $controlSums = json_decode($announcement->photos_control_sum, true);
        if(!is_array($controlSums)) {
            throw new Exception('Requested prostitution announcement contains no information about photos');
        }
        if(!array_key_exists('accepted', $controlSums)) {
            throw new Exception('Requested prostituttion announcements has no accepted photos');
        }

        $fileName = array_key_first($controlSums['accepted']);
        $queryParams = [
            'announcementUniqueIdentifier' => $announcement->uniqueID,
            'fileName' => $fileName,
        ];
        $queryString = http_build_query($queryParams);
        return $this->getPhotoBaseURL().'?'.$queryString;
    }

    public function getAcceptedPhotosURLs(ProstitutionAnnouncement $announcement) : array
    {
        $fileNames = json_decode($announcement->photos_control_sum, true);
        if(!is_array($fileNames)) {
            return [];
        }
        if(!array_key_exists('accepted', $fileNames)) {
           return [];
        }

        $result = [];

        foreach($fileNames['accepted'] as $fileName => $controlSum) {
            $queryParams = [
                'announcementUniqueIdentifier' => $announcement->uniqueID,
                'fileName' => $fileName,
            ];
            $queryString = http_build_query($queryParams);
            $result[] = $this->getPhotoBaseURL().'?'.$queryString;
        }
        return $result;
    }

    public function getAnnouncementURL(string $announcementUid) : string
    {
        return urldecode(route('prostitution.show.announcement', compact('announcementUid')));
    }

}