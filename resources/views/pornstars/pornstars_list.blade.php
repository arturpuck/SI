<x-base title="{{__('pornstars_list_page_title')}}" description="{{__('pornstars_list_page_description')}}">
 <main class="pornstars-list-content-all">
 <h1 class="pornstars-list-main-header">
   <star-full-icon class="header-icon"></star-full-icon>
      {{__('pornstars_list_header')}}
   <star-full-icon class="header-icon"></star-full-icon>
</h1>
     <pornstars-list 
        v-bind:all-pornstars-nick-names="{{json_encode($pornstarsNickNames,true)}}"
        pornstar-profile-route="{{route('pornstars.profile')}}"
      >
     </pornstars-list>
 </main>
</x-base>