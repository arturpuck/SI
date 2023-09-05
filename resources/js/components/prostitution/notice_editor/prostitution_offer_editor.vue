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
      v-bind:disabled-birth-date="true"
      v-bind:sexual-orientations-list="sexualOrientationsList"
      v-on:validated="skipToNextSection"
    ></prostitute-personalities>
    <prostitute-services
      v-show="showServices"
      v-on:validated="skipToNextSection"
    ></prostitute-services>
    <prostitute-photos-for-editor
      v-bind:any-photo-awaits-validation="anyPhotoAwaitsValidation"
      v-show="showPhotos"
    ></prostitute-photos-for-editor>
    <prostitute-location-and-working-hours
      v-show="showLocationAndWorkingHours"
      v-on:validated="skipToNextSection"
      v-bind:voivodeships-list="voivodeshipsList"
    >
    </prostitute-location-and-working-hours>
    <prostitution-edit-notice v-show="showEditNotice"> </prostitution-edit-notice>
    <div class="bottom-navigation">
      <div
        class="navigation-description"
        v-text="translations['prostitution_offer_bottom_navigation_info']"
      ></div>
      <div class="change-sections-container">
        <left-arrow-icon
          v-on:click="skipToPreviousSection"
          class="change-section"
        ></left-arrow-icon>
        <right-arrow-icon
          v-on:click="tryToSkipToNextSection"
          class="change-section"
        ></right-arrow-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EditorBasicControl from "@mixins/components/prostitute_announcement_creator/editor_basic_control";
import Routes from "@config/paths/routes";
import { sections } from "@js/modules/translations/components/prostitution/prostitution_offer_editor";
import ProstitutionEditNotice from "@js/components/prostitution/notice_editor/prostitution_save_edited_notice.vue";
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";
import { mapWritableState } from "pinia";
import GlobalPropertiesNames from "@jscomponents/prostitution/notice_editor/global_properties_names";
import { allMainSexServices } from "@jscomponents/prostitution/notice_editor/global_properties_names";
import ProstitutePhotosForEditor from "@jscomponents/prostitution/notice_editor/photos/prostitute_photos_for_editor.vue";
import TokenSetter from "@mixins/components/prostitute_announcement_creator/token_setter";
import TokenErrorProcessor from "@mixins/components/prostitute_announcement_creator/token_error_processor";
import InitialTimePeriods from "@js/mixins/components/prostitute_announcement_creator/initial_time_periods";
import { Weekdays } from "@js/enum/weekdays";
import { EmptyInputValue } from "@jscomponents/empty_input_option";

enum Section {
  ProstitutionPolicyDescription = "ProstitutionPolicyDescription",
  ProstituteBasicInformation = "ProstituteBasicInformation",
  ProstituteServices = "ProstituteServices",
  ProstitutePhotosForEditor = "ProstitutePhotosForEditor",
  ProstituteLocationAndWorkingHours = "ProstituteLocationAndWorkingHours",
  ProstitutionSaveEditedNotice = "ProstitutionSaveEditedNotice",
}

