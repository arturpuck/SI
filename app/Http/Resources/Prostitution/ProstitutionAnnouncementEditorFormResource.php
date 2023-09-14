<?php

namespace App\Http\Resources\Prostitution;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Traits\ColumnToRequestField;
use App\City;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystemService;
use App\Services\Prostitution\Announcements\ProstitutionAnnouncementsFileSystem;

class ProstitutionAnnouncementEditorFormResource extends JsonResource
{
    use ColumnToRequestField;

    public const DESIRED_COLUMNS = [
        'id',
        'nickname',
        'region_id',
        'city_id',
        'user_typ_id',
        'birth_date',
        'tits_size',
        'phone_number',
        'description',
        'sexual_orientation_id',
        'user_type_id',
        'hair_color',
        'height_in_centimeters',
        'weight_in_kilograms',
        'main_services',
        'payment_forms',
        'last_generated_token',
        'any_photo_awaits_validation',
        'secondary_services',
        'working_hours'
    ];

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $result = [];

        foreach(self::DESIRED_COLUMNS as $column) {
            if(isset($this->$column)) {
                $field = $this->translateColumnNameToRequestFieldName($column);
                $result[$field] = $this->$column;
            }
        }
        $result['photosURLs'] = $this->getPhotosURLs();
        $result['cities'] = $this->getCitiesForRegion($this->region_id);
        return $result;
    }

    private function getPhotosURLs() : array 
    {
        $prostitutionPhotosFileSystem = new ProstitutionAnnouncementsFileSystemService();
        return $prostitutionPhotosFileSystem->getAllPhotosURLs($this->uniqueID, $this->any_photo_awaits_validation);
    }

    private function getCitiesForRegion(int $regionID) : array
    {
        return City::select('id', 'name')
                    ->where('voivodeship_id', $regionID)
                    ->get()
                    ->toArray();
        
    }
    
}
