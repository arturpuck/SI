<?php

namespace App\Http\Resources\Prostitution;

use Illuminate\Http\Resources\Json\JsonResource;

class ProstitutionAnnouncementBasicInfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nickname' => $this->nickname,
            'region' => $this->region->name,
            'city' => $this->city->name,
            'phoneNumber' => $this->phone_number,
            'hiddenByAUser' => boolval($this->hidden_by_a_user),
        ];
    }
}
