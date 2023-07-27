<?php

namespace App\Services\Prostitution\Announcements;

use Illuminate\Support\Facades\Storage;
use Exception;
use App\Enum\Prostitution\AnnouncementPhotoType;

final class ProstitutionAnnouncementsFileSystemService
{
    public function getPhotoAwaitingVerificationPath(string $fileName, string $announcementUID) : string
    {
        $folder = $this->getPhotosAwaitingVerificationFolder($announcementUID);
        $path = $folder . "/" . $fileName;
        if(!file_exists($path)) {
            throw new Exception("File $fileName not found");
        }
        return $path;
    }

    public function getAcceptedPhotoPath(string $fileName, string $announcementUID) : string
    {
        $folder = $this->getAcceptedPhotosFolder();
        $path = $folder . "/" .
        $announcementUID.'/'.
        $fileName;

        if(!file_exists($path)) {
            throw new Exception("File $fileName not found");
        }
        return $path;
    }

    public function getPhotosURLsAwaitingVerification($announcementUID) : array 
    {    
        $folder = $this->getPhotosAwaitingVerificationFolder($announcementUID);
        $pattern = $folder.'/*';
        return $this->getURLs($pattern, false, $announcementUID);
    }

    public function getAcceptedPhotosURLs(string $announcementUID) : array
    {
        $folder = $this->getAcceptedPhotosFolder();
        $pattern = $folder.'/*';
        return $this->getURLs($pattern, true, $announcementUID);
    }
    
    private function getURLs(string $pattern, bool $validated, string $announcementUID) : array
    {
        $photos = glob($pattern);
        if(!$photos) {
            return [];
        }
        $result = [];
        $baseURL = route('prostitution.announcement.photo');
        foreach($photos as $photo) {
            $fileName = basename($photo);
            $status = $validated ? AnnouncementPhotoType::VALIDATED->value : AnnouncementPhotoType::AWAITING_VERIFICATION->value;
            $queryParams = [
                'announcementUniqueIdentifier' => $announcementUID, 
                'fileName' => $fileName, 
                'status' => $status
            ];
            $queryString = http_build_query($queryParams);
            $result[] =  $baseURL.'?'.$queryString;
        }
        return $result;

    }
    
    public function getPhotosAwaitingVerificationFolder(string $announcementUID) : string
    {
        $storageDirectory = Storage::path('');
        return $storageDirectory.
        config('filesystems.prostitution.photos').'/'.
        $announcementUID;
    }

    public function createFilePathForPhotoAwaitingVerification(string $fileName, string $announcementUID) : string
    {
        return $this->getPhotosAwaitingVerificationFolder($announcementUID).'/'.$fileName;
    }

    public function createFilePathForValidatedPhoto(string $fileName, string $announcementUID) : string
    {
        return $this->getAcceptedPhotosFolder().'/'.$announcementUID.'/'.$fileName;
    }
                    
    public function getAcceptedPhotosFolder() : string
    {
        return config('filesystems.prostitution.photos').'/'
              .config('filesystems.prostitution.photos_directory_approved');
    }

    public function getPhotosURLsForEditorPanel(string $announcementUID, bool $anyPhotoAwaitValidation) : array
    {
      return $anyPhotoAwaitValidation ? 
      $this->getPhotosURLsAwaitingVerification($announcementUID) : 
      $this->getAcceptedPhotosURLs($announcementUID);
    }

    public function movePhotoToAcceptedGroup(string $fileName, string $announcementUID) : void
    {
        $fileToMovePath = $this->getPhotoAwaitingVerificationPath($fileName, $announcementUID);
        $newFilePath = $this->createFilePathForValidatedPhoto($fileName, $announcementUID);
        rename($fileToMovePath, $newFilePath);
    }

    public function removePhotoAwaitingVerification(string $fileName, string $announcementUID) : void
    {
        unlink($this->getPhotoAwaitingVerificationPath($fileName, $announcementUID));
    }
}