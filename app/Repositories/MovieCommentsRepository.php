<?php

namespace App\Repositories;

use App\ModelShards\PageList;
use App\MovieComment;
use App\Services\ModelDataExtractors\Movie\MovieCommentsDataExtractor;

class MovieCommentsRepository extends BaseRepository
{

    public const MODEL_NAME = MovieComment::class;

    public function chronological(): MovieCommentsRepository
    {

        $this->query = $this->query->orderBy('created_at', 'desc');
        return $this;
    }

    public function filterByMovieID(int $movieID): MovieCommentsRepository
    {

        $this->query = $this->query->where('movie_id', $movieID);
        return $this;
    }

    public function getPageList(int $movieID, int $pageNumber, int $perPage = 10): PageList
    {
        $totalComments = $this->chronological()
            ->filterByMovieID($movieID)
            ->count();

        $comments = $this->with(['user'])
            ->filterByPage($pageNumber, $perPage)
            ->get();
        
        return MovieCommentsDataExtractor::createCommentsPageList($totalComments, $pageNumber, ...$comments);
    }
}
