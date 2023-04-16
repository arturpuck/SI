<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use App\ProstitutionAnnouncement;
use App\Http\Requests\Prostitution\CreateProstitutionAnnouncementRequest;

final class CreateProstitutionAnnouncementHandler
{
    private CreateProstitutionAnnouncementRequest $request;
    private ProstitutionAnnouncement $announcement;

    const PERSONALITIES_COLUMNS = [
        'nickname',
        'phone_number',
        'birth_date',
        'description',
        'user_type_id',
        'sexual_orientation_id',
        'tits_size',
        'height_in_centimeters',
        'weight_in_kilograms',
        'tits_size',
        'hair_color'
    ];

    const SEX_SERVICES_CORE_KEYS = [
        'massage',
        'vaginalSex',
        'blowjob',
        'oralCreampie',
        'cumSwallow',
        'cumOnFace',
        'anal',
        'pussyLicking',
        'clientRimming',
        'kissing',
        'cumOnBody',
        'trips'
    ];

    public function handle(CreateProstitutionAnnouncementRequest $request) : Response
    {
        $this->request = $request;
        $this->announcement = new ProstitutionAnnouncement();
        $this->assignPersonalities();
        $this->assignServices();
        $this->assignPaymentForms();
        $this->movePhotos();
        $this->assignLocationAndWorkingHours();
        $this->announcement->save();
        return new Response(status:200);
    }

    private function movePhotos() : void 
    {
        $storageDirectory = $this->getPhotosStorageDirectory();
        foreach($this->request->file('photos') as $photo) {
            $photo->storeAs($storageDirectory, $photo->getClientOriginalName());
        }
    }

    private function assignLocationAndWorkingHours() : void
    {
        if($this->request->has('workingHours')) {
            $this->announcement->working_hours = json_encode($this->request->get('workingHours'));
        }
        $this->announcement->city_id = $this->request->get('cityId');
        $this->announcement->region_id = $this->request->get('regionId');
    }

    private function getPhotosStorageDirectory() : string
    {
        $currentUserID = auth()->user()->id;
        return config('filesystems.prostitution.photos').
               $currentUserID.'/'.
               config('filesystems.prostitution.photos.awaiting_verification');
    }


    private function assignPersonalities() : void 
    {
        foreach(self::PERSONALITIES_COLUMNS as $columnName) {
            $requestFieldName = $this->translateColumnNameToRequestFieldName($columnName);
            $this->announcement->$columnName = $this->request->get($requestFieldName); 
        }
    }

    private function assignServices() : void
    {
        $mainServices = [];
        foreach(self::SEX_SERVICES_CORE_KEYS as $coreKey) {
            $preferenceKey = $coreKey.'Preference';
            if(!$this->request->has($preferenceKey)) {
                continue;
            }
            $mainServices[$preferenceKey] = $this->request->get($preferenceKey);
            $aditionalPaymentKey = $coreKey.'AditionalPayment';
            if($this->request->has($aditionalPaymentKey)) {
                $mainServices[$aditionalPaymentKey] = $this->request->get($aditionalPaymentKey);
            }
        }
        
        $this->announcement->main_services = json_encode($mainServices);
        if($this->request->has('secondaryServices')) {
            $this->announcement->aditional_services = json_encode($this->request->get('secondaryServices'));
        }

    }

    private function assignPaymentForms() : void
    {
        $this->announcement->payment_forms = json_encode($this->request->get('paymentForms'));
    }

    private function translateColumnNameToRequestFieldName(string $fieldName) : string
    {
        $parts = explode($fieldName, '_');
        if(count($parts) === 1) {
            return $fieldName;
        }
        $result = array_shift($parts);
        foreach($parts as $part) {
            $result .= ucfirst($part);
        }
        return $result;
    }

}