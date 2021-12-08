<?php

namespace App\Traits;

trait NiceURLGenerator
{
   public function generateNiceURL(string $routeName, array $routeParameters) : string 
   {
      $blankParameters = [];
      $counter = 1;
      foreach($routeParameters as $key => $value){
         $blankParameters[$key] = "blank-$counter";
         ++$counter;
      }
      $routeParameters = array_map(fn($value) => str_replace(' ', '-', $value), array_values($routeParameters));
      return str_replace($blankParameters, $routeParameters, route($routeName, $blankParameters));
   }
}