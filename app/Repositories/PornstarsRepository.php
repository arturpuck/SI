<?php

namespace App\Repositories;
use App\Pornstar;

Class PornstarsRepository extends BaseRepository{

    public const MODEL_NAME = Pornstar::class;

    public function alphabeticalOrderByNickName(string $direction = 'asc') : PornstarsRepository{
        $this->query = $this->query->orderBy('nickname', $direction);
        return $this;
    }
}