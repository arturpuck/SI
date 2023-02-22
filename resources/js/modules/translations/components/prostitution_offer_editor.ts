import Translator from '@jsmodules/translator.js';
import ucfirst from "@jsmodules/helpers/ucfirst";

const translations : {
    rules : string,
    basic_information : string,
    section : string,
    prostitution_offer_bottom_navigation_info : string,
    choose_options : string,
    male : string,
    female : string,
    hermaphrodite : string,
    transsexualist : string,
    couple : string,
    triangle_or_more : string,
    brothel : string,
    massage_parlor : string,
    sexual_orientation : string,
    heterosexual : string,
    homosexual : string,
    bisexual : string,
    asexual : string,
    autosexual :string,
} = {
    rules : Translator.translate('rules'),
    basic_information : Translator.translate('basic_information'),
    prostitution_offer_bottom_navigation_info : Translator.translate('prostitution_offer_bottom_navigation_info'),
    section : ucfirst(Translator.translate('section')),
    choose_options : Translator.translate('choose_options'),
    male : Translator.translate('male'),
    female : Translator.translate('female'),
    hermaphrodite : Translator.translate('hermaphrodite'),
    transsexualist : Translator.translate('transsexualist'),
    couple : Translator.translate('couple'),
    triangle_or_more : Translator.translate('triangle_or_more'),
    brothel : Translator.translate('brothel'),
    massage_parlor : Translator.translate('massage_parlor'),
    sexual_orientation : Translator.translate('sexual_orientation'),
    heterosexual : Translator.translate('heterosexual'),
    homosexual : Translator.translate('homosexual'),
    bisexual : Translator.translate('bisexual'),
    asexual : Translator.translate('asexual'),
    autosexual : Translator.translate('autosexual'),
};

export default translations;

export const sections = {
        ProstitutionPolicyDescription : Translator.translate('notices_policy'),
        ProstituteBasicInformation : Translator.translate('personalities'),
        ProstituteServices : Translator.translate('services_range_and_pricing'),
        ProstitutePhotos : Translator.translate('photos'),
        ProstituteLocationAndWorkingHours : Translator.translate('location_and_working_hours'),
        ProstituteSaveNotice : Translator.translate('saving_notice')
};