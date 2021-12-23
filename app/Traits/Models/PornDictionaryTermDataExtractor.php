<?php

namespace App\Traits\Models;


trait PornDictionaryTermDataExtractor
{
    public function getTermDisplayedInDictionary(): string
    {
        $translatedName = $this->translationInCurrentLanguage->first()->translated_name;
        return $translatedName === null ? $this->name :"$this->name : $translatedName";
    }

    public function getDescriptionDisplayedInDictionary(): string
    {
        return $this->translationInCurrentLanguage->first()->translated_description;
    }

}
