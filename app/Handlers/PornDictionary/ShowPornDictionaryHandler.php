<?php

namespace App\Handlers\PornDictionary;

use App\Http\Requests\PornDictionary\ShowPornDictionaryRequest;
use Illuminate\View\View;
use App\PornDictionaryTerm;

class ShowPornDictionaryHandler
{
    public function handle(ShowPornDictionaryRequest $request) //: View
    {
       $rangeSymbols = $request->route('range') ?? 'a-c';
       $rangeSymbols = explode('-', $rangeSymbols);
       $pornDictionaryTerms = PornDictionaryTerm::query()
                                                 ->filterByFirstLetterInAlphabeticalRange($rangeSymbols[0])
                                                 ->filterByLastLetterInAlphabeticalRange($rangeSymbols[1])
                                                 ->withTranslationsInCurrentLanguage()
                                                 ->get();
        
       dd($pornDictionaryTerms);
    }
}