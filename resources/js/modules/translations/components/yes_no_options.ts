import Translator from '@jsmodules/translator.js';

const BlankOption = `--${Translator.translate('choose_options')}--`;

export default {
    choose : BlankOption,
    1 : Translator.translate('yes'),
    0 : Translator.translate('no'),
}