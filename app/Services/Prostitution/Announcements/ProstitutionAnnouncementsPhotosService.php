<?php

namespace App\Services\Prostitution\Announcements;

final class ProstitutionAnnouncementsPhotosService
{

    public function __construct(private int $userID, private string $announcementUniqueID){}

    public function getPhotosURLsAwaitingVerification() : array 
    {    
        $folder = $this->getPhotosAwaitingVerificationFolder();
        $pattern = $folder.'/*';
        return $this->getURLs($pattern, $folder);
    }

    public function getAcceptedPhotosURLs() : array
    {
        $folder = $this->getAcceptedPhotosFolder();
        $pattern = $folder.'/*';
        return $this->getURLs($pattern, $folder);
    }
    
    private function getURLs(string $pattern, string $folder) : array
    {
        $photos = glob($pattern);
        if(!$photos) {
            return [];
        }
        $result = [];
        foreach($photos as $photo) {
            $result[] = url($folder.'/'.basename($photo));
        }
        return $result;

    }
    
    public function getPhotosAwaitingVerificationFolder() : string
    {
        return $this->getRootFolder().'/'.config('filesystems.prostitution.photos_directory_awaiting_verification');
    }
                    
    public function getAcceptedPhotosFolder() : string
    {
        return $this->getRootFolder().'/'.config('filesystems.prostitution.photos_directory_approved');
    }

    private function getRootFolder() : string
    {
        return config('filesystems.prostitution.photos').
                       $this->userID.'/'.
                       $this->announcementUniqueID;
    }
}