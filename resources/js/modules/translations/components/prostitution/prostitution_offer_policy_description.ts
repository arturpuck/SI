import Translator from '@jsmodules/translator.js';

const translations : {
    policy_description : string,
    clicking_here : string,
    announcements_are_free : string,
    dont_spam_with_announcements : string,
    announcement_will_not_be_added_immidiatelly : string,
    everyone_can_comment_a_prostitute : string,
    in_case_of_a_problem_please_contact_us_using_the_contact_form : string,
    comments_are_filtered_by_admins_to_prevent_revealing_classified_information : string
} = {
    policy_description : Translator.translate('prostitution_offer_policy_description'),
    announcement_will_not_be_added_immidiatelly : Translator.translate('announcement_will_not_be_added_immidiatelly'),
    clicking_here : Translator.translate('clicking_here'),
    announcements_are_free : Translator.translate('prostitution_announcements_are_free'),
    dont_spam_with_announcements : Translator.translate('dont_spam_with_announcements'),
    everyone_can_comment_a_prostitute : Translator.translate('everyone_can_comment_a_prostitute'),
    in_case_of_a_problem_please_contact_us_using_the_contact_form : Translator.translate('in_case_of_a_problem_please_contact_us_using_the_contact_form'),
    comments_are_filtered_by_admins_to_prevent_revealing_classified_information : Translator.translate("comments_are_filtered_by_admins_to_prevent_revealing_classified_information")
};

export default translations;