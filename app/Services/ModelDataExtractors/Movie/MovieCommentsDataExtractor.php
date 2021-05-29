<?php

namespace App\Services\ModelDataExtractors\Movie;

use App\ModelShards\Movie\MovieCommentShard;
use App\ModelShards\PageList;
use App\MovieComment;

class MovieCommentsDataExtractor
{

    public static function createCommentsPageList(int $totalElements, int $currentPage, MovieComment ...$movieComments): PageList
    {
        $movieCommentsShards = [];

        foreach ($movieComments as $movieComment) {
            $createdByAuthenticatedUser = boolval($movieComment->user);
            $userNickname = $createdByAuthenticatedUser ? $movieComment->user->login : $movieComment->nickname;

            $movieCommentsShards[] = new MovieCommentShard(
                $movieComment->id,
                $userNickname,
                $movieComment->comment,
                $movieComment->created_at,
                $movieComment->user?->avatar_file_path,
                $createdByAuthenticatedUser
            );
        }

        return new PageList($totalElements, $currentPage, ...$movieCommentsShards);
    }
}
