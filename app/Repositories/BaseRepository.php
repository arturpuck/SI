<?php

namespace App\Repositories;

use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;

Abstract Class BaseRepository{

    protected  $query;

    public function __construct(){
       $model = static::MODEL_NAME;
       $this->query = $model::query();
    }

    public function get(){
      return $this->query->get();
    }
}