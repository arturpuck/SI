<?php

namespace App\Traits\Factories;

use App\User;
use App\Pornstar;

trait CommonFactoryCases 
{
    protected ?array $usersIDs = null;
    protected ?array $pornstarsIDs = null;

    protected function initiateUsers() : void
    {
        if (!$this->usersIDs) {
            $this->usersIDs = User::pluck('id')->toArray();
        }

    }

    protected function initiatePornstars() : void
    {
        if(!$this->pornstarsIDs){
            $this->pornstarsIDs = Pornstar::pluck('id')->toArray();
        }
    }



}