<template>
    <div class="outer-container">
      <div class="section-navbar-container">
          <h1 class="navbar-caption" v-text="navbarCaption"></h1>
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
      v-bind:voivodeships-list="voivodeshipsList"
      >
      </prostitute-location-and-working-hours>
      <prostitute-save-notice
      v-show="showSaveNotice"
      >
      </prostitute-save-notice>
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
  import ProstitutionPolicyDescription from "@jscomponents/prostitution/notice_editor/prostitution_policy_description.vue";
  import ProstitutePersonalities from "@jscomponents/prostitution/notice_editor/prostitute_personalities.vue";
  import ProstituteServices from "@jscomponents/prostitution/notice_editor/prostitute_services.vue";
  import ProstitutePhotos from "@jscomponents/prostitution/notice_editor/prostitute_photos.vue";
  import ProstituteLocationAndWorkingHours from "@jscomponents/prostitution/notice_editor/prostitute_location_and_working_hours.vue";
  import ProstituteSaveNotice from "@jscomponents/prostitution/notice_editor/prostitute_save_notice.vue";
  import LeftArrowIcon from "@svgicon/left_arrow_icon.vue";
  import RightArrowIcon from "@svgicon/right_arrow_icon.vue";
  import IdCardIcon from "@svgicon/id_card_icon.vue";
  import OhIcon from "@svgicon/oh_icon.vue";
  import ImagePhotographyIcon from "@svgicon/image_photography_icon.vue";
  import TimeLateIcon from "@svgicon/time_late_icon.vue";
  import FloppyDiscIcon from "@svgicon/floppy_disc_icon.vue";
  import { EmptyInputList } from "@jscomponents/empty_input_option";
  
  enum Section {
    ProstitutionPolicyDescription = "ProstitutionPolicyDescription",
    ProstituteBasicInformation = "ProstituteBasicInformation",
    ProstituteServices = "ProstituteServices",
    ProstitutePhotos = "ProstitutePhotos",
    ProstituteLocationAndWorkingHours = "ProstituteLocationAndWorkingHours",
    ProstituteSaveNotice = "ProstituteSaveNotice"
  }
  
  export default {
    name: "prostitution-offer-creator",
  
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
      TimeLateIcon,
      ProstituteSaveNotice,
      FloppyDiscIcon
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
          Section.ProstituteLocationAndWorkingHours,
          Section.ProstituteSaveNotice
        ],
        userTypesList : [],
        sexualOrientationsList : [],
        voivodeshipsList : [],
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
          this.token = availableOptions["token"];
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
  
      async fetchProstitutionAnnouncement(announcementID : number) {
        const requestData = {
          method: "GET",
          headers: {
            "X-CSRF-TOKEN": this.csrfToken,
            "Content-type": "application/json; charset=UTF-8",
          },
        };
        const URL = `${Routes.noticesManagement}?userID=authenticatedUser&detailsLevel=complete`;
        const response = await fetch(URL, requestData);
      },
  
      notifyUserAboutFetchError(): void {
        this.emitter.emit("showNotification", {
          notificationText: "fetching_required_data_failed_it_is_impossible_to_complete_announcement_please_try_again",
          notificationType: "error",
          headerText: "error",
        });
      },
  
      attachEventListeners(): void {
        this.emitter.on('loadProstitutionAnnouncement', this.fetchProstitutionAnnouncement)
      }
  
    },
  
    mounted() {
      this.prepareSelectValues();
      this.attachEventListeners();
    },
  
    computed: {
      decorationComponentName(): string {
        const iconComponentNamesBySection = {
          ProstitutionPolicyDescription : "SecureDocumentsIcon",
          ProstituteBasicInformation : "IdCardIcon",
          ProstituteServices : "OhIcon",
          ProstitutePhotos : "ImagePhotographyIcon",
          ProstituteLocationAndWorkingHours : "TimeLateIcon",
          ProstituteSaveNotice : "FloppyDiscIcon"
          
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
  
      showSaveNotice() : boolean {
        return this.currentSection === Section.ProstituteSaveNotice;
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
          ProstituteLocationAndWorkingHours : "location-and-working-hours",
          ProstituteSaveNotice : "save-notice"
        }
        return classesNameBySection[this.currentSection];
      }
    },
  
  };
  </script>
    
  <style lang="scss" scoped>
  @import "~sasscomponent/prostitution/offer_edit_or_create";
  </style>