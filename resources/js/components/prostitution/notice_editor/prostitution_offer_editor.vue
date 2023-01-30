<template>
  <div class="outer-container">
    <div class="section-navbar-container">
        <span class="navbar-caption" v-text="navbarCaption"></span>
      <component
        class="navbar-section-icon"
        v-bind:class="iconClass"
        :is="decorationComponentName"
      ></component>
    </div>
    <prostitution-policy-description
      v-on:validated="skipToNextSection"
      v-show="showPolicyDescription"
    ></prostitution-policy-description>
    <prostitute-personalities
      v-show="showBasicInformation"
      v-bind:user-types-list="userTypesList"
      v-bind:sexual-orientations-list="sexualOrientationsList"
      v-on:validated="skipToNextSection"
    ></prostitute-personalities>
    <prostitute-services
      v-show="showServices"
      v-on:validated="skipToNextSection"
    ></prostitute-services>
    <prostitute-photos
    v-on:validated="skipToNextSection"
    v-bind:token="token"
    v-show="showPhotos">
    </prostitute-photos>
    <prostitute-location-and-working-hours
    v-show="showLocationAndWorkingHours"
    v-on:validated="skipToNextSection"
    >

    </prostitute-location-and-working-hours>
    <div class="bottom-navigation">
      <div
        class="navigation-description"
        v-text="translations['prostitution_offer_bottom_navigation_info']"
      ></div>
      <div class="change-sections-container">
        <left-arrow-icon v-on:click="skipToPreviousSection" class="change-section"></left-arrow-icon>
        <right-arrow-icon v-on:click="tryToSkipToNextSection" class="change-section"></right-arrow-icon>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import InfoCircleIcon from "@svgicon/info_circle_icon.vue";
import lcfirst from "@jsmodules/helpers/lcfirst";
import Translations, {
  sections,
} from "@jsmodules/translations/components/prostitution_offer_editor";
import SimpleLabeledSelect from "@jscomponents-form-controls/simple_labeled_select.vue";
import SecureDocumentsIcon from "@svgicon/secure_documents_icon.vue";
import Routes from "@config/paths/routes";
import ProstitutionPolicyDescription from "@jscomponents/prostitution/notice_editor/prostitution_policy_description";
import ProstitutePersonalities from "@jscomponents/prostitution/notice_editor/prostitute_personalities";
import ProstituteServices from "@jscomponents/prostitution/notice_editor/prostitute_services";
import ProstitutePhotos from "@jscomponents/prostitution/notice_editor/prostitute_photos";
import ProstituteLocationAndWorkingHours from "@jscomponents/prostitution/notice_editor/prostitute_location_and_working_hours";
import LeftArrowIcon from "@svgicon/left_arrow_icon.vue";
import RightArrowIcon from "@svgicon/right_arrow_icon.vue";
import IdCardIcon from "@svgicon/id_card_icon.vue";
import OhIcon from "@svgicon/oh_icon.vue";
import ImagePhotographyIcon from "@svgicon/image_photography_icon.vue";
import TimeLateIcon from "@svgicon/time_late_icon.vue"; 

enum Section {
  ProstitutionPolicyDescription = "ProstitutionPolicyDescription",
  ProstituteBasicInformation = "ProstituteBasicInformation",
  ProstituteServices = "ProstituteServices",
  ProstitutePhotos = "ProstitutePhotos",
  ProstituteLocationAndWorkingHours = "ProstituteLocationAndWorkingHours",
}

