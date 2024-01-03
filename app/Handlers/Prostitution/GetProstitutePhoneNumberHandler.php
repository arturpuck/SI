<?php

namespace App\Handlers\Prostitution;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\Prostitution\GetProstitutePhoneNumberRequest;
use App\ProstitutionAnnouncement;

class GetProstitutePhoneNumberHandler
{

    public function handle(GetProstitutePhoneNumberRequest $request) : JsonResponse
    {
        $announcement = ProstitutionAnnouncement::query()
                                                ->filterByUniqueIdentifier($request->get('announcementUid'))
                                                ->get()
                                                ->first();

        return new JsonResponse(['phoneNumber' => $announcement->phone_number]);
    }

}