import Translator from '@jsmodules/translator.js';
import UpperCaseFirst from "@jsmodules/helpers/ucfirst";
const translations : {
    city : string,
    hiddenByAUser : string,
    nickname : string,
    phoneNumber : string,
    validUntil : string,
    region : string,
    photosAreValidAndUpToDate : string,
    actions : string,
    notProvided : string,
    yes : string,
    no : string,
    notValidAwaitingVerificationNotVisibleForUsers : string,
    fetchingAnnouncements : string,
    youDontHaveAnyAnnouncements : string,
    announcementsCannotBeDisplayedBecauseAnErrorOccured : string,
    announcementWilNotBeDisplayedForPotentialClients : string,
} = {
    city : Translator.translate("city"),
    hiddenByAUser : Translator.translate('hidden_by_a_user'),
    nickname : Translator.translate("nickname"),
    phoneNumber : UpperCaseFirst(Translator.translate("phone_number")),
    validUntil : UpperCaseFirst(Translator.translate("valid_until")),
    region : UpperCaseFirst(Translator.translate("region")),
    photosAreValidAndUpToDate : UpperCaseFirst(Translator.translate("photosAreValidAndUpToDate")),
    actions : UpperCaseFirst(Translator.translate("actions")),
    notProvided : UpperCaseFirst(Translator.translate('not_provided')),
    yes : Translator.translate("yes"),
    no : Translator.translate("no"),
    notValidAwaitingVerificationNotVisibleForUsers : Translator.translate("not_valid_awaiting_verification_not_visible_for_users"),
    fetchingAnnouncements : Translator.translate("fetching_announcements"),
    youDontHaveAnyAnnouncements : Translator.translate("you_dont_have_any_announcements"),
    announcementsCannotBeDisplayedBecauseAnErrorOccured : Translator.translate("announcements_cannot_be_displayed_because_an_error_occured"),
    announcementWilNotBeDisplayedForPotentialClients : Translator.translate("announcement_wil_not_be_displayed_for_potential_clients")
};

export default translations;