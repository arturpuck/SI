<?php

namespace App\Http\Resources\Prostitution;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Traits\ColumnToRequestField;

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
        'phone_number',
        'description',
        'sexual_orientation_id',
        'hair_color',
        'height_in_centimeters',
        'weight_in_kilograms',
        'main_services',
        'payment_forms',
        'last_generated_token',
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
        return $result;
    }

    private function getPhotosURLs() : array 
    {
        return $this->isVerified() ? $this->getAcceptedPhotosURLs() : $this->getPhotosURLsAwaitingVerification();
    }
    
}
