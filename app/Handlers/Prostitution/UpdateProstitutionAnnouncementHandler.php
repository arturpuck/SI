<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use App\Http\Requests\Prostitution\UpdateProstitutionAnnouncementRequest;
use App\ProstitutionAnnouncement;
use Illuminate\Support\Arr;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsPhotosService;
use Illuminate\Support\Str;
use App\Enum\Prostitution\AnnouncementPhotoType;

final class UpdateProstitutionAnnouncementHandler
{
    private ProstitutionAnnouncement $announcement;
    private array $filteredRequest;
    private ProstitutionAnnouncementsPhotosService $photosService;
    private array $photosAwaitingVerificationControlSums = [];
    private array $validatedPhotosControlSums = [];
    private array $requestedFilesControlSums = [];

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

            'photos' => self::PHOTOS_METHOD_NAME
    ];

    public function __construct() {}

    public function handle(UpdateProstitutionAnnouncementRequest $request, ProstitutionAnnouncementsPhotosService $photosService = null) : Response
    {
        $this->announcement = ProstitutionAnnouncement::query()
                            ->filterByUniversallyUniqueIdentifier($request->get('uniqueID'))
                            ->get()
                            ->first();

        $this->photosService = $photosService ?? new ProstitutionAnnouncementsPhotosService(
            auth()->user()->id,
            $this->announcement->uniqueID
        );
        $this->filteredRequest = Arr::except($request->validated(),['workingDays', 'uniqueID']);
        foreach($this->filteredRequest as $key => $value) {
            $methodName = $this->getMethodName($key, $value);
            $this->$methodName($key, $value);
        }
        $this->announcement->save();
        return new Response(status:200);
    }

    private function getMethodName(string $field) : string
    {
        return array_key_exists($field, self::SPECIAL_TREATMENT_COLUMNS) ? self::SPECIAL_TREATMENT_COLUMNS[$field] : self::SIMPLE_ASSIGNEMENT_METHOD_NAME;
    }

    private function mapRequestFieldToColumnName(string $requestField) : string {
        return match($requestField) {
            'verificationToken' => 'last_generated_token',
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
        if($value === 'never') {
            $this->announcement->unset('mainServices->'.$key);
            return;
        }

        $this->announcement->mainServices[$key] = $value;
    }

    private function storeAsJSON(string $key, string $value) : void
    {
        $this->announcement[$key] = count($this->announcement[$key]) === 0 ? null : json_encode($this->announcement[$key]);
    }

    private function simpleAssignement(string $key, string $value) : void
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
                $newFileFolderPath = $this->photosService->getPhotosAwaitingVerificationFolder();
                $currentFile->move($newFileFolderPath, $newFileName);
                $this->announcement->addControlSum(
                            AnnouncementPhotoType::AWAITING_VERIFICATION,
                            $newFileName,
                            $controlSum
                );
                
            }
        }
    }

    private function removePhotosIfUserDeletedAny() : void
    {
        foreach($this->validatedPhotosControlSums as $fileName => $controlSum) {
            $filePath = $this->photosService->createFilePathForValidatedPhoto($fileName);

            if(!in_array($controlSum, $this->requestedFilesControlSums) && file_exists($filePath)) {
                unlink($filePath);
                $this->announcement->removeControlSum(AnnouncementPhotoType::VALIDATED, $fileName);
            }
        }

        foreach($this->photosAwaitingVerificationControlSums as $fileName => $controlSum) {
            $filePath = $this->photosService->createFilePathForPhotoAwaitingVerification($fileName);

            if(!in_array($controlSum, $this->requestedFilesControlSums) && file_exists($filePath)) {
                unlink($filePath);
                $this->announcement->removeControlSum(AnnouncementPhotoType::AWAITING_VERIFICATION, $fileName);
            }
        }

    }
    
    private function assignSavedControlSums() : void
    {
        $savedControlSums = json_decode($this->announcement->photos_control_sum, true);
        $this->validatedPhotosControlSums = $savedControlSums[AnnouncementPhotoType::VALIDATED->value] ?? [];
        $this->photosAwaitingVerificationControlSums = $savedControlSums[AnnouncementPhotoType::AWAITING_VERIFICATION->value] ?? [];
    }

    private function getAllSavedControlSums() : array
    {
        return [...$this->validatedPhotosControlSums, ...$this->photosAwaitingVerificationControlSums];
    }

}