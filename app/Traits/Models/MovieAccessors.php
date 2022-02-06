<?php

namespace App\Traits\Models;

trait MovieAccessors
{
    public function getActressTitsSize(): ?string
    {
        return $this->actress_ass_size;
    }

    public function getAnalPercentage(): ?int
    {
        return $this->anal_percentage;
    }

    public function getBlowjobPercentage(): ?int
    {
        return $this->blowjob_percentage;
    }

    public function getActressHairColor(): ?string
    {
        return $this->actress_hair_color;
    }

    public function getTittFuckPercentage() : ?int 
    {
        return $this->tittfuck_percentage;
    }

    public function getPussyLickingPercentage() : ?int 
    {
        return $this->pussy_licking_percentage;
    }

    public function getFeetPettingPercentage() : ?int 
    {
        return $this->feet_petting_percentage;
    }

    public function getAbundanceType() : ?string 
    {
        return $this->abundance;
    }

    public function getActressAgeRange() : ?string
    {
        return $this->actress_age_range;
    }

    public function getActressRace() : ?string 
    {
       return $this->actress_race;
    }

    public function getCumshotType() : ?string
    {
        return $this->actor_cumshot_type;
    }

    public function getStoryOrCostumeType() : ?string
    {
        return $this?->storyOrCostumeType?->name;
    }

    public function getActressNationality() : ?string
    {
        return $this?->actressNationality?->name;
    }

    public function getCameraStyle() : ?string
    {
        return $this->camera_style;
    }

    public function getActionLocation() : ?string
    {
        return $this?->location?->name;
    }

    public function getTitle() : string
    {
        return $this->title;
    }

    public function getUploadDate() : string
    {
        return $this->created_at;
    }

    public function getDuration() : string
    {
        return $this->duration;
    }

}
