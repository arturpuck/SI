import Translator from '@jsmodules/translator.js';

export const BlankOption = `--${Translator.translate('choose_options')}--`;

const translations : {
    classic_sex : string,
    money_amount : string,
    currency : string,
    blowjob : string
    currencies_you_accept : string,
    oral_creampie : string,
    most_important_services_description : string,
    anal : string,
    cum_on_face : string,
    massage : string,
    pussy_licking : string,
    client_rimming : string,
    kisses : string,
    cum_on_body : string,
    remaining_services_description : string,
} = {
    classic_sex : Translator.translate('classic_sex'),
    money_amount : Translator.translate('money_amount'),
    currency : Translator.translate('currency'),
    blowjob : Translator.translate('blowjob'),
    currencies_you_accept : Translator.translate('currencies_you_accept'),
    oral_creampie : Translator.translate('oral_creampie'),
    most_important_services_description : Translator.translate('most_important_services_description'),
    anal : Translator.translate('anal'),
    cum_on_face : Translator.translate('cum_on_face'),
    massage : Translator.translate('massage'),
    pussy_licking : Translator.translate('pussy_licking'),
    client_rimming : Translator.translate('client_rimming'),
    kisses : Translator.translate('kisses'),
    cum_on_body : Translator.translate('cum_on_body'),
    remaining_services_description : Translator.translate('remaining_services_description'),
};

export enum DefaultSexPreference {
    included = 'included',
    aditional_payment = 'aditional_payment',
    never = 'never'
}

export enum BlowjobPreference {
    only_in_condom = 'only_in_condom',
    without_condom ='without_condom',
    without_condom_with_aditional_payments = 'without_condom_with_aditional_payments',
    never = 'never'
}

export const DefaultPreferencesOptionsList = {
    0 : BlankOption,
    included : Translator.translate('included_in_price'),
    aditional_payment : Translator.translate('aditional_payment'),
    never : Translator.translate('never')
};

export const BlowjobPreferencesOptionsList = {
    0 : BlankOption,
    only_in_condom : Translator.translate('only_in_condom'),
    without_condom : Translator.translate('without_condom'),
    without_condom_with_aditional_payments : Translator.translate('without_condom_with_aditional_payments'),
    never : Translator.translate('never')
}


export default translations;