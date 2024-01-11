<x-base title="{{__('your_prostitution_notices_list')}}" customBodyClass="prostitution-announcements-list-background" description="{{__('prostitution_notices_list_description')}}">
    <main class="container">
        <prostitution-announcements-list v-show="listIsVisible" v-on:selected-to-edit="loadAnnouncementEditor"></prostitution-announcements-list>
        <prostitution-offer-editor class="prostitution-offer-editor" v-show="offerEditorIsVisible" v-on:announcement-loaded="toggleEditorAndList"></prostitution-offer-editor>
    </main>
</x-base>