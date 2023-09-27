import InfoCircleIcon from "@svgicon/info_circle_icon.vue";
import lcfirst from "@jsmodules/helpers/lcfirst";
import Translations, {
  sections,
} from "@jsmodules/translations/components/prostitution/prostitution_offer_editor";
import SimpleLabeledSelect from "@jscomponents-form-controls/simple_labeled_select.vue";
import SecureDocumentsIcon from "@svgicon/secure_documents_icon.vue";
import Routes from "@config/paths/routes";
import ProstitutionPolicyDescription from "@jscomponents/prostitution/notice_editor/prostitution_policy_description.vue";
import ProstitutePersonalities from "@jscomponents/prostitution/notice_editor/prostitute_personalities.vue";
import ProstituteServices from "@jscomponents/prostitution/notice_editor/prostitute_services.vue";
import ProstituteLocationAndWorkingHours from "@jscomponents/prostitution/notice_editor/prostitute_location_and_working_hours.vue";
import LeftArrowIcon from "@svgicon/left_arrow_icon.vue";
import RightArrowIcon from "@svgicon/right_arrow_icon.vue";
import IdCardIcon from "@svgicon/id_card_icon.vue";
import OhIcon from "@svgicon/oh_icon.vue";
import ImagePhotographyIcon from "@svgicon/image_photography_icon.vue";
import TimeLateIcon from "@svgicon/time_late_icon.vue";
import FloppyDiscIcon from "@svgicon/floppy_disc_icon.vue";
import { EmptyInputList } from "@jscomponents/empty_input_option";

export default {
    components: {
        InfoCircleIcon,
        SimpleLabeledSelect,
        SecureDocumentsIcon,
        ProstitutionPolicyDescription,
        ProstitutePersonalities,
        LeftArrowIcon,
        RightArrowIcon,
        IdCardIcon,
        OhIcon,
        ProstituteServices,
        ProstituteLocationAndWorkingHours,
        ImagePhotographyIcon,
        TimeLateIcon,
        FloppyDiscIcon
      },

      data() {
        return {
          translations: Translations,
          sections,
          sectionIndex : 4,
          userTypesList : [],
          sexualOrientationsList : [],
          voivodeshipsList : [],
        };
      },

      methods : {
        skipToNextSection() : void {
          this.sectionIndex = (this.sectionIndex >= this.orderedSections.length - 1) ? this.sectionIndex : this.sectionIndex + 1;
        },
    
        tryToSkipToNextSection() : void {
          let eventName = `${lcfirst(this.currentSection)}Validator`;
          this.emitter.emit(eventName);
        },
    
        skipToPreviousSection() : void {
          this.sectionIndex = this.sectionIndex <= 0 ? 0 : this.sectionIndex - 1;
        },
    
        prepareSelectValues(): void {
          this.fetchAvailableOptions().then(this.updateSelects);
        },
    
        fetchAvailableOptions() {
          const requestData = {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          };
    
          return fetch(Routes.noticeFormOptions, requestData);
        },
    
        async updateSelects(response) {
          if (response.status === 200) {
            const availableOptions = await response.json();
            this.userTypesList = this.parseForSelectOptions(
              availableOptions["userTypes"],
              "user_type_name"
            );
            this.sexualOrientationsList = this.parseForSelectOptions(
              availableOptions["sexualOrientations"],
              "sexual_orientation_name"
            );
            this.voivodeshipsList = this.parseForSelectOptions(
              availableOptions["voivodeships"],
              'name'
            );
          } else {
            this.notifyUserAboutFetchError();
          }
        },
    
        parseForSelectOptions(options, keyName: string): object {
          const result = {...EmptyInputList};
          options.forEach((option) => {
            result[option.id] = Translations[option[keyName]] ?? option[keyName];
          });
          return result;
        },
    
        notifyUserAboutFetchError(): void {
          this.emitter.emit("showNotification", {
            notificationText: "fetching_required_data_failed_it_is_impossible_to_complete_announcement_please_try_again",
            notificationType: "error",
            headerText: "error",
          });
        },

        addEventListeners() : void {
          this.emitter.on('prostitutePhotosValidated', this.skipToNextSection);
        }
    
      },

      computed: {
    
        navbarCaption() : string {
          return `${this.translations["section"]} : ${sections[this.currentSection]}`;
        },

    
      },
}