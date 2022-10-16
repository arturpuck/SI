<x-base title="{{__('create_prostitution_offer')}}" customBodyClass="standard-background" description="{{__('prostitution_creator_description')}}">
<main class="prostitution-offer-creator">
<h1 class="offer-creator-header">{{__('prostitution_notice_form')}}</h1>
<section class="offer-section">
    <h2 class="section-header">
        {{__('ofer_policy')}}
        <secure-documents-icon class="header-icon"></secure-documents-icon>
    </h2>
    <strong class="important-description">
        {{__('prostitution_offer_basic_description')}}
        <a href="{{route('contact.show.form')}}" class="link">{{__('clicking_here')}}</a>
    </strong> 
</section>
<section class="offer-section">
    <h2 class="section-header">
        {{__('offer_basic_information')}}
        <info-circle-icon class="header-icon info-icon"></info-circle-icon>
    </h2>
       <div class="controls-flex-container">
        <text-input-combo 
            complete-validation-display-available="true"
            input-is-required="true">
            {{__('name_or_nickname')}} :
        </text-input-combo>
        <described-select 
        v-bind:option-values="{{$userTypeIds}}"
        v-bind:visible-options-list="{{$userTypes}}">
            {{__('sex')}}
        </described-select>
        <date-picker>{{__('birth_date')}}</date-picker>
       </div>
</section>
</main>
</x-base>