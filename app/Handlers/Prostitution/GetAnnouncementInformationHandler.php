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
        $this->processRequirements();
        $announcements = $this->announcementsQuery->get();
        return $this->basicInformationIsRequired() ? ProstitutionAnnouncementBasicInfoResource::collection($announcements) :
            ProstitutionAnnouncementEditorFormResource::collection($announcements);
            
        }
        
    protected function processRequirements() : void
    {
        $this->announcementsQuery->with(['region', 'city']);
        $this->processUserID();
        $this->processAnnouncementID();
    }

    protected function processAnnouncementID() : void 
    {
        if($uniqueIdentifier = $this->request->query('announcementUniqueIdentifier')) {
            $this->announcementsQuery->filterByUniversallyUniqueIdentifier($uniqueIdentifier);
        }
    }
    
    protected function processUserID() : void 
    {
        $this->announcementsQuery->assignedToCurrentLoggedUser();
    }

    protected function basicInformationIsRequired() : bool
    {
        return $this->request->query('detailsLevel') === 'basic';
    }

}