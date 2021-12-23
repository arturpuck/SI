<?php

namespace App\Handlers\PornDictionary;

use App\Http\Requests\PornDictionary\ShowPornDictionaryRequest;
use Illuminate\View\View;
use App\PornDictionaryTerm;

class ShowPornDictionaryHandler
{
    public function handle(ShowPornDictionaryRequest $request) //: View
    {
       $range = $request->route('range') ?? 'a-c';
       $range = strtoupper($range);
       $rangeSymbols = explode('-', $range);
       $pornDictionaryTerms = PornDictionaryTerm::query()
                                                 ->filterByFirstLetterInAlphabeticalRange($rangeSymbols[0])
                                                 ->filterByLastLetterInAlphabeticalRange($rangeSymbols[1])
                                                 ->withTranslationsInCurrentLanguage()
                                                 ->get();
        
       return view('porn_dictionary')->with(compact('range', 'pornDictionaryTerms'));
    }
}