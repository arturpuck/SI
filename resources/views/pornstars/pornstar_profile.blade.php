<x-base title="{{__('pornstar_profile_page_title')}} {{$pornstar->nickname}}" description="{{__('pornstar_profile_description', ['nickname' => $pornstar->nickname])}}">
   <main class="pornstar-profile-container">
     <section class="pornstar-personal-data-container">
       <img src="/images/decoration/pornstars/profile-small/{{str_replace(' ','_',$pornstar->nickname)}}.jpg" alt="{{__('pornstar_profile_image_description', ['nickname' => $pornstar->nickname])}}" class="pornstar-profile-image">
       <article class="pornstar-personal-data">
          <h1 class="pornstar-nickname-header">{{$pornstar->nickname}}</h1>
          <dl class="pornstar-basic-data-list">
            <div class="pornstar-data-key-value-pair">
               <dt class="pornstar-data-key pornstar-data-list-element">{{__('true_name')}} : </dt>
               <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->true_name}}</dl>
            </div>
            <div class="pornstar-data-key-value-pair">
               <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_born_at')}} : </dt>
               <dl class="pornstar-data-value pornstar-data-list-element">
                  {{$pornstar->born}}
                  <span class="fas fa-birthday-cake pornstar-data-icon"></span>
                  <span class="pornstar-current-age">({{__('pornstar_current_age')}} : {{$pornstar->age}})</span>
               </dl>
            </div>
            <div class="pornstar-data-key-value-pair">
               <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_birth_place')}} : </dt>
               <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->birth_place}}</dl>
            </div>
            <div class="pornstar-data-key-value-pair">
               <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_nationality')}} : </dt>
               <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->nationality->name}}</dl>
            </div>
            <div class="pornstar-data-key-value-pair">
               <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_activity_period')}} : </dt>
               <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->years_active}}</dl>
            </div>
            <div class="pornstar-data-key-value-pair">
               <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_tits_type')}} : </dt>
               <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->enhanced_tits ? __('artificial_titts') : __('natural_titts')}}</dl>
            </div>
            @if($pornstar->official_website)
              <div class="pornstar-data-key-value-pair">
                <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_official_website')}} : </dt>
                <dl class="pornstar-data-value pornstar-data-list-element">
                   <a class="neutral-link" href="http://www.{{$pornstar->official_website}}">{{$pornstar->official_website}}</a>
                   <span class="fas fa-house-user pornstar-data-icon"></span>
                </dl>
             </div>
            @endif
          </dl>
          <p class="pornstar-description">
             {{$pornstar->description_beginning}}
          </p>
          <p class="pornstar-description">
             {{$pornstar->description_end}}
          </p>
        </article>
     </section>
     <ul class="pornstar-profile-tabpanel" role="tabpanel">
         <li class="pornstar-profile-tab" aria-controls="movies-tab">{{__('movies')}}</li>
         <li class="pornstar-profile-tab" aria-controls="comments-tab">{{__('comments')}}</li>
         <li class="pornstar-profile-tab" aria-controls="ranking-tab">{{__('ranking')}}</li>
      </ul>
     <section id="movies-tab" class="action-section">
       <fixed-shadow-container v-show="showsPreview">
          <movie-preview/>
       </fixed-shadow-container>

     </section>
   </main>
</x-base>