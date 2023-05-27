import Translator from '@jsmodules/translator.js';
import ucfirst from '@js/modules/helpers/ucfirst';

const translations : {
  updatingAnnouncement : string
} = {
   updatingAnnouncement : ucfirst(Translator.translate("updating_announcement"))
};

export default translations;