<div aria-label="wprowadzono prawidłowe dane" @isset($vueHookID)ref="correct_value_{{$vueHookID}}"@endisset class="icon-container icon-correct-value">
    <div class="confirmation-icon-bird"></div>
    </div>
    <div aria-label="wprowadzono nieprawidłowe dane" @isset($vueHookID)ref="incorrect_value_{{$vueHookID}}"@endisset class="icon-container icon-incorrect-value">
    <div  class="white-bar">
      
    </div>
  </div>