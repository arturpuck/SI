<?php

namespace App\Services\Prostitution\Announcements;

interface ProstitutionAnnouncementsFileSystem
{
    public function getAnnouncementPhotosFolder(string $announcementUid) : string;
    public function getPhotoFilePath(string $announcementUid, string $fileName) : string;
    public function createPathForNewPhoto(string $announcementUid, string $fileName): string;
    public function getAllPhotosURLs(string $announcementUid) : array;
}