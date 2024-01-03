<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use App\Http\Requests\Prostitution\UpdateProstitutionAnnouncementRequest;
use App\ProstitutionAnnouncement;
use Illuminate\Support\Arr;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystem;
use Illuminate\Support\Str;
use App\Enum\Prostitution\AnnouncementPhotoType;
use App\ProstitutionAnnouncementPhotoToken;

final class UpdateProstitutionAnnouncementHandler
{
    private ProstitutionAnnouncement $announcement;
    private array $filteredRequest;
    private array $photosAwaitingVerificationControlSums = [];
    private array $validatedPhotosControlSums = [];
    private array $requestedFilesControlSums = [];
    private bool $anyPhotoHasBeenAdded = false;

    const MAIN_SERVICES_METHOD_NAME = 'updateMainService';
    const STORE_AS_JSON_METHOD_NAME = 'storeAsJSON';
    const PHOTOS_METHOD_NAME = 'updatePhotos';
    const SIMPLE_ASSIGNEMENT_METHOD_NAME = 'simpleAssignement';

    const SPECIAL_TREATMENT_COLUMNS = [
            'tripsPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'massagePreference' => self::MAIN_SERVICES_METHOD_NAME,
            'vaginalSexPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'oralCreampiePreference' => self::MAIN_SERVICES_METHOD_NAME,
            'cumSwallowPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'cumOnFacePreference' => self::MAIN_SERVICES_METHOD_NAME,
            'analPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'pussyLickingPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'clientRimmingPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'kissingPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'cumOnBodyPreference' => self::MAIN_SERVICES_METHOD_NAME,
            'blowjobPreference' => self::MAIN_SERVICES_METHOD_NAME,

            'analAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'vaginalSexAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'blowjobAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'oralCreampieAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'cumOnFaceAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'massageAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'pussyLickingAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'clientRimmingAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'kissingAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'cumOnBodyAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,
            'cumSwallowAditionalPayment' => self::MAIN_SERVICES_METHOD_NAME,

            'secondaryServices' => self::STORE_AS_JSON_METHOD_NAME,
            'paymentForms' => self::STORE_AS_JSON_METHOD_NAME,
            'workingHours' => self::STORE_AS_JSON_METHOD_NAME,

            'photos' => self::PHOTOS_METHOD_NAME,
            'preciseHoursDecision' => 'removeWorkingHoursIfNecessary'
    ];

    public function __construct(private ProstitutionAnnouncementsFileSystem $photosFileSystem = new ProstitutionAnnouncementsFileSystemService()) {}

    public function handle(UpdateProstitutionAnnouncementRequest $request) : Response
    {
        $this->announcement = ProstitutionAnnouncement::query()
                            ->filterByUniversallyUniqueIdentifier($request->get('uniqueID'))
                            ->get()
                            ->first();
        $userSentNewTokenAndWantsToProlongTheAnnouncement = !is_null($request->get('prostitutePhotoVerificationToken'));
        $this->filterRequest($request, $userSentNewTokenAndWantsToProlongTheAnnouncement);
        foreach($this->filteredRequest as $key => $value) {
            $methodName = $this->getMethodName($key, $value);
            $this->$methodName($key, $value);
        }
        if($userSentNewTokenAndWantsToProlongTheAnnouncement) {
            $this->announcement->user_requested_prolongation = true;
        }
        $this->announcement->save();
        ProstitutionAnnouncementPhotoToken::query()->removeFromCurrentUser();
        return new Response(status:200);
    }

    private function removeWorkingHoursIfNecessary(string $key, $value): void
    {
        if($value === '0') {
            $this->announcement->working_hours = null;
        }
    }

    private function filterRequest(UpdateProstitutionAnnouncementRequest $request, bool $tokenHasBeenSent) : void
    {
        $elementsToExclude = $tokenHasBeenSent ? ['workingDays', 'uniqueID'] : ['workingDays', 'uniqueID', 'prostitutePhotoVerificationToken'];
        $this->filteredRequest = Arr::except($request->validated(),$elementsToExclude);  
    }

    private function getMethodName(string $field) : string
    {
        return array_key_exists($field, self::SPECIAL_TREATMENT_COLUMNS) ? self::SPECIAL_TREATMENT_COLUMNS[$field] : self::SIMPLE_ASSIGNEMENT_METHOD_NAME;
    }

