<?php

namespace App\CustomQueryBuilders\PornDictionary;

use Illuminate\Database\Eloquent\Builder;

class PornDictionaryTermBuilder extends Builder
{
    public function filterByFirstLetterInAlphabeticalRange(string $firstLetter) : self
    {
        $this->where('name', '>=', $firstLetter);
        return $this;
    }

    public function filterByLastLetterInAlphabeticalRange(string $lastLetter) : self
    {
        //somehow it does not work as expected you have to switch to next letter
        $lastLetter = ucfirst($lastLetter);
        $lastLetter = $lastLetter === 'Z' ? $lastLetter : ++$lastLetter;
        $this->where('name', '<=', $lastLetter);
        return $this;
    }

    public function withTranslationsInCurrentLanguage() : self
    {
        $this->with('translationInCurrentLanguage');
        return $this;
    }

}