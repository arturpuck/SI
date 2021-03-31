<?php namespace App\Traits;

Trait FloatFromDatabase {

   public function getFloatFromDatabase(string $attribute, int $precision = 2) : float{
     $value = $this->$attribute;

     if($value === null){
        return null;
     }

     if(!is_integer($value)){
        throw new \Exception('Attribute value is not an integer');
     }

     $divideBy = 10 ** $precision;
     return round($value / $divideBy,$precision);

   }
}