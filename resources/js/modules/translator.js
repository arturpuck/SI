
export default {
   currentLanguage: undefined,

   initiate() {
      this.currentLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');
   },

   get language() {

      if (this.currentLanguage === undefined) {
         this.initiate();
      }

      return this.currentLanguage;
   },

   getSentence(text) {

      if (this[this.language].hasOwnProperty(text)) {
         return this[this.language][text];
      }
      else {

         return text;
      }
   },

   translate(text, delimiter = '.') {

      if (typeof text === "object") {
         let translatedSentences = "";
         Object.entries(text).forEach(([key, sentence]) => translatedSentences += `${this.getSentence(sentence)}${delimiter} `);
         return translatedSentences;

      } else {
         return this.getSentence(text);
      }

   },

   getPackage(packageName) {
      return this[this.language]['packages'][packageName];
   },

   pl: {
      email_has_already_been_taken: "Adres email jest już zajęty",
      current_number_of_votes : "Liczba oddanych głosów",
      file_size_exceeds_limit : "Rozmiar pliku przekracza dopuszczalny limit (2 MB)",
      an_error_occured_while_fetching_pornstar_rating : "Podczas próby pobrania rankingu gwiazdy pojawił się niespodziewany bład",
      i_forgot_password : "Zapomniałem hasła",
      password : "Hasło",
      email_is_invalid: "Adres email jest nieprawidłowy",
      the_user_type_is_incorrect: "Niepoprawny typ użytkownika. Należy wybrać 1 opcję z listy",
      to_many_attempts: "Za dużo prób w ciągu jednej minuty",
      the_sexual_orientation_is_incorrect: "Niepoprawna orientacja seksualna należy wybrać 1 opcję z listy",
      to_many_user_settings_change_attempts: "Za dużo prób w ciągu jednej minuty. Ze względów bezpieczeństwa liczba prób jest ograniczona. Proszę spróbować za chwilę.",
      undefined_error: "Bliżej niezidentyfikowany błąd",
      user_data_has_been_modified_successfully: "Pomyślnie zmodyfikowano dane użytkownika",
      password_must_contain_at_least_3_characters: "Hasło musi zawierać co najmniej 3 znaki",
      password_must_not_exceed_20_characters: "Hasło nie może przekraczać 20 znaków",
      password_is_missing: "Nie podano hasła",
      password_is_required: "Należy podać hasło",
      the_given_password_is_incorrect: "Wprowadzone hasło jest nieprawidłowe",
      the_following_errors_occured: "Wykryto następujące problemy : ",
      data_has_been_changed_successfully: "Pomyślnie zmieniono dane użytkownika.",
      the_requested_data_is_probably_ok_but_a_server_error_occured: "Wprowadzone dane są prawdopodobnie w porządku jednak wystąpił błąd po stronie serwera",
      the_requested_data_is_ok_but_a_server_error_occured: "Wprowadzone dane są poprawne jednak serwer napotkał nieoczekiwany błąd. Prosimy spróbować później lub skontaktować się z obsługą",
      please_type_in_a_valid_password: "Proszę wprowadzić swoje hasło o długości od 3 do 20 znaków",
      no_data_has_been_changed: "Żadne pole nie zostało zmienione.",
      this_input_must_not_be_changed: "Tego pola nie można edytować",
      you_have_to_choose_one_option: "Należy wybrać jedną opcję",
      information: "Informacja",
      error: "Błąd",
      log_in : "Zaloguj",
      login_to_sex_empire : "Zaloguj się do Sex-Imperium",
      incorrect_image_dimensions: "Szerokość lub wysokość obrazu przekracza 128px",
      invalid_file_extension: "Niewłaściwe rozszerzenie pliku. Dozwolone rozszerzenia to : jpg, jpeg, svg, bmp, png, gif, webp",
      url_address: "Adres URL",
      incorrect_extension: "Niewłaściwe rozszerzenie pliku",
      invalid_image_url: "Wygląda na to, że podany adres URL obrazu jest nieprawidłowy. Jeżeli jesteś przekonany, że jest inaczej zawsze możesz pobrać obraz na dysk i stamtąd wczytać",
      invalid_image_extension: "Wygląda na to, że plik ma niewłaściwe rozszerzenie",
      invalid_image_dimensions: "Wprowadzony adres odnosi się do obrazu z właściwym rozszerzeniem jednak szerokość lub wysokość przekracza 128px",
      operation_in_progress: "Operacja w toku",
      checking_image: "Sprawdzam obraz",
      checking_the_email: "Sprawdzam email",
      changing_user_data: "Pracuję nad zmianą danych",
      invalid_image_url_or_another_error: "Prawdopodobnie adres URL jest nieprawidłowy lub wystąpił inny bliżej niezidentyfikowany problem",
      deleting_the_avatar: "Usuwam avatar",
      this_email_address_does_not_exist: "Taki adres email nie istnieje",
      to_many_attemts_during_one_minute: "Za dużo prób w ciągu 1 minuty",
      password_has_less_then_3_characters: "Hasło ma mniej niż 3 znaki",
      password_has_more_then_20_characters: "Hasło ma więcej niż 20 znaków",
      passwords_do_not_match: "Hasła nie pokrywają się",
      login_has_already_been_taken: "Login jest już zajęty",
      login_contains_less_then_3_characters: "Login ma mniej niż 3 znaki",
      login_contains_more_then_20_characters: "Login ma więcej niż 20 znaków",
      email_has_already_been_taken: "Email jest już zajęty",
      email_seems_to_be_incorrect: "Email wygląda na nieprawidłowy",
      you_are_under_18: "Nie ukończyłeś 18 lat",
      the_user_has_no_avatar: "Użytkownik nie posiada avataru",
      password_change_attempt: "Próba zmiany hasła",
      password_changed_successfully: "Pomyślnie zmieniono hasło",
      please_type_in_new_valid_password_as_described: "Proszę wprowadzić nowe hasło zgodnie z wytycznymi",
      please_type_in_current_password_as_described: "Proszę wprowadzić aktualne hasło zgodnie z wytycznymi",
      new_password_does_not_match: "Wprowadzone nowe hasło nie pokrywa się z potwierdzeniem",
      new_password_is_required: "Nie podano nowego hasła(środkowe pole)",
      new_password_must_contain_at_least_3_characters: "Nowe hasło musi zawierać co najmniej 3 znaki(środkowe pole)",
      the_given_new_passwords_do_not_match: "Podane nowe hasło nie pokrywa się z potwierdzeniem",
      new_password__confirmation_must_contain_at_least_3_characters: "Potwierdzenie nowego hasła musi zawierać co najmniej 3 znaki",
      new_password__confirmation_must_not_exceed_20_characters: "Potwierdzenie nowego hasła przekracza 20 znaków",
      no_image_has_been_selected: "Nie wybrano żadnego prawidłowego obrazu",
      the_file_selected_from_hard_drive_is_not_an_image: "Plik wybrany z dysku nie jest obrazem",
      invalid_image_dimensions: "Niewłaściwe wymiary obrazu",
      the_data_looks_ok_but_an_unexpected_error_occured: "Wprowadzone dane są w porządku jednak pojawił się nieoczekiwany błąd",
      settings_change_attempt: "Próba zmiany ustawień",
      settings_changed_successfully: "Pomyślnie zmieniono ustawienia",
      the_shows_birthday_field_is_missing: "Brak informacji o tym czy wyświetlać datę urodzenia innym użytkownikom",
      the_shows_birthday_field_must_be_a_boolean_value: "Pole pokazuj datę urodzenia musi zawierać wartość typu logicznego",
      fetching_movies: "Pobieram filmy",
      movies : "Filmy",
      views: "Odsłon",
      preview: "Podgląd",
      pornstars: "Gwiazdy",
      pornstars_navbar_caption : "Gwiazdy porno",
      scroll_previous_links: "Przewijaj listę podstron do tyłu",
      movie_frame: "Kadr z filmu",
      close_movie_preview: "Zamknij podgląd filmu",
      play_movie_preview: "Uruchom podgląd filmu",
      sex_empire: "Sex-Imperium",
      movie_translated_to_polish: "Film przetłumaczony na język polski",
      scroll_next_links: "Przewijaj listę podstron do przodu",
      hide_side_bar: "Schowaj boczny pasek",
      previous_page: "poprzednia",
      next_page: "następna",
      further : "dalej",
      back : "wstecz",
      up : "góra",
      first_page: "pierwsza",
      profile: "Profil",
      profile_settings: "Ustawienia profilu",
      messages: "Wiadomości",
      favourites: "Ulubione",
      friends: "Znajomi",
      logout: "Wyloguj",
      porn: "Porno",
      user_avatar_description: "Avatar użytkownika o nicku",
      hide: "Schowaj",
      element_has_been_rated: "Ocena została wystawiona. Możesz zawsze zmienić zdanie i ocenić ponownie.",
      pornstar_rate_data_is_invalid: "Niepoprawne dane oceny lub gwiazdy",
      movie_rate_data_is_invalid: "Niepoprawne dane oceny lub filmu",
      nickname_is_missing: "Nie podano pseudonimu",
      unexpected_error_occured_while_fetching_comments: "Niestety pojawił się bliżej niezidentyfikowany błąd podczas pobierania komentarzy",
      nickname: "Pseudonim",
      comment_text: "Treść komentarza",
      add_comment: "Dodaj komentarz",
      add: "dodaj",
      comment_added : "Dodano komentarz",
      unregistered_user: "Niezarejestrowany",
      register : "Rejestruj",
      comment_text: "Treść komentarza",
      adding_comment: "Dodaję komentarz",
      fetching_comments: "Pobieram komentarze",
      comment_text_is_missing: "Nie podano treści komentarza",
      comment_text_exceeds_1000_characters: "Treść komentarza przekracza 1000 znaków",
      the_nickname_must_be_between_2_and_20_characters: "Pseudonim musi mieć minimum 2 znaki ale nie więcej niż 20",
      no_comments_available : "Brak komentarzy",
      because_of_safety_reasons_adding_comments_is_limited_to_2_per_minute: "Z powodów bezpieczeństwa ograniczono liczbę dodawanych komentarzy do 2 na minutę",
      total_comments: "Liczba wszystkich komentarzy",
      publish_comment: "Opublikuj komentarz",
      show_comments_sub_page_with_number: "Pokaż podstronę komentarzy o numerze",
      sex_empire_short: "SI",
      small_ass: "mały",
      medium_ass: "średni",
      big_ass: "duży",
      small_tits: "małe",
      medium_tits: "średnie",
      big_tits: "duże",
      skinny_tchickness: "chuda",
      medium_tchickness: "średnia",
      fat_tchickness: "gruba",
      teenagers: "nastolatki(18 - 19)",
      age_range_young: "młode (20 -29)",
      age_range_mature: "dojrzałe(30 - 50)",
      dark_hair: "czarny",
      blonde_hair: "blond",
      brown_hair: "brązowy",
      red_hair: "rudy",
      white_race: "biała",
      asian_race: "azjatki",
      ebony_race: "murzynki",
      latin_race: "latynoski",
      arabic_race: "arabki",
      yes: "tak",
      no: "nie",
      one_male_one_female: "facet i kobieta",
      bukkake: "bukkake",
      single_female: "kobieta solo",
      lesbians: "lesbijki",
      group_sex: "grupowy",
      one_male_many_females: "facet i wiele kobiet",
      GangBang: "GangBang",
      one_female_two_males: "Na 2 baty",
      lesbian_group_sex: "Lesbijki grupowo",
      only: "tylko i wyłącznie",
      maximum: "maximum",
      a_lot: "dużo",
      medium: "średnio",
      a_little: "trochę",
      exclude: "wyklucz",
      on_face: "na twarz",
      cum_swallow: "z połykiem",
      creampie: "w cipkę",
      anal_creampie: "w dupkę",
      on_tits: "na cycki",
      on_pussy: "na cipkę",
      on_ass: "na dupkę",
      on_feet: "na stopy",
      on_many_places: "na wiele miejsc",
      on_other_body_parts: "na inne miejsca",
      american_nationality: "amerykańska",
      japanese_nationality: "japońska",
      german_nationality: "niemiecka",
      czech_nationality: "czeska",
      russian_nationality: "rosyjska",
      british_nationality: "brytyjska",
      swedish_nationality: "szwedzka",
      ukrainian_nationality: "ukraińska",
      slovac_nationality: "słowacka",
      hanguarian_nationality: "węgierska",
      polish_nationality: "polska",
      dutch_nationality: "holenderska",
      hindu_nationality: "hinduska",
      french_nationality: "francuska",
      spanish_nationality: "hiszpańska",
      italian_nationality: "włoska",
      canadian_nationality: "kanadyjska",
      argentinian_nationality: "argentyńska",
      house: "dom",
      bathroom: "łazienka",
      office: "biuro",
      school: "szkoła",
      public_place: "miejsca publiczne",
      car: "samochód",
      nature: "łono natury",
      solarium: "solarium",
      elevator: "winda",
      beach: "plaża",
      gym: "siłownia",
      POV: "POV",
      outside_camera_style: "z zewnątrz",
      mixed_camera_style: "mieszane",
      female_pupil: "uczennica",
      female_employee: "pracownica",
      female_student: "studentka",
      wife: "żona",
      female_teacher: "nauczycielka",
      nurse: "pielęgniarka",
      female_slave: "niewolnica",
      nun: "zakonnica",
      female_police_officer: "policjantka",
      prostitute: "prostytutka",
      female_boss: "szefowa",
      cleaner: "sprzątaczka",
      mommy: "mamusia",
      amateur: "amatorski",
      professional: "profesjonalny",
      choose_options: "wybierz opcje",
      search: "szukaj",
      remove_option: "usuń opcję",
      close: "zamknij",
      failed_to_fetch_pornstars_list: "Nie udało się pobrać listy gwiazd, w razie potrzeby prosimy odświeżyć stronę",
      fetching_pornstars: "Pobieram listę gwiazd",
      not_selected: "nie wybrano",
      minutes_inflected: "minut(y)",
      views_inflected: "wyświetleń",
      unexpected_error_occured: "Pojawił się bliżej niezidentyfikowany błąd",
      titsSize: "rozmiar cycków",
      assSize: "rozmiar dupci",
      thicknessSize: "tusza",
      ageRange: "przedział wiekowy",
      hairColor: "kolor włosów",
      race: "rasa",
      abundanceType: "liczebność",
      cumshotType: "typ wytrysku",
      nationality: "narodowość",
      location: "lokalizacja",
      cameraStyle: "ujęcie kamery",
      storyOrCostume: "motyw fabularno kostiumowy",
      professionalismLevel: "poziom filmu",
      shavedPussy: "wygolona cipka",
      analAmount: "anal",
      blowjob: "obciąganie",
      handjob: "walenie konika",
      blondes: "blondynki",
      tittfuck: "na hiszpana",
      pussy_licking: "minetka",
      feet: "stopy",
      femdom: "kobieca dominacja",
      brunettes: "brunetki",
      redheads: "rude",
      milfs: "dojrzałe",
      teens: 'nastolatki',
      amateur: "amatorskie",
      asian: 'azjatki',
      latins: 'latynoski',
      ebony: 'murzynki',
      lesbians: 'lesbijki',
      group: 'grupowy',
      cumshot_compilation: 'kompilacja wytrysków',
      cumshot_compilations: 'kompilacje wytrysków',
      cum_on_face: 'wytrysk na twarz',
      cum_swallow: 'połykanie spermy',
      cum_on_feet: 'wytrysk na stopy',
      creampie: 'wytrysk w cipkę',
      cum_in_ass: 'wytrysk w dupkę',
      cum_on_titts: 'wytrysk na cycki',
      pantyhose: 'rajstopki',
      high_heels: 'szpile',
      nurses: 'pielęgniarki',
      teachers: 'nauczycielki',
      japanese: 'japonki',
      russian: 'rosjanki',
      pornstars: 'gwiazdy',
      blowjobAmount: 'obciąganie',
      handjobAmount: 'walenie konika',
      doublePenetrationamount: "wtyczka",
      vaginalamount: "waginalny",
      pussyLickingAmount: 'minetka',
      feetPettingAmount: 'pieszczenie stóp',
      position69amount: 'pozycja 69',
      titfuckAmount: "na hiszpana",
      isCumshotCompilation: 'kompilacja wytrysków',
      recordedBySpamCamera: 'nagrany kamerą szpiegowską',
      isSadisticOrMasochistic: 'sado-masochostyczny',
      isFemaleDomination: 'kobieca dominacja',
      isTranslatedToPolish: 'polska wersja językowa',
      showPantyhose: 'rajstopy',
      showStockings: 'pończochy',
      showGlasses: 'okulary',
      showHighHeels: 'szpile',
      showHugeCock: 'wielki kutas',
      showWhips: 'bicze',
      showSexToys: 'sex-zabawki',
      minimumMovieTime: "minimalny czas",
      maximumMovieTime: "maksymalny czas",
      minimumMovieViews: 'minimalna liczba wyświetleń',
      maximumMovieViews: 'maksymalna liczba wyświetleń',
      hasStory: 'zawiera fabułę',
      total_movies_found: "Ilość znalezionych filmów",
      movie_with_following_pornstars: "występują jednocześnie następujące gwiazdy",
      last_page: "ostatnia",
      movie_with_pornstar: "Film w którym występuje",
      no_movies_have_been_found: "Nie znaleziono żadnych filmów pasujących do wybranych kryteriów",
      no_options_have_been_selected: "Nie wybrano żadnych opcji",
      failed_to_fetch_pornstars_list: "Nie udało się pobrać listy gwiazd",
      because_of_security_reasons_search_was_blocked: "Ze względów bezpieczeństwa ilość zapytań do wyszukiwarki w ciągu minuty jest ograniczona. Prosimy zaczekać chwilę i spróbować ponownie.",
      popular_categories: "Popularne kategorie",
      categories_list: "Lista kategorii",
      big_titts: "duże cycki",
      categories : "Kategorie",
      teenagers: "nastolatki",
      spermatozoid_has_been_asigned: "Przyznano plemnika. Musisz odczekać minimum pół godziny aby przyznać kolejnego.",
      you_have_exceeded_cum_limit: "Możesz przyznać maksymalnie jednego plemnika na pół godziny niezależnie od filmu",
      spermatozoid_rate_data_is_incorrect: "Niepoprawne dane filmu",
      movie_views: "Liczba wyświetleń",
      movie_added_at: "Data dodania",
      movie_average_rating: "Średnia ocen",
      this_pornstar_does_not_have_enough_votes_to_calculate_average : "Ta gwiazda ma za mało głosów aby policzyć średnią (wymagane minimum to 10)",
      fetching_rating_in_progress : "Pobieram dane rankingu",
      average_rate_not_available_yet: "jeszcze niedostępna",
      ammount_of_spermatozoids: "Liczba plemników",
      your_spermatozoids: "twoich",
      number_of_likes: "Polubień",
      failed_to_load_movie_data: "Nie udało się pobrać szczegółowych danych filmu",
      failed_to_load_similar_movies: "Nie udało się załadować podobnych filmów",
      you_like_it: "Lubisz to",
      you_already_like_this_movie: "Już wcześniej polubiłeś ten film",
      you_and: "Ty i",
      people_like_it: "osób lubi to",
      no_comments: "Brak komentarzy",
      cookie_notification_header: "Ta strona wykorzystuje pliki cookie",
      cookie_notification_body : `Poprzez dalsze korzystanie z portalu lub naciśnięcie przycisku "Akceptuję" wyrażasz zgodę na przechowywanie plików cookie na Twej maszynie`,
      accept_button_caption : "Akceptuję - zamknij",
      show_content_side_bar_title : "Rozwiń nawigację strony dla wersji mobilnej",
      show_content_side_bar_caption : "Menu",
      cancel_like : "cofnij like'a",
      show_authenticated_user_sidebar_title : "Rozwiń menu użytkownika, ustawienia profilu, wylogowanie itp.",
      show_authenticated_user_sidebar_caption : "Profil",
      selected_avatar : "Nowy avatar",
      no_avatar_has_been_choosen : "Nie wybrano avataru",
      current_avatar : "Wybrany avatar",
      the_latest : "Najnowsze",
      the_most_popular : "Najpopularniejsze",
      advanced_search : "Szukanie zaawansowane",
      login_or_email : "Login lub email",
      remember_me : "Zapamiętaj mnie",
      packages: {
         content_sidebar: {
            hide_side_bar_title: "Schowaj boczne menu",
            hide_side_bar_caption: "Schowaj",
            porn_caption: "Porno",
            movie_categories_title: "Zobacz dostępne kategorie filmów porno",
            movie_categories_label: "Kategorie",
            latest_porn_movies_title: "Najnowsze filmy porno",
            latest_porn_movies_caption: "Najnowsze",
            the_most_popular_porn_movies_title: "Najpopularniejsze filmy porno",
            the_most_popular_porn_movies_caption: "Najbardziej popularne",
            advanced_search_caption: "Szukanie precyzyjne",
            advanced_search_title: "Użyj wyszukiwarki do precyzyjnego odnajdywania filmów porno",
            movies_caption: "Filmy",
            pornstars: "Gwiazdy porno"
         },

         authenticated_user_sidebar: {
            hide_side_bar_title: "Schowaj menu użytkownika",
            hide_authenticated_user_sidebar_caption: "Schowaj",
            show_user_profile_settings_title: "Ustawienia profilu : hasło, avatar, dane personalne",
            show_user_profile_settings_caption: "Ustawienia profilu",
            mailbox_caption: "Wiadomości",
            favourites_title: "Twoje ulubione filmy, gwiazdy itp",
            favourites_caption: "Ulubione",
            friends_caption: "Znajomi",
            logout_caption: "Wyloguj",
            must_choose_integer_between_1_and_10: "Należy wbrać wartość pomiędzy 1 a 10"
         },

         pornstars_list: {
            search_field_description: "Wpisz pseudonim gwiazdy porno aby wyszukać odpowiedni profil",
            search_field_placeholder: "pseudonim",
            no_results_has_been_found: "Nie znaleziono żadnych panienek pasujących do podanego pseudonimu",
            reset_search_button_caption: "Resetuj wyszukiwanie"
         },

         hinted_search_field: {
            search: "szukaj"
         },

         star_rating: {
            no_selected_value: "nie przyznano"
         },

         comment_box: {
            your_nickname: "Twój pseudonim"
         }

      }
   }
}