    private function mapRequestFieldToColumnName(string $requestField) : string {
        return match($requestField) {
            'prostitutePhotoVerificationToken' => 'last_generated_token',
            default => $this->camelCaseToUnderscore($requestField)
        };
    }

    private function camelCaseToUnderscore(string $camelCase) : string
    {
        if (empty($camelCase)) {
            return $camelCase;
        }
        $result = lcfirst($camelCase);
        $result = preg_replace("/[A-Z]/", '_' . "$0", $result);
        return strtolower($result);
    }

    private function updateMainService(string $key, string $value) : void
    {
        $currentData = json_decode($this->announcement->main_services, true) ?? [];
        if($value === 'never') {
            unset($currentData[$key]);
        } else {
            $currentData[$key] = $value;
        }

        $this->announcement->setAttribute('main_services', json_encode($currentData));
    }

    private function storeAsJSON(string $key, ?array $value) : void
    {
        $key = $this->mapRequestFieldToColumnName($key);
        $this->announcement[$key] = is_array($value) && count($value) > 0 ? json_encode($value, true) : null;
    }

    private function simpleAssignement(string $key, mixed $value) : void
    {
        $key = $this->mapRequestFieldToColumnName($key);
        $this->announcement[$key] = $value;
    }

    private function updatePhotos() : void 
    {
        $this->assignRequestedFilesControlSums();
        $this->assignSavedControlSums();
        $this->moveNewPhotosIfTheyExist();
        $this->removePhotosIfUserDeletedAny();
        if($this->anyPhotoHasBeenAdded) {
            $this->announcement->any_photo_awaits_validation = true;
        }
    }

    private function assignRequestedFilesControlSums() : void 
    {
        foreach($this->filteredRequest['photos'] as $index => $photo) {
            $controlSum = hash_file('sha256', $photo->getRealPath());
            $this->requestedFilesControlSums[$index] = $controlSum;
        }
    }
    
    private function moveNewPhotosIfTheyExist() : void
    {
        $savedControlSums = $this->getAllSavedControlSums();
        foreach($this->requestedFilesControlSums as $index => $controlSum) {
            if(!in_array($controlSum, $savedControlSums)) {
                $currentFile = $this->filteredRequest['photos'][$index];
                $newFileName = Str::uuid().'.'.$currentFile->getClientOriginalExtension();
                $newFileFolderPath = $this->photosFileSystem->getAnnouncementPhotosFolder($this->announcement->uniqueID);
                $currentFile->move($newFileFolderPath, $newFileName);
                $this->announcement->addControlSum(
                            AnnouncementPhotoType::AWAITING_VERIFICATION,
                            $newFileName,
                            $controlSum
                );
                $this->anyPhotoHasBeenAdded = true;
            }
        }
    }

    private function removePhotosIfUserDeletedAny() : void
    {
        foreach($this->validatedPhotosControlSums as $fileName => $controlSum) {
            $filePath = $this->photosFileSystem->getPhotoFilePath($this->announcement->uniqueID, $fileName);

            if(!in_array($controlSum, $this->requestedFilesControlSums) && file_exists($filePath)) {
                unlink($filePath);
                $this->announcement->removeControlSum(AnnouncementPhotoType::ACCEPTED, $fileName);
            }
        }

        foreach($this->photosAwaitingVerificationControlSums as $fileName => $controlSum) {
            $filePath = $this->photosFileSystem->getPhotoFilePath($this->announcement->uniqueID, $fileName);

            if(!in_array($controlSum, $this->requestedFilesControlSums) && file_exists($filePath)) {
                unlink($filePath);
                $this->announcement->removeControlSum(AnnouncementPhotoType::AWAITING_VERIFICATION, $fileName);
            }
        }

    }
    
    private function assignSavedControlSums() : void
    {
        $savedControlSums = json_decode($this->announcement->photos_control_sum, true);
        $this->validatedPhotosControlSums = $savedControlSums[AnnouncementPhotoType::ACCEPTED->value] ?? [];
        $this->photosAwaitingVerificationControlSums = $savedControlSums[AnnouncementPhotoType::AWAITING_VERIFICATION->value] ?? [];
    }

    private function getAllSavedControlSums() : array
    {
        return [...$this->validatedPhotosControlSums, ...$this->photosAwaitingVerificationControlSums];
    }

}