export default {
  name: "prostitution-offer-editor",

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
    ProstitutePhotos,
    ImagePhotographyIcon,
    TimeLateIcon
  },

  data() {
    return {
      translations: Translations,
      sections,
      sectionIndex : 4,
      orderedSections: [
        Section.ProstitutionPolicyDescription,
        Section.ProstituteBasicInformation,
        Section.ProstituteServices,
        Section.ProstitutePhotos,
        Section.ProstituteLocationAndWorkingHours
      ],
      userTypesList : [],
      sexualOrientationsList : [],
      token : ''
    };
  },

  methods : {
    skipToNextSection() : void {
      this.sectionIndex = (this.sectionIndex >= this.orderedSections.length - 1) ? this.sectionIndex : this.sectionIndex + 1;
    },

    tryToSkipToNextSection() : void {
      const eventName = `${lcfirst(this.currentSection)}Validator`;
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
          "X-CSRF-TOKEN": this.csrfToken,
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      return fetch(Routes.noticeFormOptions, requestData);
    },

    async updateSelects(response) {
      if (response.status === 200) {
        const availableOptions = await response.json();
        const userTypesList = this.parseForSelectOptions(
          availableOptions["userTypes"],
          "user_type_name"
        );
        const sexualOrientationsList = this.parseForSelectOptions(
          availableOptions["sexualOrientations"],
          "sexual_orientation_name"
        );
        this.userTypesList = userTypesList;
        this.sexualOrientationsList = sexualOrientationsList;
        this.token = availableOptions["token"];
      } else {
        this.notifyUserAboutFetchError();
      }
    },

    parseForSelectOptions(options, keyName: string): object {
      const result = { 0: `--${Translations.choose_options}--` };
      options.forEach((option) => {
        result[option.id] = Translations[option[keyName]];
      });
      return result;
    },

    notifyUserAboutFetchError(): void {
      this.emitter.emit("showNotification", {
        notificationText: "an_error_occured_while_fetching_required_data",
        notificationType: "error",
        headerText: "error",
      });
    },

  },

  mounted() {
    this.prepareSelectValues();
  },

  computed: {
    decorationComponentName(): string {
      const iconComponentNamesBySection = {
        ProstitutionPolicyDescription : "SecureDocumentsIcon",
        ProstituteBasicInformation : "IdCardIcon",
        ProstituteServices : "OhIcon",
        ProstitutePhotos : "ImagePhotographyIcon",
        ProstituteLocationAndWorkingHours : "TimeLateIcon"
        
      } 
      return iconComponentNamesBySection[this.currentSection];
    },

    navbarCaption() : string {
      return `${this.translations["section"]} : ${sections[this.currentSection]}`;
    },

    currentSection() : Section {
      return this.orderedSections[this.sectionIndex];
    },

    showPolicyDescription(): boolean {
      return this.currentSection === Section.ProstitutionPolicyDescription;
    },

    showBasicInformation(): boolean {
      return this.currentSection === Section.ProstituteBasicInformation;
    },

    showServices() : boolean {
      return this.currentSection === Section.ProstituteServices;
    },

    showPhotos() : boolean {
      return this.currentSection === Section.ProstitutePhotos;
    },

    showLocationAndWorkingHours() : boolean {
     return this.currentSection === Section.ProstituteLocationAndWorkingHours;
    },

    iconClass() : string {
      const classesNameBySection = {
        ProstitutionPolicyDescription : "policy-section",
        ProstituteBasicInformation : "personalities-section",
        ProstituteServices : "services-section",
        ProstitutePhotos : "photos-section",
        ProstituteLocationAndWorkingHours : "location-and-working-hours"
      }
      return classesNameBySection[this.currentSection];
    }
  },

};
</script>
  
  <style lang="scss" scoped>
@import "~sass/fonts";

.policy-section {
  fill:white;
}

.services-section {
  fill:#dd0d85;
}

.personalities-section {
  fill: #2bd71b;
}

.photos-section {
  fill:#fbf7f8;
  width: auto;
}


.outer-container {
  border-radius: 4px;
  max-width: 900px;
}

.navbar-section-icon {
  height: 1.5em;
}

.section-navbar-container {
  background: black;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px 4px 0 0;
}

#app .select-container {
  border: 2px solid #148327;
}

.change-sections-container {
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
}

.change-section {
  fill: #13d735;
  height: 1.8em;
  cursor: pointer;
  transition: transform 0.5s;
  &:active {
    transform: scale(1.3);
  }
}

.bottom-navigation {
  background: black;
  color: #828181;
  @include responsive-font(1vw, 13px);
}

.navigation-description {
  padding: 3px;
  text-align: center;
}

.navbar-caption {
  @include responsive-font(1.5vw, 16px);
  color:white;
}

.location-and-working-hours {
  width: 35px;
  height: 35px;
  fill: #22d31b
}
</style>
  