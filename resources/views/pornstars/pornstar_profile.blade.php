<x-base title="{{__('pornstar_profile_page_title')}} {{$pornstar->nickname}}" description="{{__('pornstar_profile_description', ['nickname' => $pornstar->nickname])}}">
   <main class="pornstar-profile-container">
     <div class="pornstar-personal-data-container">
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
               <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->born}} <span class="pornstar-current-age">({{__('pornstar_current_age')}} : {{$pornstar->age}})</span></dl>
            </div>
            <div class="pornstar-data-key-value-pair">
               <dt class="pornstar-data-key pornstar-data-list-element">{{__('pornstar_birth_place')}} : </dt>
               <dl class="pornstar-data-value pornstar-data-list-element">{{$pornstar->birth_place}}</dl>
            </div>
          </dl>
        </article>
     </div>
   </main>
</x-base>