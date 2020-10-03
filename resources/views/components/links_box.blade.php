<links-box v-bind:max-offset="{{$movies->lastPage() - 1}}">
   <template v-slot:previous-page>
      @if(!$movies->onFirstPage())
         <a href="{{$movies->previousPageUrl()}}" class="previous-next-link">{{__('previous_page')}}</a>
      @else
         <a disabled class="previous-next-link disabled-previous-next-link">{{__('previous_page')}}</a>
      @endif
   </template>

   <template v-slot:next-page>
      @if($movies->hasMorePages())
         <a href="{{$movies->nextPageUrl()}}" class="previous-next-link">{{__('next_page')}}</a>
      @else
         <a disabled class="previous-next-link disabled-previous-next-link">{{__('next_page')}}</a>
      @endif
   </template>

  <template v-slot:pages-list>
    @foreach($elements as $element)
      @if(is_array($element))
        @foreach($element as $page => $url)
          <li class="pagination-link-list-element">
              @if($page == $movies->currentPage())
                  <a class="pagination-link current-page-link">{{ $page }}</a>
              @else
                  <a href="{{ $url }}" class="pagination-link">{{ $page }}</a>
              @endif
           </li>
        @endforeach
      @endif
    @endforeach
  </template>
  
</links-box>