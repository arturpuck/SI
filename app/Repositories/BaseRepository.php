<?php

namespace App\Repositories;

use Illuminate\Database\Query\Builder;

Abstract Class BaseRepository{

    protected Builder  $query;
    public String $modelName;

    public function __construct(){
       $this->modelName = static::MODEL_NAME;
       $this->query = \DB::table($this->modelName);
    }

    public function get(){
      return $this->query->get();
    }
}