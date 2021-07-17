import Translator from '@jsmodules/translator.js';

const translations : {
    showContentSideBarButtonTitle : string,
    showContentSideBarButtonCaption : string,
    showAuthenticatedUserSideBarTitle : string,
    showAuthenticatedUserSidebarCaption : string
    
} = {
    showContentSideBarButtonTitle : Translator.translate('show_content_side_bar_title'),
    showContentSideBarButtonCaption : Translator.translate('show_content_side_bar_caption'),
    showAuthenticatedUserSideBarTitle : Translator.translate('show_authenticated_user_sidebar_title'),
    showAuthenticatedUserSidebarCaption : Translator.translate('show_authenticated_user_sidebar_caption')

};

export default translations;