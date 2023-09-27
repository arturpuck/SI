<?php

namespace App\Services\Prostitution\Announcements;

use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use App\ProstitutionAnnouncement;
use App\Enum\Prostitution\AnnouncementPhotoType;
use Exception;
use Carbon\Carbon;

final class ProstitutionAnnouncementsValidationService
{

    public function __construct(private ProstitutionAnnouncementsFileSystemService $fileSystem = new ProstitutionAnnouncementsFileSystemService()){}

    public function acceptPhotos(string $announcementUID) : void
    {
        $announcement = $this->getAnnouncement($announcementUID);
        $controlSums = $this->validatePhotosAwaitingVerificationControlSums($announcement);
        $acceptedPhotosControlSums = [];
        foreach($controlSums as $fileName => $controlSum) {
            $acceptedPhotosControlSums[$fileName] = $this->getPhotoControlSum($fileName, $announcementUID);
        }
        $this->changeControlSumsFromAwaitingVerificationToAccepted($announcement, $acceptedPhotosControlSums);
        $announcement->any_photo_awaits_validation = false;
        $announcement->user_requested_prolongation = false;
        $this->assignExpirationDate($announcement);
        $announcement->save();
    }

    private function assignExpirationDate(ProstitutionAnnouncement $announcement): void
    {
        $dateNow = Carbon::now();
        $dateThreeMonthsLater = $dateNow->addMonths(3);
        $announcement->valid_until = $dateThreeMonthsLater->toDateString();
    }

    private function changeControlSumsFromAwaitingVerificationToAccepted(ProstitutionAnnouncement $announcement, array $acceptedPhotosControlSums) : void
    {
        $previousControlSums = json_decode($announcement->photos_control_sum, true);
        if(!array_key_exists(AnnouncementPhotoType::ACCEPTED->value, $previousControlSums)) {
            $announcement->photos_control_sum = json_encode([AnnouncementPhotoType::ACCEPTED->value => $acceptedPhotosControlSums]);
            return;
        }
        
        $acceptedPhotosControlSums = [
            AnnouncementPhotoType::ACCEPTED->value => [
                ...$acceptedPhotosControlSums, 
                ...$previousControlSums[AnnouncementPhotoType::ACCEPTED->value]
            ]
            ];
            $announcement->photos_control_sum = json_encode($acceptedPhotosControlSums);
    }
    
    private function controlSumsAreNotEqual(string $storedFileName, string $controlSum, string $announcementUID) : bool 
    {
        return $controlSum != $this->getPhotoControlSum($storedFileName, $announcementUID);
    }

    private function getPhotoControlSum(string $fileName, string $announcementUID) : string
    {
        return hash_file('sha256', $this->fileSystem->getPhotoFilePath($announcementUID, $fileName));
    }

    private function validatePhotosAwaitingVerificationControlSums(ProstitutionAnnouncement $announcement) : array
    {
        $controlSums = json_decode($announcement->photos_control_sum, true);
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

        if(!$announcement->any_photo_awaits_validation) {
            throw new Exception('This announcement has no photos to validate');
        }
        return $announcement;
    }
}