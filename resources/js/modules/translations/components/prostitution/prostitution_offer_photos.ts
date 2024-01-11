import Translator from '@jsmodules/translator.js';
import ucfirst from "@jsmodules/helpers/ucfirst";
 

const translations : {
    photos_policy : string,
    maximum_photos_and_outdate_risk : string,
    your_photo_token : string,
    what_happens_when_photos_are_outdated : string,
    anti_photoshop_warning : string,
    photos_token_info : string,
    prostitute_photos_end_of_description : string,
    file_size_has_been_exceeded_for_following_files : string,
    prostitute_photos_allowed_size : string,
    two_types_of_photo_edition_is_available : string,
    prolonging_announcement : string,
    updating_until_expiration_date : string,
    if_you_want_to_prolong_your_prostitution_announcement : string,
    if_you_dont_want_to_prolong_your_prostitution_announcement : string,
    old_token : string,
    new_token : string,
    generate_new_token : string,
    use_old_token : string,
    setting_in_progress : string,
    these_photos_currently_await_validation : string,
    example_of_valid_prostitute_photo : string,
} = {
   photos_policy : Translator.translate('prostitute_photos_policy'),
   setting_in_progress : Translator.translate("setting_in_progress"),
   your_photo_token : Translator.translate('your_photo_token'),
   maximum_photos_and_outdate_risk : Translator.translate('maximum_photos_and_outdate_risk'),
   what_happens_when_photos_are_outdated : Translator.translate('what_happens_when_photos_are_outdated'),
   anti_photoshop_warning : Translator.translate('anti_photoshop_warning'),
   photos_token_info : Translator.translate('photos_token_info'),
   prostitute_photos_end_of_description : Translator.translate('prostitute_photos_end_of_description'),
   file_size_has_been_exceeded_for_following_files : Translator.translate("file_size_has_been_exceeded_for_following_files"),
   prostitute_photos_allowed_size: Translator.translate("prostitute_photos_allowed_size"),
   two_types_of_photo_edition_is_available: Translator.translate("two_types_of_photo_edition_is_available"),
   prolonging_announcement : Translator.translate("prolonging_prostitution_announcement"),
   updating_until_expiration_date : Translator.translate("updating_prostitution_announcement_until_expiration_date"),
   if_you_want_to_prolong_your_prostitution_announcement : Translator.translate('if_you_want_to_prolong_your_prostitution_announcement'),
   if_you_dont_want_to_prolong_your_prostitution_announcement : Translator.translate('if_you_dont_want_to_prolong_your_prostitution_announcement'),
   old_token : ucfirst(Translator.translate("old_token")),
   new_token : ucfirst(Translator.translate("new_token")),
   generate_new_token : Translator.translate("generate_new_token"),
   use_old_token : Translator.translate("use_old_token"),
   these_photos_currently_await_validation : Translator.translate("these_photos_currently_await_validation"),
   example_of_valid_prostitute_photo : Translator.translate("example_of_valid_prostitute_photo"),

};

export default translations;