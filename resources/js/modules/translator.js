
export default{
    currentLanguage : undefined,

   initiate(){
      this.currentLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');
   },

   getSentence(text){
      
      if(this[this.currentLanguage].hasOwnProperty(text)){
         return this[this.currentLanguage][text];
      }
      else{
         
         return text;
      }
   },

   translate(text, delimiter = '.'){
      if(typeof text === "object"){
         let translatedSentences = "";
         Object.entries(text).forEach( ([key, sentence]) => translatedSentences += `${this.getSentence(sentence)}${delimiter} `);
         return translatedSentences;

      }else{
         return this.getSentence(text);
      }
      
   },

   getPackage(packageName){
      return this[this.currentLanguage]['packages'][packageName];
   },

   pl : {
    email_has_already_been_taken : "Adres email jest już zajęty",
    email_is_invalid : "Adres email jest nieprawidłowy",
    the_user_type_is_incorrect : "Niepoprawny typ użytkownika. Należy wybrać 1 opcję z listy",
    to_many_attempts : "Za dużo prób w ciągu jednej minuty",
    the_sexual_orientation_is_incorrect : "Niepoprawna orientacja seksualna należy wybrać 1 opcję z listy",
    to_many_user_settings_change_attempts : "Za dużo prób w ciągu jednej minuty. Ze względów bezpieczeństwa liczba prób jest ograniczona. Proszę spróbować za chwilę.",
    undefined_error : "Bliżej niezidentyfikowany błąd",
    user_data_has_been_modified_successfully : "Pomyślnie zmodyfikowano dane użytkownika",
    password_must_contain_at_least_3_characters : "Hasło musi zawierać co najmniej 3 znaki",
    password_must_not_exceed_20_characters : "Hasło nie może przekraczać 20 znaków",
    password_is_missing : "Nie podano hasła",
    password_is_required : "Należy podać hasło",
    the_given_password_is_incorrect : "Wprowadzone hasło jest nieprawidłowe",
    the_following_errors_occured : "Wykryto następujące problemy : ",
    data_has_been_changed_successfully : "Pomyślnie zmieniono dane użytkownika.",
    the_requested_data_is_probably_ok_but_a_server_error_occured : "Wprowadzone dane są prawdopodobnie w porządku jednak wystąpił błąd po stronie serwera",
    the_requested_data_is_ok_but_a_server_error_occured : "Wprowadzone dane są poprawne jednak serwer napotkał nieoczekiwany błąd. Prosimy spróbować później lub skontaktować się z obsługą",
    please_type_in_a_valid_password : "Proszę wprowadzić swoje hasło o długości od 3 do 20 znaków",
    no_data_has_been_changed : "Żadne pole nie zostało zmienione.",
    this_input_must_not_be_changed : "Tego pola nie można edytować",
    you_have_to_choose_one_option : "Należy wybrać jedną opcję",
    information : "Informacja",
    error : "Błąd",
    incorrect_image_dimensions : "Szerokość lub wysokość obrazu przekracza 128px",
    invalid_file_extension : "Niewłaściwe rozszerzenie pliku. Dozwolone rozszerzenia to : jpg, jpeg, svg, bmp, png, gif, webp",
    url_address : "Adres URL",
    incorrect_extension : "Niewłaściwe rozszerzenie pliku",
    invalid_image_url : "Wygląda na to, że podany adres URL obrazu jest nieprawidłowy. Jeżeli jesteś przekonany, że jest inaczej zawsze możesz pobrać obraz na dysk i stamtąd wczytać",
    invalid_image_extension : "Wygląda na to, że plik ma niewłaściwe rozszerzenie",
    invalid_image_dimensions : "Wprowadzony adres odnosi się do obrazu z właściwym rozszerzeniem jednak szerokość lub wysokość przekracza 128px",
    operation_in_progress : "Operacja w toku",
    checking_image : "Sprawdzam obraz",
    checking_the_email : "Sprawdzam email",
    changing_user_data : "Pracuję nad zmianą danych",
    invalid_image_url_or_another_error : "Prawdopodobnie adres URL jest nieprawidłowy lub wystąpił inny bliżej niezidentyfikowany problem",
    deleting_the_avatar : "Usuwam avatar",
    this_email_address_does_not_exist : "Taki adres email nie istnieje",
    to_many_attemts_during_one_minute : "Za dużo prób w ciągu 1 minuty",
    password_has_less_then_3_characters : "Hasło ma mniej niż 3 znaki",
    password_has_more_then_20_characters : "Hasło ma więcej niż 20 znaków",
    passwords_do_not_match : "Hasła nie pokrywają się",
    login_has_already_been_taken : "Login jest już zajęty",
    login_contains_less_then_3_characters : "Login ma mniej niż 3 znaki",
    login_contains_more_then_20_characters : "Login ma więcej niż 20 znaków",
    email_has_already_been_taken : "Email jest już zajęty",
    email_seems_to_be_incorrect : "Email wygląda na nieprawidłowy",
    you_are_under_18 : "Nie ukończyłeś 18 lat",
    avatar_has_been_deleted_successfully : "Pomyślnie usunięto avatar",
    the_user_has_no_avatar : "Użytkownik nie posiada avataru",
    password_change_attempt : "Próba zmiany hasła",
    password_changed_successfully : "Pomyślnie zmieniono hasło",
    please_type_in_new_valid_password_as_described : "Proszę wprowadzić nowe hasło zgodnie z wytycznymi",
    please_type_in_current_password_as_described : "Proszę wprowadzić aktualne hasło zgodnie z wytycznymi",
    new_password_does_not_match : "Wprowadzone nowe hasło nie pokrywa się z potwierdzeniem",
    new_password_is_required : "Nie podano nowego hasła(środkowe pole)",
    new_password_must_contain_at_least_3_characters : "Nowe hasło musi zawierać co najmniej 3 znaki(środkowe pole)",
    the_given_new_passwords_do_not_match : "Podane nowe hasło nie pokrywa się z potwierdzeniem",
    new_password__confirmation_must_contain_at_least_3_characters : "Potwierdzenie nowego hasła musi zawierać co najmniej 3 znaki",
    new_password__confirmation_must_not_exceed_20_characters : "Potwierdzenie nowego hasła przekracza 20 znaków",
    no_image_has_been_selected : "Nie wybrano żadnego prawidłowego obrazu",
    the_file_selected_from_hard_drive_is_not_an_image : "Plik wybrany z dysku nie jest obrazem",
    invalid_image_dimensions : "Niewłaściwe wymiary obrazu",
    the_data_looks_ok_but_an_unexpected_error_occured : "Wprowadzone dane są w porządku jednak pojawił się nieoczekiwany błąd",
    settings_change_attempt : "Próba zmiany ustawień",
    settings_changed_successfully : "Pomyślnie zmieniono ustawienia",
    the_shows_birthday_field_is_missing : "Brak informacji o tym czy wyświetlać datę urodzenia innym użytkownikom",
    the_shows_birthday_field_must_be_a_boolean_value : "Pole pokazuj datę urodzenia musi zawierać wartość typu logicznego",
    fetching_movies : "Pobieram filmy",
    views : "Wyświetleń",
    preview : "Podgląd",
    pornstars : "Gwiazdy",
    scroll_previous_links : "Przewijaj listę podstron do tyłu",
    movie_frame : "Kadr z filmu",
    close_movie_preview : "Zamknij podgląd filmu",
    play_movie_preview : "Uruchom podgląd filmu",
    sex_empire : "Sex-Imperium",
    movie_translated_to_polish : "Film przetłumaczony na język polski",
    scroll_next_links : "Przewijaj listę podstron do przodu",
    hide_side_bar : "Schowaj boczny pasek",
    profile : "Profil",
    profile_settings : "Ustawienia profilu",
    messages : "Wiadomości",
    favourites : "Ulubione",
    friends : "Znajomi",
    logout : "Wyloguj",
    porn : "Porno",
    user_avatar_description : "Avatar użytkownika o nicku",
    hide : "Schowaj",
    pornstar_has_been_rated : "Ocena została wystawiona. Możesz zawsze zmienić zdanie i ocenić ponownie.",
    pornstar_rate_data_is_invalid : "Niepoprawne dane oceny lub gwiazdy",
    the_nickname_is_missing : "Nie podano pseudonimu",
    the_nickname_exceeds_20_characters : "Długość pseudonimu przekracza 20 znaków",
    unexpected_error_occured_while_fetching_comments : "Niestety pojawił się bliżej niezidentyfikowany błąd podczas pobierania komentarzy",
    packages : {
        content_sidebar : {
          hide_side_bar_title : "Schowaj boczne menu",
          hide_side_bar_caption : "Schowaj",
          porn_caption : "Porno",
          movie_categories_title : "Zobacz dostępne kategorie filmów porno",
          movie_categories_label : "Kategorie",
          latest_porn_movies_title : "Najnowsze filmy porno",
          latest_porn_movies_caption : "Najnowsze",
          the_most_popular_porn_movies_title : "Najpopularniejsze filmy porno",
          the_most_popular_porn_movies_caption: "Najpopularniejsze",
          advanced_search_caption : "Szukanie zaawansowane",
          advanced_search_title : "Użyj wyszukiwarki do precyzyjnego odnajdywania filmów porno",
          movies_caption : "Filmy",
          pornstars : "Gwiazdy porno"
        },

        authenticated_user_sidebar : {
         hide_side_bar_title : "Schowaj menu użytkownika",
         hide_authenticated_user_sidebar_caption : "Schowaj",
         show_user_profile_settings_title : "Ustawienia profilu : hasło, avatar, dane personalne",
         show_user_profile_settings_caption : "Profil",
         mailbox_caption : "Wiadomości",
         favourites_title : "Twoje ulubione filmy, gwiazdy itp",
         favourites_caption : "Ulubione",
         friends_caption : "Znajomi",
         logout_caption : "Wyloguj",
         must_choose_integer_between_1_and_10 : "Należy wbrać wartość pomiędzy 1 a 10"
        },

        pornstars_list : {
           search_field_description : "Wpisz pseudonim gwiazdy porno aby wyszukać odpowiedni profil",
           search_field_placeholder : "pseudonim",
           no_results_has_been_found : "Nie znaleziono żadnych panienek pasujących do podanego pseudonimu",
           reset_search_button_caption : "Resetuj wyszukiwanie"
        },

        pornstar_action_section : {
           comment_text : "Treść komentarza",
           adding_comment : "Dodaję komentarz",
           fetching_comments : "Pobieram komentarze"
        },

        hinted_search_field : {
           search : "szukaj"
        },

        star_rating : {
           no_selected_value : "Nie wybrano oceny"
        },

        comment_component : {

        }

    }
   }
}