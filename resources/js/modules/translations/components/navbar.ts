import Translator from '@jsmodules/translator.js';

const translations : {
    showContentSideBarButtonTitle : string,
    showContentSideBarButtonCaption : string,
    showAuthenticatedUserSideBarTitle : string,
    showAuthenticatedUserSidebarCaption : string,
    userAvatarDescription : string
    
} = {
    showContentSideBarButtonTitle : Translator.translate('show_content_side_bar_title'),
    showContentSideBarButtonCaption : Translator.translate('show_content_side_bar_caption'),
    showAuthenticatedUserSideBarTitle : Translator.translate('show_authenticated_user_sidebar_title'),
    showAuthenticatedUserSidebarCaption : Translator.translate('show_authenticated_user_sidebar_caption'),
    userAvatarDescription : Translator.translate('user_avatar_description')
};

export default translations;