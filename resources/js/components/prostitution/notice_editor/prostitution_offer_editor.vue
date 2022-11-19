<template>
  <div class="outer-container">
    <div class="section-navbar-container">
        <span class="navbar-caption" v-text="navbarCaption"></span>
      <component
        class="navbar-section-icon"
        :is="decorationComponentName"
      ></component>
    </div>
    <prostitution-policy-description
      v-on:validated="skipToNextSection"
      v-show="showPolicyDescription"
    ></prostitution-policy-description>
    <prostitute-basic-information
      v-show="showBasicInformation"
      v-on:validated="skipToNextSection"
    ></prostitute-basic-information>
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
import ProstitutionPolicyDescription from "@jscomponents/prostitution/notice_editor/prostitution_policy_description";
import ProstituteBasicInformation from "@jscomponents/prostitution/notice_editor/prostitute_basic_information";
import LeftArrowIcon from "@svgicon/left_arrow_icon.vue";
import RightArrowIcon from "@svgicon/right_arrow_icon.vue";
import IdCardIcon from "@svgicon/id_card_icon.vue";

enum Section {
  ProstitutionPolicyDescription = "ProstitutionPolicyDescription",
  ProstituteBasicInformation = "ProstituteBasicInformation",
  ProstituteServices = "ProstituteServices",
}

export default {
  name: "prostitution-offer-editor",

  components: {
    InfoCircleIcon,
    SimpleLabeledSelect,
    SecureDocumentsIcon,
    ProstitutionPolicyDescription,
    ProstituteBasicInformation,
    LeftArrowIcon,
    RightArrowIcon,
    IdCardIcon
  },

  data() {
    return {
      translations: Translations,
      sections,
      sectionIndex : 0,
      orderedSections: [
        Section.ProstitutionPolicyDescription,
        Section.ProstituteBasicInformation,
        Section.ProstituteServices
      ]
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

  },

  computed: {
    decorationComponentName(): string {
      const iconComponentNamesBySection = {
        ProstitutionPolicyDescription : "SecureDocumentsIcon",
        ProstituteBasicInformation : "IdCardIcon"
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
  },

};
</script>
  
  <style lang="scss" scoped>
@import "~sass/fonts";

.outer-container {
  border-radius: 4px;
  max-width: 800px;
}

.navbar-section-icon {
  height: 1.5em;
  fill:white;
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
  @include responsive-font(1.1vw, 13px);
}

.navigation-description {
  padding: 3px;
  text-align: center;
}

.navbar-caption {
  @include responsive-font(1.5vw, 21px);
  color:white;
}
</style>
  