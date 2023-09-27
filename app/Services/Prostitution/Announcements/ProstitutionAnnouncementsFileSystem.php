<?php

namespace App\Services\Prostitution\Announcements;

use App\ProstitutionAnnouncement;

interface ProstitutionAnnouncementsFileSystem
{
    public function getAnnouncementPhotosFolder(string $announcementUid) : string;
    public function getPhotoFilePath(string $announcementUid, string $fileName) : string;
    public function createPathForNewPhoto(string $announcementUid, string $fileName): string;
    public function getAllPhotosURLs(string $announcementUid) : array;
    public function getThumbnailUrl(ProstitutionAnnouncement $announcement) : string;
    public function getAnnouncementURL(string $announcementUid) : string;
}