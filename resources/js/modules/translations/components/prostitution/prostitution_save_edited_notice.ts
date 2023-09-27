import Translator from '@jsmodules/translator.js';
import ucfirst from '@js/modules/helpers/ucfirst';

const translations : {
  updatingAnnouncement : string,
  announcementUpdateInfo : string
} = {
   updatingAnnouncement : ucfirst(Translator.translate("updating_announcement")),
   announcementUpdateInfo : ucfirst(Translator.translate("announcement_update_info")),
};

export default translations;