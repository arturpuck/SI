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
        $this->where('universally_unique_identifier', $uniqueIdentifier);
        return $this;
    }

    public function filterByPhotoUniqueIdentifier(string $uniqueIdentifier) : self
    {
        $this->whereNotNull('photos_control_sum->'.$uniqueIdentifier);
        return $this;
    }
}