<?php

namespace App;

use App\CustomQueryBuilders\PornDictionary\PornDictionaryTermBuilder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use App\PornDictionaryTermTranslation;
use Illuminate\Support\Facades\App;

class PornDictionaryTerm extends Model
{
    use HasFactory;

    public function translations() : Relation
    {
       return $this->hasMany(PornDictionaryTermTranslation::class, 'term_id');
    }

    public function translationsInCurrentLanguage() : Relation
    {
        return $this->translations()->where('language_shortcut', App::getLocale());
    }

    public function newEloquentBuilder($query) : PornDictionaryTermBuilder
    {
        return new PornDictionaryTermBuilder($query);
    }
}
