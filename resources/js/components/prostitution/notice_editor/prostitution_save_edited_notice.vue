<template>
  <section class="edit-notice">
    <expect-shadow-circle
      v-show="processingRequest"
      v-bind:circle-label="translations.updatingAnnouncement"
    ></expect-shadow-circle>
  </section>
</template>

<script lang="ts">
import Translations from "@js/modules/translations/components/prostitution/prostitution_save_edited_notice";
import RoutesConfig from "@config/paths/routes";
import AddButton from "@jscomponents-form-controls/add_button.vue";
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";
import { mapWritableState } from "pinia";
import GlobalPropertiesNames from "@jscomponents/prostitution/notice_editor/global_properties_names";
import ExpectShadowCircle from "@jscomponents-decoration/expect_shadow_circle.vue";

interface WorkingPeriodRange {
  since: string;
  until: string;
}

export default {
  name: "prostitution-save-edited-notice",

  components: {
    AddButton,
    ExpectShadowCircle,
  },

  data() {
    return {
      translations: Translations,
      routesConfig: RoutesConfig,
      csrfToken: "",
      processingRequest: false,
    };
  },

  methods: {},

  computed: {
    //@ts-ignore
    ...mapWritableState(announcementDetails, [
      ...GlobalPropertiesNames,
      "modifiedFields",
    ]),

    userPerformsBlowjobWithoutCondom(): boolean {
      return (
        this.blowjobPreference === "without_condom" ||
        this.blowjobPreference === "without_condom_with_aditional_payments"
      );
    },

    userAllowsOralCreampie(): boolean {
      return (
        this.oralCreampiePreference === "included" ||
        this.oralCreampiePreference === "aditional_payment"
      );
    },
  },

  mounted() {
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.edit-notice {
  padding: 4px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  text-align: center;
  @include responsive-font();
  position: relative;
}

.important-info {
  color: red;
}
</style>
