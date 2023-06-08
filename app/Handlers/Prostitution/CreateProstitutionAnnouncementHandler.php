<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\Response;
use App\ProstitutionAnnouncement;
use App\Http\Requests\Prostitution\CreateProstitutionAnnouncementRequest;
use App\Traits\ColumnToRequestField;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;

final class CreateProstitutionAnnouncementHandler
{
    use ColumnToRequestField;

    private CreateProstitutionAnnouncementRequest $request;
    private ProstitutionAnnouncement $announcement;
    private string $universallyUniqueIdentifier;

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
        $this->universallyUniqueIdentifier = Str::uuid();
        $this->announcement->universally_unique_identifier = $this->universallyUniqueIdentifier;
        $this->assignPersonalities();
        $this->assignServices();
        $this->assignPaymentForms();
        $this->processPhotos();
        $this->assignLocationAndWorkingHours();
        $this->announcement->save();
        Session::remove('verificationToken');
        return new Response(status:201);
    }

    private function processPhotos() : void 
    {
        $storageDirectory = $this->getPhotosStorageDirectory();
        $controlSums = [];
        foreach($this->request->get('photos') as $index => $photo) {
            $newFileName = $index.'.'.$photo->getClientOriginalExtension();
            $photo->move($storageDirectory, $newFileName);
            $controlSums[$newFileName] = hash_file('sha256', $storageDirectory.'/'.$newFileName);
        }
        $this->announcement->last_generated_token = $this->request->get('verificationToken');
        $this->announcement->any_photo_awaits_validation = true;
        $this->announcement->photos_control_sum = json_encode($controlSums);
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
               $this->universallyUniqueIdentifier.'/'.
               config('filesystems.prostitution.photos_directory_awaiting_verification');
    }


    private function assignPersonalities() : void 
    {
        foreach(self::PERSONALITIES_COLUMNS as $columnName) {
            $requestFieldName = $this->translateColumnNameToRequestFieldName($columnName);
            $this->announcement->$columnName = $this->request->get($requestFieldName); 
        }
        $this->announcement->user_id = auth()->user()->id;
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
            $this->announcement->secondary_services = json_encode($this->request->get('secondaryServices'));
        }

    }

    private function assignPaymentForms() : void
    {
        $this->announcement->payment_forms = json_encode($this->request->get('paymentForms'));
    }

}