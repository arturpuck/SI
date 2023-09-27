<?php

namespace App\CustomQueryBuilders\Prostitution;

use Illuminate\Database\Eloquent\Builder;

class ProstitutionAnnouncementQueryBuilder extends Builder 
{
    public function onlyAwaitingVerification() : self
    {
        $this->whereNull('valid_until');
        return $this;
    }

    public function assignedToCurrentLoggedUser() : self
    {
        $this->where('user_id', auth()->user()->id);
        return $this;
    }

    public function filterByUserID(int $userID) : self 
    {
        $this->where('user_id', $userID);
        return $this;
    }

    public function filterByUniversallyUniqueIdentifier(string $uniqueIdentifier) : self
    {
        $this->where('uniqueID', $uniqueIdentifier);
        return $this;
    }

    public function filterByPhotoUniqueIdentifier(string $uniqueIdentifier) : self
    {
        $this->whereNotNull('photos_control_sum->'.$uniqueIdentifier);
        return $this;
    }

    public function filterByUniqueIdentifier(string $uniqueID) : self
    {
        $this->where('uniqueID', $uniqueID);
        return $this;
    }

    public function filterByOnlyApproved() : self
    {
        $this->where('valid_until', '=>', date('Y-m-d'));
        return $this;
    }

    public function filterByCityId(int $cityId) : self
    {
        $this->where('city_id', $cityId);
        return $this;
    }

    public function filterByVoivodeshipId(int $voivodeshipId) : self
    {
        $this->where('region_id', $voivodeshipId);
        return $this;
    }

    public function filterByUserTypeId(int $userTypeId) : self
    {
        $this->where('user_type_id', $userTypeId);
        return $this;
    }
}