<?php

namespace App\ModelShards\Movie;

use App\MovieComment;

class MovieCommentShard
{


    public function __construct(
        public int $id,
        public string $userNickname,
        public string $body,
        public string $addedAgo,
        public ?string $avatarFilePath = null,
        public bool $addedByAuthenticatedUser = false
    ) {}
}
