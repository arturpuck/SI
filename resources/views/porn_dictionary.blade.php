<x-base title="{{__('porn_dictionary_title')}}" description="{{__('porn_dictionary_description')}}">
 <main class="main-content">
     <header>
         <h1 class="dictionary-header">
             {{__('porn_dictionary_header')}} 
             <dictionary-icon class="header-icon"></dictionary-icon>
        </h1>
         <p class="dictionary-introduction">
            <info-circle-icon class="info-icon"></info-circle-icon>
             {{__('porn_dictionary_introduction')}}
        </p>
     </header>
     <div class="current-dictionary-range">
        <div>{{__('you_are_currently_browsing_terms_in_range')}} : <span class="current-range">{{$range}}</span></div>
        <div>{{__('select_term_ranges')}}</div>
     </div>
     <nav>
        <uli class="ranges-list">
            <li><a href="{{route('dictionary.list', ['range' => 'a-c'])}}" class="dictionary-range-link">A-C</a></li>
            <li><a href="{{route('dictionary.list', ['range' => 'd-g'])}}" class="dictionary-range-link">D-G</a></li>
            <li><a href="{{route('dictionary.list', ['range' => 'h-z'])}}" class="dictionary-range-link">H-Z</a></li>
        </uli>
     </nav>
     <dl class="dictionary">
         @foreach($pornDictionaryTerms as $pornDictionaryTerm)
         <dt class="dictionary__term">{{$pornDictionaryTerm->getTermDisplayedInDictionary()}}</dt>
         <dd class="dictionary__description">{{$pornDictionaryTerm->getDescriptionDisplayedInDictionary()}}</dd>
         @endforeach
     </dl>
 </main>
</x-base>