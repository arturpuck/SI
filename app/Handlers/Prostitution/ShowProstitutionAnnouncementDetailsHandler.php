<?php

namespace App\Handlers\Prostitution;

use App\ProstitutionAnnouncement;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use Exception;

class ShowProstitutionAnnouncementDetailsHandler
{
    private const WEEKDAYS = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ];

    public function __construct(private ProstitutionAnnouncementsFileSystemService $fileSystemService){}

    public function handle(string $announcementUid) : array
    {
       $announcementCollection = ProstitutionAnnouncement::query()
                        ->with(['city', 'region'])
                        ->filterByUniqueIdentifier($announcementUid)
                        ->filterByOnlyApproved()
                        ->filterByVisibleOnly()
                        ->get();

        if($announcementCollection->isEmpty()) {
            throw new ModelNotFoundException(__('announcement_with_gived_uid_does_not-exist_or_is_not_approved'), 404);
        }
        $announcement = $announcementCollection->first();
        $urls = $this->fileSystemService->getAcceptedPhotosURLs($announcement);
        if(count($urls) === 0) {
            throw new Exception('This announcement has no photos');
        }
        $shortPhoneNumber = substr($announcement->phone_number,0, 6);
        return [
            'announcement' => $announcement,
            'urls' => $urls,
            'shortPhoneNumber' => $shortPhoneNumber,
            'mainServices' => $this->getMainServices($announcement),
            'weekdays' => self::WEEKDAYS
        ];
    }

    private function getMainServices(ProstitutionAnnouncement $announcement): array
    {
        $rawMainServices = json_decode($announcement->main_services, true);
        $result = [];
        foreach($rawMainServices as $name => $value) {
            if(str_contains($name, 'AditionalPayment')) {
                continue;
            }
            if($value === 'aditional_payment') {
                $coreKey = str_replace('Preference', '', $name);
                $newValue = $rawMainServices[$coreKey.'AditionalPayment'];
                $result[$name] = __('aditional_payment').' : '.$newValue.' PLN';
                continue;
            }

            if($value === 'without_condom_with_aditional_payments') {
                $result[$name] = __('without_condom_with_aditional_payments').' : '.$rawMainServices['blowjobAditionalPayment'].' PLN';
                continue;
            }
            $result[$name] = $value;
        }
        return $result;
    }

}