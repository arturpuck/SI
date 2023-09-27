import Translator from '@jsmodules/translator.js';

const translations : {
    user_info : string,
    add_button_caption : string
    remove : string
} = {
    user_info : Translator.translate('drag_file_over_here_or_click_button_to_choose_from_hard_drive'),
    add_button_caption : Translator.translate('add'),
    remove : Translator.translate('remove')
}

export default translations;