import Translator from '@jsmodules/translator.js';

const translations : {
    policy_description : string,
    clicking_here : string
} = {
    policy_description : Translator.translate('prostitution_offer_policy_description'),
    clicking_here : Translator.translate('clicking_here'),
};

export default translations;