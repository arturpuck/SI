<?php

namespace App\Traits\Models;

use App\Traits\NiceURLGenerator;

trait PornstarDataExtractor
{

  use NiceURLGenerator;

  public function getProfileLink() : string 
  {
      $nickname = ucwords($this->nickname);
      $nickname = str_replace(' ', '-', $nickname);
      return $this->generateNiceURL('pornstars.profile', compact('nickname'));
  }

  public function getImageFileName() : string 
  {
     return str_replace(' ', '_', $this->nickname).".jpg";
  }

  public function getImageURL() : string
  {
      return url(self::SMALL_PROFILE_IMAGE_PATH.$this->getImageFileName());
  }
}