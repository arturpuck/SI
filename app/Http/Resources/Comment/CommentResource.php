<?php

namespace App\Http\Resources\Comment;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Comment\CommentCollection;

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
          'id' => $this->id,
          'userNickname' => $this->nickname ?? $this->user->login,
          'body' => $this->comment,
          'avatarFilePath' => $this->user->avatar_file_path ?? '',
          'addedAgo' => $this->added_ago,
          'addedByAuthenticatedUser' => boolval($this->user),
          'numberOfChildComments' => intval($this->childComments?->count()),
          'createdAt' => $this->created_at
        ];

    }
}
