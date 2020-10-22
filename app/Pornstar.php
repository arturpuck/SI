<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Nationality;
use Carbon\Carbon;

class Pornstar extends Model
{
    use HasFactory;

    public function nationality(){
        return $this->belongsTo(Nationality::class);
    }

    public function getAgeAttribute(){
        return Carbon::parse($this->born)->age;
    }
}
