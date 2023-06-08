<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use App\Http\Requests\Prostitution\UpdateProstitutionAnnouncementRequest;
use App\ProstitutionAnnouncement;
use Illuminate\Support\Arr;

final class UpdateProstitutionAnnouncementHandler
{
    private ProstitutionAnnouncement $announcement;
    private array $filteredRequest;

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

    public function handle(UpdateProstitutionAnnouncementRequest $request) : Response
    {
        $this->announcement = ProstitutionAnnouncement::find($request->get('id'));
        $this->filteredRequest = Arr::except($request->validated(),['workingDays', 'id']);
        foreach($request->validated() as $key => $value) {
            $methodName = $this->getMethodName($key, $value);
            $this->$methodName($key, $value);
        }
        $this->announcement->save();
        return new Response(status:200);
    }

    private function getMethodName(string $field) : string
    {
        return array_has_key($field, self::SPECIAL_TREATMENT_COLUMNS) ? self::SPECIAL_TREATMENT_COLUMNS[$field] : self::SIMPLE_ASSIGNEMENT_METHOD_NAME;
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
        $this->announcement[$key] = $value;
    }

    private function getPhotosStorageDirectory() : string
    {
        $currentUserID = auth()->user()->id;
        return config('filesystems.prostitution.photos').
               $currentUserID.'/'.
               config('filesystems.prostitution.photos_directory_awaiting_verification');
    }

    private function updatePhotos() : void 
    {
        $photosStorageDirectory = $this->getPhotosStorageDirectory();
        foreach($this->filteredRequest['photos'] as $photo) {
            $fileName = $photosStorageDirectory.'/'.$photo->getClientOriginalExtension();
            if(file_exists($fileName)) {
                unlink($fileName);
                $photo->move($photosStorageDirectory, $fileName);
            }
        } 
    }

}