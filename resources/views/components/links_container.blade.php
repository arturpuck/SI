<links-box v-bind:links-amount="{{$elements->numberOfPages()}}" v-bind:current-page="{{$elements->pageNumber()}}">

  <template v-slot:pages-list>
    @foreach($elements->links() as $index => $link)
         <li class="pagination-link-list-element">
            @if($index == $elements->pageNumber())
               <a class="pagination-link current-page-link">{{ $index }}</a>
            @else
               <a href="{{ $link }}" class="pagination-link">{{ $index }}</a>
            @endif
         </li>
    @endforeach
  </template>

  <template v-slot:aditional-links>
    @if(!$elements->onFirstPage())
      <li class="aditional-link-list-element">
         <span class="fas fa-angle-left"></span>
         <a href="{{$elements->previousPageURL()}}" class="aditional-link">{{__('previous_page')}}</a>
      </li>
    @endif

    <li class="aditional-link-list-element">
         <span class="fas fa-fast-backward"></span>
         <a href="{{$elements->firstPageURL()}}" class="aditional-link">{{__('first_page')}}</a>
      </li>
      <li class="aditional-link-list-element">
         <a href="{{$elements->lastPageURL()}}" class="aditional-link">{{__('last_page')}}</a>
         <span class="fas fa-fast-forward"></span>
      </li>

    @if($elements->hasMorePages())
      <li class="aditional-link-list-element">
         <a href="{{$elements->nextPageURL()}}" class="aditional-link">{{__('next_page')}}</a>
         <span class="fas fa-angle-right"></span>
      </li>
    @endif
  </template>
  
</links-box>