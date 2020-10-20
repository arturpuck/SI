<x-base title="{{__('pornstars_list_page_title')}}" description="{{__('pornstars_list_page_description')}}">
 <main class="pornstars-list-content-all">
    <h1 class="pornstars-list-main-header">
       <span class="fas fa-star header-icon"></span>
         {{__('pornstars_list_header')}}
        <span class="fas fa-star header-icon"></span>
    </h1>
     <pornstars-list v-bind:all-pornstars-nick-names="{{json_encode($pornstarsNickNames,true)}}">
     </pornstars-list>
 </main>
</x-base>