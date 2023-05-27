import Translator from '@jsmodules/translator.js';

const translations : {
    prostitute_save_announcement_info : string,
    announcement_must_be_accepted_reminder : string,
    add_notice : string,
    just_one_offer_reminder : string,
} = {
    prostitute_save_announcement_info : Translator.translate('prostitute_save_announcement_info'),
    announcement_must_be_accepted_reminder : Translator.translate('announcement_must_be_accepted_reminder'),
    add_notice : Translator.translate('add_notice'),
    just_one_offer_reminder : Translator.translate('prostitute_photos_just_one_reminder')
};

export default translations;