<?php

namespace App\Http\Resources\Comment;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
          'userNickname' => $this->nickname ?? $this->user->login,
          'body' => $this->comment,
          'avatarFilePath' => $this->avatar_file_path,
          'addedAgo' => $this->added_ago,
          'addedByAuthenticatedUser' => boolval($this->user)
        ];
    }
}
