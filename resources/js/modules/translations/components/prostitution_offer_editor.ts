import Translator from '@jsmodules/translator.js';
import ucfirst from "@jsmodules/helpers/ucfirst";

const translations : {
    rules : string,
    basic_information : string,
    section : string,
    prostitution_offer_bottom_navigation_info : string
} = {
    rules : Translator.translate('rules'),
    basic_information : Translator.translate('basic_information'),
    prostitution_offer_bottom_navigation_info : Translator.translate('prostitution_offer_bottom_navigation_info'),
    section : ucfirst(Translator.translate('section')),
};

export default translations;

export const sections = {
        ProstitutionPolicyDescription : Translator.translate('notices_policy'),
        ProstituteBasicInformation : Translator.translate('personalities'),
        ProstituteServices : Translator.translate('services_range_and_pricing'),
        ProstitutePhotos : Translator.translate('photos')
};