<?php

namespace App\Http\Resources\Prostitution;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class ProstitutionAnnouncementCommentDisplayedOnCommentList extends JsonResource
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
            'body' => $this->body,
            'userNickname' => $this->user->login,
            'addedAgo' => Carbon::createFromTimeStamp(strtotime($this->created_at))->diffForHumans(),
            'avatarURL' => $this->user->avatar_file_path,
        ];
    }
}
