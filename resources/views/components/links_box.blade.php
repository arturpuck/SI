<links-box v-bind:links-amount="{{$movies->lastPage()}}">
   <template v-slot:previous-page>
      @if(!$movies->onFirstPage())
      <li class="next-previous-list-element">
         <span class="fas fa-angle-left"></span>
         <a href="{{$movies->previousPageUrl()}}" class="previous-next-link">{{__('previous_page')}}</a>
      </li>
      @else
      <li class="next-previous-list-element disabled-list-element">
         <span class="fas fa-angle-left"></span>
         <a disabled class="previous-next-link disabled-previous-next-link">{{__('previous_page')}}</a>
      </li>
      @endif
   </template>

   <template v-slot:next-page>
      @if($movies->hasMorePages())
      <li class="next-previous-list-element">
         <a href="{{$movies->nextPageUrl()}}" class="previous-next-link">{{__('next_page')}}</a>
         <span class="fas fa-angle-right"></span>
      </li>
      @else
      <li class="next-previous-list-element disabled-list-element">
         <a disabled class="previous-next-link disabled-previous-next-link">{{__('next_page')}}</a>
         <span class="fas fa-angle-right"></span>
      </li>
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