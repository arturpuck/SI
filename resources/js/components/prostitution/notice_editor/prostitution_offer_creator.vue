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
    <prostitute-photos-for-creator
    v-show="showPhotos">
    </prostitute-photos-for-creator>
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
import ProstituteSaveNotice from "@jscomponents/prostitution/notice_editor/prostitute_save_notice.vue";
import ProstitutePhotosForCreator from "@jscomponents/prostitution/notice_editor/photos/prostitute_photos_for_creator.vue"
import EditorBasicControl from "@mixins/components/prostitute_announcement_creator/editor_basic_control";

enum Section {
  ProstitutionPolicyDescription = "ProstitutionPolicyDescription",
  ProstituteBasicInformation = "ProstituteBasicInformation",
  ProstituteServices = "ProstituteServices",
  ProstitutePhotosForCreator = "ProstitutePhotosForCreator",
  ProstituteLocationAndWorkingHours = "ProstituteLocationAndWorkingHours",
  ProstituteSaveNotice = "ProstituteSaveNotice"
}

export default {
  name: "prostitution-offer-creator",

  mixins : [EditorBasicControl],

  components: {
    ProstituteSaveNotice,
    ProstitutePhotosForCreator,
  },

  data() {
    return {
      orderedSections: [
        Section.ProstitutionPolicyDescription,
        Section.ProstituteBasicInformation,
        Section.ProstituteServices,
        Section.ProstitutePhotosForCreator,
        Section.ProstituteLocationAndWorkingHours,
        Section.ProstituteSaveNotice
      ],
    };
  },

  methods : {
    addEventListeners() : void {
      this.emitter.on('prostitutePhotosValidated', this.skipToNextSection);
    }
  },

  mounted() {
    this.prepareSelectValues();
    this.addEventListeners();
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
      return this.currentSection === Section.ProstitutePhotosForCreator;
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
        ProstitutePhotosForCreator : "photos-section",
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
.outer-container {
  max-width:900px;
}
</style>
  