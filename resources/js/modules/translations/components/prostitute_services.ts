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
    click_to_chose_remaining_services : string,
    trips : string,
    prices_for_your_services_description : string,
    add_payment_type : string,
    remove_payment_type : string,
    most_important_services_exact_information_notice : string,
    cum_swallow : string
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
    click_to_chose_remaining_services : Translator.translate('click_to_chose_remaining_services'),
    trips : Translator.translate('trips'),
    prices_for_your_services_description : Translator.translate('prices_for_your_services_description'),
    add_payment_type : Translator.translate('add_payment_type'),
    remove_payment_type : Translator.translate('remove_payment_type'),
    most_important_services_exact_information_notice : Translator.translate('most_important_services_exact_information_notice'),
    cum_swallow: Translator.translate('cum_swallow'),
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
    choose : BlankOption,
    included : Translator.translate('included_in_price'),
    aditional_payment : Translator.translate('aditional_payment'),
    never : Translator.translate('never')
};

export const BlowjobPreferencesOptionsList = {
    choose : BlankOption,
    only_in_condom : Translator.translate('only_in_condom'),
    without_condom : Translator.translate('without_condom'),
    without_condom_with_aditional_payments : Translator.translate('without_condom_with_aditional_payments'),
    never : Translator.translate('never')
}

export const SecondaryServicesList = {
    tittfuck : Translator.translate('tittfuck'),
    handjob : Translator.translate('handjob'),
    strapon : `strapon - ${Translator.translate('strapon')}`,
    footjob : `footjob - ${Translator.translate('petting_with_feet')}`,
    pissing : `pissing - ${Translator.translate('pissing')}`, 
    spanking : Translator.translate('spanking'),
    fingering : Translator.translate('fingering'),
    role_playing : Translator.translate('role_playing'),
    69 : '69',
    licking_balls : Translator.translate('licking_balls'),
    stockings : Translator.translate('showStockings'),
    pantyhose : Translator.translate('pantyhose'),
    high_heels : Translator.translate('high_heels'),
    insults : Translator.translate('insults'),
    hugging : Translator.translate('hugging'),
    shared_bath : Translator.translate('shared_bath'),
    sex_with_2_males : Translator.translate('sex_with_2_males'),
    GangBang : Translator.translate('GangBang'),
    outside_together : Translator.translate('outside_together'),
    streaptease : Translator.translate('streaptease'),
    dancing : Translator.translate('dancing'),
    double_penetration : Translator.translate('double_penetration'),
    deep_throat : `deep throat - ${Translator.translate('deep_throat')}`,
    whips : Translator.translate('whips'),  
    latex : Translator.translate('latex'),
    femdom : Translator.translate('femdom'),
}

export const AvailableServiceFormsToPayFor = {
    for_hour : Translator.translate('for_hour'),
    for_30_minutes : Translator.translate('for_30_minutes'),
    for_15_minutes : Translator.translate('for_15_minutes'),
    for_night : Translator.translate('for_night'),
    for_blowjob : Translator.translate('for_blowjob'),
    until_first_cumshot : Translator.translate('until_first_cumshot'),
    for_2_hours : Translator.translate('for_2_hours'),
    for_3_hours : Translator.translate('for_3_hours')
}

export const BinaryPreferences = {
    choose : BlankOption,
    0 : Translator.translate('no'),
    1 : Translator.translate('yes')
}

export const ServiceKeys = [
    'vaginalSex',
    'blowjob',
    'oralCreampie',
    'swallow',
    'anal',
    'kissing',
    'cumOnFace',
    'cumOnBody',
    'massage',
    'pussyLicking',
    'clientRimming',
    'trips'
];


export default translations;