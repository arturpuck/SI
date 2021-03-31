<?php namespace App\Traits;

trait Slugifier{

    public function slugify(string $attribute) : string {

        return str_replace([' ', ':', ')', '(', '?', '!', '.', ','],
                           ['-', '','', '', '','', '', ''], 
                          $this->$attribute);
    }
}