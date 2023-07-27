<?php

namespace App\Services\Prostitution\Announcements;

use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use App\ProstitutionAnnouncement;
use App\Enum\Prostitution\AnnouncementPhotoType;
use Exception;

final class ProstitutionAnnouncementsValidationService
{

    public function __construct(private ProstitutionAnnouncementsFileSystemService $fileSystem = new ProstitutionAnnouncementsFileSystemService()){}

    public function acceptPhotos(string $announcementUID) : void
    {
        $announcement = $this->getAnnouncement($announcementUID);
        $controlSums = $this->validatePhotosAwaitingVerificationControlSums($announcement);
        $controlSumsAfterChangingDirectory = [];
        foreach($controlSums as $fileName => $controlSum) {
            $this->fileSystem->movePhotoToAcceptedGroup($fileName, $announcementUID);
            $controlSumsAfterChangingDirectory[$fileName] = $this->getAcceptedPhotoControlSum($fileName, $announcementUID);
        }
        foreach($controlSums as $fileName => $controlSum) {
            $this->fileSystem->removePhotoAwaitingVerification($fileName, $announcementUID);
        }
        $announcement->photos_control_sum = json_encode(['accepted' => $controlSumsAfterChangingDirectory]);
        $announcement->save();

    }
    
    private function controlSumsAreNotEqual(string $storedFileName, string $controlSum, string $announcementUID) : bool 
    {
        return $controlSum != $this->getPhotoAwaitingVerificationControlSum($storedFileName, $announcementUID);
    }

    private function getAcceptedPhotoControlSum(string $fileName, string $announcementUID) : string
    {
        return hash_file('sha256', $this->fileSystem->getAcceptedPhotoPath($fileName, $announcementUID));
    }

    private function getPhotoAwaitingVerificationControlSum(string $fileName, string $announcementUID) : string
    {
        return hash_file('sha256', $this->fileSystem->getPhotoAwaitingVerificationPath($fileName, $announcementUID));
    }

    private function validatePhotosAwaitingVerificationControlSums(ProstitutionAnnouncement $announcement) : array
    {
        $controlSums = json_decode($announcement, true);
        if(!is_array($controlSums)) {
            throw new Exception('Announcement has no control sums');
        }

        if(!is_array($controlSums[AnnouncementPhotoType::AWAITING_VERIFICATION->value])) {
            throw new Exception('Announcement has no control sums for photos awaiting verification');
        }
        
        if(!array_key_exists(AnnouncementPhotoType::AWAITING_VERIFICATION->value, $controlSums)) {
            throw new Exception('Announcement has no control sums for photos awaiting verification');
        }
        
        if(count($controlSums[AnnouncementPhotoType::AWAITING_VERIFICATION->value]) === 0) {
            throw new Exception('Announcement has no control sums for photos awaiting verification');
        }

        foreach($controlSums[AnnouncementPhotoType::AWAITING_VERIFICATION->value] as $fileName => $controlSum) {
            if($this->controlSumsAreNotEqual($fileName, $controlSum, $announcement->uniqueID)) {
                throw new Exception("Control sum is incorrect for file $fileName");
            }
        }

        return $controlSums[AnnouncementPhotoType::AWAITING_VERIFICATION->value];
    }

    
    private function getAnnouncement(string $announcementUID) : ProstitutionAnnouncement
    {
        $announcement = ProstitutionAnnouncement::query()->filterByUniversallyUniqueIdentifier($announcementUID)
                                                        ->get()
                                                        ->first();
        if(is_null($announcement)) {
            throw new Exception('Announcement with given Uid does not exists');
        }
        return $announcement;
    }
}