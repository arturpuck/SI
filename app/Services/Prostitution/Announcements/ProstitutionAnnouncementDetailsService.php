<?php

namespace App\Services\Prostitution\Announcements;

use App\ProstitutionAnnouncement;
use Exception;

class ProstitutionAnnouncementDetailsService
{
    const MINIMAL_SERVICES_PREFERENCE = [
        'analPreference',
        'blowjobPreference',
        'vaginalSexPreference',
        'kissingPreference',
        'cumOnFacePreference',
        'cumSwallowPreference'
    ];
    public function getTitleForView(ProstitutionAnnouncement $announcement): string
    {
        return __('erotic_announcement').' : '.
        $announcement->nickname.' - '.__('age').' : '.
        $announcement->getAge().', '.
        $announcement->region->name.', '.
        $announcement->city->name;
    }
    public function getDescriptionAttributeForView(ProstitutionAnnouncement $announcement): string
    {
        if($announcement->description) {
            return substr($announcement->description,0,160);
        }

        $result = __('services_provided_by_user').' : '.$announcement->nickname.'. ';
        $servicesList = json_decode($announcement->main_services, true);
        if(!is_array($servicesList) || count($servicesList) === 0) {
            throw new Exception('The prostitution announcement services list is empty');
        }
        
        foreach($servicesList as $service => $status) {
            if(in_array($service, self::MINIMAL_SERVICES_PREFERENCE)) {
                $result .= ucfirst(__($service)).' : '.__($status).'. ';
            }
        }
        $paymentOptions = json_decode($announcement->payment_forms,true);
        if(!is_array($paymentOptions) || count($paymentOptions) === 0) {
            throw new Exception('The prostitution payments list is empty');
        }

        foreach($paymentOptions as $paymentOption) {
            $result .= ucfirst(__($paymentOption['unit'])).' : '.$paymentOption['price'].'. ';
        }
        return $result;
    }
}
