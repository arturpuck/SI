import Translator from '@jsmodules/translator.js';
import UpperCaseFirst from "@jsmodules/helpers/ucfirst";

const descriptions : {
  areYouSure : string,
  yes : string,
  no : string

} = {
    areYouSure : `${UpperCaseFirst(Translator.translate("are_you_sure"))} ?`,
    yes : `${UpperCaseFirst(Translator.translate('yes'))}`,
    no : `${UpperCaseFirst(Translator.translate('no'))}`
};

export default descriptions;