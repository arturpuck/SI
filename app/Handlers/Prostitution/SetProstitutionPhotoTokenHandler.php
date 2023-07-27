<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\Traits\Prostitution\PhotoTokenGenerator;
use Illuminate\Support\Facades\Session;

final class SetProstitutionPhotoTokenHandler
{
    use PhotoTokenGenerator;

    public function handle() : JsonResponse
    {
        $photoToken = $this->generatePhotoToken();
        Session::put('prostitutePhotoVerificationToken', $photoToken);
        $test = Session::get('prostitutePhotoVerificationToken');
        return new JsonResponse(compact('photoToken'),200);
    }

}