<?php

namespace App\Handlers\Prostitution;

use App\Http\Requests\Prostitution\SearchProstitutionAnnouncementsRequest;
use Illuminate\Http\JsonResponse;
use App\ProstitutionAnnouncement;
use App\Http\Resources\Prostitution\ProstitutionAnnouncementVisibleInSearchPanel;
use Illuminate\Http\Resources\Json\JsonResource;

class SearchProstitutionAnnouncementsHandler {

    public function handle(SearchProstitutionAnnouncementsRequest $request) : JsonResource
    {
        $query = ProstitutionAnnouncement::query();

        if($userTypeId = $request->query->get('userTypeId')) {
            $query->filterByUserTypeId($userTypeId);
        }

        if($cityId = $request->query->get('cityId')) {
            $query->filterByCityId($cityId);
        }

        if($voivodeshipId = $request->query->get('voivodeshipId')) {
            $query->filterByVoivodeshipId($voivodeshipId);
        }
        
        return ProstitutionAnnouncementVisibleInSearchPanel::collection($query->get());
    } 

}