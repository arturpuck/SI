<template>
  <section class="edit-notice">
    <expect-shadow-circle
      v-show="processingRequest"
      v-bind:circle-label="translations.updatingAnnouncement"
    ></expect-shadow-circle>
    <div class="announcement-info" v-text="translations.announcementUpdateInfo"></div>
    <save-button v-on:click="updateAnnouncement" class="button-save"></save-button>
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
import SaveButton from "@jscomponents-form-controls/save_button.vue";
import RequestBuilding from "@mixins/components/prostitute_announcement_creator/request_building";

export default {
  name: "prostitution-save-edited-notice",

  mixins: [RequestBuilding],

  components: {
    AddButton,
    ExpectShadowCircle,
    SaveButton,
  },

  data() {
    return {
      translations: Translations,
      routesConfig: RoutesConfig,
      csrfToken: "",
      processingRequest: false,
    };
  },

  methods: {
    getRequestBody(): FormData {
      let requestBody = {};
      let formData = new FormData();

      this.modifiedFields.forEach((modifiedField) => {
        switch (modifiedField) {
          case "photos":
            this.createRequestObjectPhotosPart(formData);
            break;

          case "workingHours":
            requestBody["workingHours"] = this.createRequestObjectWorkingHoursPart()[
              "workingHours"
            ];
            break;

          case "secondaryServices":
            requestBody["secondaryServices"] = JSON.stringify(this.secondaryServices);
            break;

          case "paymentForms":
            requestBody["paymentForms"] = JSON.stringify(this.paymentForms);
            break;

          default:
            requestBody[modifiedField] =
              modifiedField === "choose" ? "remove" : this[modifiedField];
            break;
        }
      });
      Object.keys(requestBody).forEach((key) => formData.append(key, requestBody[key]));
      formData.append("id", this.id);
      return formData;
    },

    createRequestObjectPhotosPart(formData: FormData): void {
      this.photos.forEach((photo, index) => formData.append(`photo${index}`, photo));
    },

    updateAnnouncement() {
      if (this.userHasModifiedAnything) {
        this.sendUpdateRequest();
      }
    },

    async sendUpdateRequest() {
      const requestBody = this.getRequestBody();
      const requestData = {
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": this.csrfToken,
          "X-HTTP-Method-Override": "PATCH", //it looks like using FormData is not allowed for PATCH request so we are pretending
        },
        body: requestBody,
      };

      const response = await fetch(RoutesConfig.noticesManagement, requestData);
      console.log(response);
    },
  },

  computed: {
    //@ts-ignore
    ...mapWritableState(announcementDetails, [
      ...GlobalPropertiesNames,
      "modifiedFields",
      "id",
    ]),

    userHasModifiedAnything(): boolean {
      return this.modifiedFields.length > 0;
    },
  },

  mounted() {
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.button-save {
  margin-bottom: 5px;
}

.announcement-info {
  padding: 10px;
  color: white;
}

.edit-notice {
  text-align: center;
  @include responsive-font();
  position: relative;
}

.important-info {
  color: red;
}
</style>