export default {
  name: "prostitution-offer-editor",

  emits: ["announcementLoaded"],

  mixins: [EditorBasicControl, TokenSetter, TokenErrorProcessor, InitialTimePeriods],

  components: {
    ProstitutionEditNotice,
    ProstitutePhotosForEditor,
  },

  data() {
    return {
      anyPhotoAwaitsValidation: false,

      orderedSections: [
        Section.ProstitutionPolicyDescription,
        Section.ProstituteBasicInformation,
        Section.ProstituteServices,
        Section.ProstitutePhotosForEditor,
        Section.ProstituteLocationAndWorkingHours,
        Section.ProstitutionSaveEditedNotice,
      ],
      simpleFields: [
        "uniqueID",
        "birthDate",
        "titsSize",
        "description",
        "hairColor",
        "nickname",
        "phoneNumber",
        "regionId",
        "userTypeId",
        "sexualOrientationId",
        "heightInCentimeters",
        "weightInKilograms",
      ],
    };
  },

  methods: {
    async fetchProstitutionAnnouncement(uniqueID: number) {
      const requestData = {
        method: "GET",
        headers: {
          "X-CSRF-TOKEN": this.csrfToken,
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      const URL = `${Routes.noticesManagement}?detailsLevel=complete&announcementUniqueIdentifier=${uniqueID}`;
      const response = await fetch(URL, requestData);
      if (response.status !== 200) {
        this.showErrorMessage(
          "fetching_required_data_failed_it_is_impossible_to_complete_announcement_please_try_again"
        );
        return;
      }
      const announcementDetails = await response.json();
      this.loadProstitutionAnnouncement(announcementDetails[0], uniqueID);
    },

    attachEventListeners(): void {
      this.emitter.on("loadProstitutionAnnouncement", this.fetchProstitutionAnnouncement);
      this.emitter.on("prostitutePhotosValidated", this.skipToNextSection);
    },

    clearModifiedFields(): void {
      this.modifiedFields = [];
    },

    loadProstitutionAnnouncement(announcementDetails, uniqueID: string) {
      this.clearModifiedFields();
      this.uniqueID = uniqueID;
      this.loadSimpleFields(announcementDetails);
      this.loadCities(announcementDetails);
      this.loadServices(announcementDetails);
      this.loadPaymentForms(announcementDetails);
      this.loadPhotos(announcementDetails);
      this.loadOldToken(announcementDetails);
      this.loadWorkingHours(announcementDetails);
      this.addPropertiesForMonitoring();
      this.$emit("announcementLoaded");
    },

    loadWorkingHours(announcementDetails): void {
      if (announcementDetails.hasOwnProperty("workingHours")) {
        let workingHours = JSON.parse(announcementDetails.workingHours);
        Object.values(Weekdays).forEach((period) => {
          if (!workingHours.hasOwnProperty(period)) {
            workingHours[period] = this.getUndefinedPeriod();
            this.daysMarkedAsFree[period] = true;
          }
        });

        workingHours["mondayToFriday"] = this.getUndefinedPeriod();
        this.daysMarkedAsFree["mondayToFriday"] = true;

        if (!workingHours.hasOwnProperty("saturday")) {
          workingHours["saturday"] = this.getUndefinedPeriod();
          this.daysMarkedAsFree["saturday"] = true;
        } else {
          this.daysMarkedAsFree["saturday"] = false;
        }

        if (!workingHours.hasOwnProperty("sunday")) {
          workingHours["sunday"] = this.getUndefinedPeriod();
          this.daysMarkedAsFree["sunday"] = true;
        } else {
          this.daysMarkedAsFree["sunday"] = true;
        }

        this.workingHours = workingHours;
        this.preciseHoursDecision = 1;
        this.showEverySingleWeekday = true;
      } else {
        this.preciseHoursDecision = 0;
      }
    },

    loadPhotos(announcementDetails): void {
      this.emitter.emit("loadImagesByURL", announcementDetails.photosURLs);
      this.anyPhotoAwaitsValidation = announcementDetails.anyPhotoAwaitsValidation === 1;
    },

    loadPaymentForms(announcementDetails): void {
      this.paymentForms = JSON.parse(announcementDetails.paymentForms);
    },

    loadServices(announcementDetails): void {
      const userSelectedMainServices = JSON.parse(announcementDetails.mainServices);
      allMainSexServices.forEach((preference) => {
        const serviceKey = `${preference}Preference`;
        const aditionalPaymentKey = `${preference}AditionalPayment`;
        this[serviceKey] = userSelectedMainServices.hasOwnProperty(serviceKey)
          ? userSelectedMainServices[serviceKey]
          : "never";

        this[aditionalPaymentKey] = userSelectedMainServices.hasOwnProperty(
          aditionalPaymentKey
        )
          ? userSelectedMainServices[aditionalPaymentKey]
          : "never";
      });

      if (announcementDetails.hasOwnProperty("secondaryServices")) {
        this.secondaryServices = JSON.parse(announcementDetails.secondaryServices);
      }
      this.tripsPreference = userSelectedMainServices.hasOwnProperty("tripsPreference")
        ? "1"
        : "0";
    },

    loadCities(announcementDetails): void {
      const citiesDetails = {
        cities: announcementDetails.cities,
        initialValue: announcementDetails.cityId,
      };
      this.emitter.emit("loadCities", citiesDetails);
    },

    loadSimpleFields(announcementDetails): void {
      this.simpleFields.forEach((fieldName) => {
        if (announcementDetails.hasOwnProperty(fieldName)) {
          this[fieldName] = announcementDetails[fieldName];
        }
      });
    },

    loadOldToken(announcementDetails) {
      this.emitter.emit(
        "setProstitutePhotoToken",
        announcementDetails.lastGeneratedToken
      );
    },

    addPropertiesForMonitoring(): void {
      let propertiesList = this.getPropertiesThatShouldBeAddedToWatchFromTheBeginning();
      propertiesList.forEach((property) => {
        this.$watch(
          property,
          () => {
            if (!this.modifiedFields.includes(property)) {
              this.modifiedFields.push(property);
            }
          },
          { deep: true }
        );
      });
    },

    getPropertiesThatShouldBeAddedToWatchFromTheBeginning(): string[] {
      const excludedProperties = ["photos", "showEverySingleWeekday"];
      return GlobalPropertiesNames.filter(
        (property) => !excludedProperties.includes(property)
      );
    },
  },

  mounted() {
    this.prepareSelectValues();
    this.attachEventListeners();
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
  },

  computed: {
    //@ts-ignore
    ...mapWritableState(announcementDetails, [
      ...GlobalPropertiesNames,
      "modifiedFields",
      "id",
      "daysMarkedAsFree",
    ]),

    decorationComponentName(): string {
      const iconComponentNamesBySection = {
        ProstitutionAnnouncementEditionDescription: "SecureDocumentsIcon",
        ProstituteBasicInformation: "IdCardIcon",
        ProstituteServices: "OhIcon",
        ProstitutePhotos: "ImagePhotographyIcon",
        ProstituteLocationAndWorkingHours: "TimeLateIcon",
        ProstitutionEditNotice: "FloppyDiscIcon",
      };
      return iconComponentNamesBySection[this.currentSection];
    },

    navbarCaption(): string {
      return `${this.translations["section"]} : ${sections[this.currentSection]}`;
    },

    currentSection(): Section {
      return this.orderedSections[this.sectionIndex];
    },

    showPolicyDescription(): boolean {
      return this.currentSection === Section.ProstitutionPolicyDescription;
    },

    showBasicInformation(): boolean {
      return this.currentSection === Section.ProstituteBasicInformation;
    },

    showServices(): boolean {
      return this.currentSection === Section.ProstituteServices;
    },

    showPhotos(): boolean {
      return this.currentSection === Section.ProstitutePhotosForEditor;
    },

    showEditNotice(): boolean {
      return this.currentSection === Section.ProstitutionSaveEditedNotice;
    },

    showLocationAndWorkingHours(): boolean {
      return this.currentSection === Section.ProstituteLocationAndWorkingHours;
    },

    iconClass(): string {
      const classesNameBySection = {
        ProstitutionPolicyDescription: "policy-section",
        ProstituteBasicInformation: "personalities-section",
        ProstituteServices: "services-section",
        ProstitutePhotosForEditor: "photos-section",
        ProstituteLocationAndWorkingHours: "location-and-working-hours",
        ProstituteSaveNotice: "save-notice",
      };
      return classesNameBySection[this.currentSection];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~sasscomponent/prostitution/offer_edit_or_create";
</style>
