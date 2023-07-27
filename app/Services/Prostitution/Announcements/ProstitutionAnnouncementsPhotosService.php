<?php

namespace App\Services\Prostitution\Announcements;

use Illuminate\Support\Facades\Storage;
use Exception;
use App\Enum\Prostitution\AnnouncementPhotoType;

final class ProstitutionAnnouncementsPhotosService
{

    public function __construct(
        private int $userID,
        private string $uniqueID,
        ){}

    public function getPhotoAwaitingVerificationPath(string $fileName) : string
    {
        $folder = $this->getPhotosAwaitingVerificationFolder();
        $path = $folder . "/" . $fileName;
        if(!file_exists($path)) {
            throw new Exception("File $fileName not found");
        }
        return $path;
    }

    public function getAcceptedPhotoPath(string $fileName) : string
    {
        $folder = $this->getAcceptedPhotosFolder();
        $path = $folder . "/" . $fileName;
        if(!file_exists($path)) {
            throw new Exception("File $fileName not found");
        }
        return $path;
    }

    public function getPhotosURLsAwaitingVerification() : array 
    {    
        $folder = $this->getPhotosAwaitingVerificationFolder();
        $pattern = $folder.'/*';
        return $this->getURLs($pattern, false);
    }

    public function getAcceptedPhotosURLs() : array
    {
        $folder = $this->getAcceptedPhotosFolder();
        $pattern = $folder.'/*';
        return $this->getURLs($pattern, true);
    }
    
    private function getURLs(string $pattern, bool $validated) : array
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
                'announcementUniqueIdentifier' => $this->uniqueID, 
                'fileName' => $fileName, 
                'status' => $status
            ];
            $queryString = http_build_query($queryParams);
            $result[] =  $baseURL.'?'.$queryString;
        }
        return $result;

    }
    
    public function getPhotosAwaitingVerificationFolder() : string
    {
        $storageDirectory = Storage::path('');
        return $storageDirectory.
        config('filesystems.prostitution.photos').
        $this->userID.'/'.
        $this->uniqueID;
    }

    public function createFilePathForPhotoAwaitingVerification(string $fileName) : string
    {
        return $this->getPhotosAwaitingVerificationFolder().'/'.$fileName;
    }

    public function createFilePathForValidatedPhoto(string $fileName) : string
    {
        return $this->getAcceptedPhotosFolder().'/'.$fileName;
    }
                    
    public function getAcceptedPhotosFolder() : string
    {
        return config('filesystems.prostitution.photos').'/'
              .config('filesystems.prostitution.photos_directory_approved');
    }

    public function getPhotosURLsForEditorPanel(bool $anyPhotoAwaitValidation) : array
    {
      return $anyPhotoAwaitValidation ? 
      $this->getPhotosURLsAwaitingVerification() : 
      $this->getAcceptedPhotosURLs();
    }
}