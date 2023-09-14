<?php

namespace App\Console\Commands\Prostitution;

use Illuminate\Console\Command;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsValidationService;

class AcceptProstitutePhotos extends Command
{
   
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'accept:prostitute-photos {announcementUID}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command activates an announcement and makes it visible for users.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $announcementUID = $this->arguments()['announcementUID'];
        $photosValidationService = new ProstitutionAnnouncementsValidationService();
        $photosValidationService->acceptPhotos($announcementUID);
    }
}
