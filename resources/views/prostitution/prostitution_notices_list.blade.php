<x-base title="{{__('your_prostitution_notices_list')}}" customBodyClass="prostitution-announcements-list-background" description="{{__('prostitution_notices_list_description')}}">
    <main class="container">
        <prostitution-announcements-list v-on:selected-to-edit="loadAnnouncementEditor"></prostitution-announcements-list>
    </main>
</x-base>