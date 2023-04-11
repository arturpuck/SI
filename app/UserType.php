<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    //

    public function isMale() : bool
    {
        return $this->user_type_name === 'male';
    }
}
