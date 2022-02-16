<?php

namespace App\Http\Resources\Movie;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Pornstar\PornstarResource;

class MovieDetailResource extends JsonResource
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
            'created_at' => $this->created_at,
            'duration' => $this->getDurationForHumans(),
            'id' => $this->id,
            'likes' => $this->getComplexLikesData(\Auth::user()?->id),
            'pornstars' => PornstarResource::collection($this->whenLoaded('pornstars')),
            'rating' => $this->getRatings(\Auth::user()?->id),
            'spermatozoids' => $this->getSpermatozoids(\Auth::user()?->id),
            'title' => $this->title,
            'views' => $this->views,
        ];
    }
}
