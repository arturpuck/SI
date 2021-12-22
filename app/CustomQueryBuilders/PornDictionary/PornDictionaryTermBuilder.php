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
        if($lastLetter == 'z'){ //somehow it does not work as expected you have to switch to next letter
            return $this;
        }
        $this->where('name', '<=', ++$lastLetter);
        return $this;
    }

    public function withTranslationsInCurrentLanguage() : self
    {
        $this->with('translationsInCurrentLanguage');
        return $this;
    }

}