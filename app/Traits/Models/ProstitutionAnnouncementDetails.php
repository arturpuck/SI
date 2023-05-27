<?php

namespace App\Traits\Models;

use Carbon\Carbon;

trait ProstitutionAnnouncementDetails
{
    public function isVerified() : bool
    {
        if(empty($this->valid_until)) {
            return false;
        }
        $dateAfterAnnouncementIsOutdated = Carbon::createFromFormat('Y-m-d', $this->valid_until);
        $currentDate = Carbon::createFromFormat('Y-m-d', date('Y-m-d'));
        return $currentDate->isBefore($dateAfterAnnouncementIsOutdated);
    }

    public function getPhotosURLsAwaitingVerification(int $userID = null) : array 
    {    
        $folder = $this->getPhotosAwaitingVerificationFolder($userID);
        $pattern = $folder.'/*';
        return $this->getURLs($pattern, $folder);
    }

    public function getAcceptedPhotosURLs(int $userID = null) : array
    {
        $folder = $this->getAcceptedPhotosFolder($userID);
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
    
    public function getPhotosAwaitingVerificationFolder(int $userID = null) : string
    {
        $userID ??= auth()->user()->id;
        return config('filesystems.prostitution.photos').
                       $userID.'/'.
                       config('filesystems.prostitution.photos_directory_awaiting_verification');
    }
                    
    public function getAcceptedPhotosFolder(int $userID = null) : string
    {
        $userID ??= auth()->user()->id;
        return config('filesystems.prostitution.photos').
                       $userID.'/'.
                       config('filesystems.prostitution.photos_directory_approved');
                        
    }
}