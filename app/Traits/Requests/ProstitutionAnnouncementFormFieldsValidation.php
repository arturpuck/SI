<?php

namespace App\Traits\Requests;

use Illuminate\Support\Facades\Session;

trait ProstitutionAnnouncementFormFieldsValidation
{

    protected function getVerificationToken() : void
    {
        $this->merge(['verificationToken' => Session::get('prostitutePhotoVerificationToken')]);
    }

    protected function getSecondaryServices() : void 
    {
        if(!$this->has('secondaryServices')) {
            return;
        }
        $secondaryServices = $this->get('secondaryServices');

        if(!is_string($secondaryServices)) {
            return;
        }
        $secondaryServices = json_decode($secondaryServices);
        $this->merge(compact('secondaryServices'));
    }

    protected function getWorkingHours() : void
    {
            if(!$this->has('workingHours')) {
                return;
            }

            $workingHours = $this->get('workingHours');
            if(!is_string($workingHours)) {
                return;   
            }

            if(is_array($workingHours = json_decode($workingHours, true))) {
                $this->merge(compact('workingHours'));
            }
        
    }

    protected function getPhotos() : void
    {
        $photos = [];
        foreach($this->files as $file) {
            $photos[] = $file;
        }
        if(count($photos) > 0) {
            $this->merge(compact('photos'));
        }
    }

    protected function getPaymentForms() : void
    {
        if(!$this->has('paymentForms')) {
            return;
        }

        $paymentForms = $this->get('paymentForms');
        if(!is_string($paymentForms)) {
            return;   
        }
            
        if(is_array($paymentForms = json_decode($paymentForms, true))) {
            $this->merge(compact('paymentForms'));
        }

    }

    protected function getWorkingDays() : void
    {
        if(!$this->has('workingHours')) {
            return;
        }
        $workingHours = $this->get('workingHours');
        if(!is_array($workingHours)) {
            return;
        }
        $this->merge(['workingDays' => array_keys($workingHours)]);
    }
}