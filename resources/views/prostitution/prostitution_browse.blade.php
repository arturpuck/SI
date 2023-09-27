<x-base title="{{__('browse_prostitution_list')}}" description="{{__('browse_prostitution_notices_list_description')}}">
    <section class="search-panel">
        <div class="controls-container">
            <simple-labeled-select v-model="selectedVoivodeship" v-on: class="search-panel-element" name="voivodeships">{{__('voivodeship')}} :</simple-labeled-select>
            <simple-labeled-select v-model="selectedCity" name="city" v-on:click="showNotificationIfVoivodeshipIsNotSelected" class="search-panel-element">{{__('city')}} :</simple-labeled-select>
            <simple-labeled-select v-model="selectedUserType" name="userType" class="search-panel-element">{{__('what_are_you_looking_for')}} :</simple-labeled-select>
            <search-button v-on:click="searchAnnouncements" class="search-panel-element"></search-button>
        </div>
    </section>
    <main>
        <prostitution-announcements-set></prostitution-announcements-set>
    </main>
</x-base>