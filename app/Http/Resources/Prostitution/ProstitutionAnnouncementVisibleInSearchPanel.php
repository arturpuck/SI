<?php

namespace App\Http\Resources\Prostitution;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystem;

class ProstitutionAnnouncementVisibleInSearchPanel extends JsonResource
{
    private ProstitutionAnnouncementsFileSystem $fileSystem;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $this->fileSystem ??= new ProstitutionAnnouncementsFileSystemService();
        return [
            'announcementURL' => $this->fileSystem->getAnnouncementURL($this->uniqueID),
            'nickname' => $this->nickname,
            'age' => $this->getAge(),
            'thumbnailURL' => $this->fileSystem->getThumbnailURL($this->resource)
        ];
    }

}
