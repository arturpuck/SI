<?php

namespace App\Http\Resources\Movie;

use App\Http\Resources\Pornstar\PornstarResource;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
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
           'duration' => $this->getDurationForHumans(),
           'isTranslatedToPolish' => boolval($this->is_translated_to_polish),
           'pornstars' => PornstarResource::collection($this->whenLoaded('pornstars')),
           'title' => $this->title,
           'views' => $this->views
        ];
    }
}
