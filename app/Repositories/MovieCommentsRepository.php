<?php

namespace App\Repositories;

use App\MovieComment;


Class MovieCommentsRepository extends BaseRepository{

    public const MODEL_NAME = MovieComment::class;

    public function chronological() : MovieCommentsRepository {

        $this->query = $this->query->orderBy('created_at', 'desc');
        return $this;
    }

    public function filterByMovieID(int $movieID) : MovieCommentsRepository {

        $this->query = $this->query->where('movie_id', $movieID);
        return $this;
    }
}