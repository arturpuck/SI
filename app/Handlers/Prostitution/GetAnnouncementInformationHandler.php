<?php

namespace App\Handlers\Prostitution;

use App\ProstitutionAnnouncement;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Prostitution\GetProstituteAnnouncementRequest;
use App\CustomQueryBuilders\Prostitution\ProstitutionAnnouncementQueryBuilder;
use App\Http\Resources\Prostitution\ProstitutionAnnouncementBasicInfoResource;
use App\Http\Resources\Prostitution\ProstitutionAnnouncementEditorFormResource;

final class GetAnnouncementInformationHandler
{
    private ProstitutionAnnouncementQueryBuilder $announcementsQuery;
    private GetProstituteAnnouncementRequest $request;

    public function __construct()
    {
        $this->announcementsQuery = ProstitutionAnnouncement::query();
    }

    public function handle(GetProstituteAnnouncementRequest $request)
    {
        $this->request = $request;
        $this->announcementsQuery->with(['region', 'city']);
        $this->processUserID();
        $announcements = $this->announcementsQuery->get();
        return $this->basicInformationIsRequired() ?
         ProstitutionAnnouncementBasicInfoResource::collection($announcements) :
         ProstitutionAnnouncementEditorFormResource::collection($announcements);
        

    }
    
    protected function processUserID() : void 
    {
        if(!$this->request->has('userID')) {
            return;
        }
        $userID = $this->request->get('userID');
        $filterByAuthenticatedUser = !is_numeric($userID);
        if($filterByAuthenticatedUser) {
            $this->announcementsQuery->assignedToCurrentLoggedUser();
            return;
        }
        $this->announcementsQuery->filterByUserID(intval($userID));
    }

    protected function basicInformationIsRequired() : bool
    {
        return $this->request->get('detailsLevel') === 'basic';
    }

}