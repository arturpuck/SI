export default{
    currentLanguage : undefined,

   initiate(){
      this.currentLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');
   },

   getSentence(text){
      return this[this.currentLanguage][text] ? this[this.currentLanguage][text] : text;
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
    the_following_errors_occured : "Wykryto następujące błędy : ",
    password_must_contain_at_least_3_characters : "Hasło musi zawierać co najmniej 3 znaki",
    password_must_not_exceed_20_characters : "Hasło nie może przekraczać 20 znaków",
    data_has_been_changed_successfully : "Pomyślnie zmieniono dane użytkownika.",
    the_requested_data_is_ok_but_a_server_error_occured : "Wprowadzone dane są poprawne jednak serwer napotkał nieoczekiwany błąd. Prosimy spróbować później lub skontaktować się z obsługą",
    please_type_in_a_valid_password : "Proszę wprowadzić swoje hasło o długości od 3 do 20 znaków",
    no_data_has_been_changed : "Żadne pole nie zostało zmienione.",
    this_input_must_not_be_changed : "Tego pola nie można edytować",
    you_have_to_choose_one_option : "Należy wybrać jedną opcję",
    information : "Informacja",
    error : "Błąd"
   }
}