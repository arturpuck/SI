<?php

namespace App\Repositories;

use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;

Abstract Class BaseRepository{

    protected  $query;

    public function __construct(){
       $this->resetQuery();
    }

    public function get(){
      return $this->query->get();
    }

    public function select(array $columnNames): self{
        
        foreach($columnNames as $columnName){
              $this->query = $this->query->addSelect($columnName);
        }
  
      return $this;
  }

  public function with(array $relations) : self{
    
    $this->query = $this->query->with($relations);
    return $this;
  }

  public function resetQuery():void{

    $model = static::MODEL_NAME;
    $this->query = $model::query();
  }

  protected function multiplyWhere(array $columnNames, $value):void{

      foreach($columnNames as $column){
         $this->query = $this->query->where($column,$value);
      }
  
  }

  public function filterByPage(int $page, int $perPage = 100) : self {

     $skip = (intval($page) - 1) * $perPage;
     $this->query = $this->query
                        ->skip($skip)
                        ->take($perPage);
     return $this;
  }

  public function count():int{
   
     return $this->query->count();
  }
}