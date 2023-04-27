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
}