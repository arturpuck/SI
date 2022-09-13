<?php

namespace App\CustomQueryBuilders\Movie;

use Illuminate\Database\Eloquent\Builder;

class MovieQueryBuilder extends Builder
{

    public function randomizedTheMostPopular(int $numberOfMovies = 20): self
    {
        $this->orderBy('views', 'DESC')
             ->skip(rand(1,100))
             ->take($numberOfMovies);
             
        return $this;
    }

    public function withBasicPornstarList() : self
    {

        $this->with(['pornstars' => function ($query) {

            $query->select(['nickname', 'pornstars.id']);
        }]);

        return $this;
    }

    public function sortByLastAdded() : self
    {
        $this->orderBy('id', 'DESC');
        return $this;
    }

}
