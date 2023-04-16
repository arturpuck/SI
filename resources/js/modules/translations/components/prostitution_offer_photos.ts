import Translator from '@jsmodules/translator.js';

const translations : {
    photos_policy : string,
    maximum_photos_and_outdate_risk : string,
    your_photo_token : string,
    what_happens_when_photos_are_outdated : string,
    anti_photoshop_warning : string,
    photos_token_info : string,
    prostitute_photos_end_of_description : string,
    file_size_has_been_exceeded_for_following_files : string,
    prostitute_photos_allowed_size : string
} = {
   photos_policy : Translator.translate('prostitute_photos_policy'),
   your_photo_token : Translator.translate('your_photo_token'),
   maximum_photos_and_outdate_risk : Translator.translate('maximum_photos_and_outdate_risk'),
   what_happens_when_photos_are_outdated : Translator.translate('what_happens_when_photos_are_outdated'),
   anti_photoshop_warning : Translator.translate('anti_photoshop_warning'),
   photos_token_info : Translator.translate('photos_token_info'),
   prostitute_photos_end_of_description : Translator.translate('prostitute_photos_end_of_description'),
   file_size_has_been_exceeded_for_following_files : Translator.translate("file_size_has_been_exceeded_for_following_files"),
   prostitute_photos_allowed_size: Translator.translate("prostitute_photos_allowed_size"),
};

export default translations;