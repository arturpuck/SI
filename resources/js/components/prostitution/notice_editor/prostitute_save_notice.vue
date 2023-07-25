<template>
  <section class="save-notice">
    <div class="info-container">
      <span v-text="translations['prostitute_save_announcement_info']"></span>
      <strong
        class="important-info"
        v-text="translations['announcement_must_be_validated_reminder']"
      ></strong>
      <span v-text="translations['just_one_offer_reminder']"></span>
    </div>
    <add-button v-on:click="saveNotice">{{ translations["add_notice"] }}</add-button>
  </section>
</template>

<script lang="ts">
import Translations from "@js/modules/translations/components/prostitution/prostitution_save_notice";
import RoutesConfig from "@config/paths/routes";
import AddButton from "@jscomponents-form-controls/add_button.vue";
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";
import { mapWritableState } from "pinia";
import GlobalPropertiesNames from "@jscomponents/prostitution/notice_editor/global_properties_names";
import { optionalPersonalitiesPropertiesNames } from "@jscomponents/prostitution/notice_editor/global_properties_names";
import { sexServicesAlwaysVisibleKeys } from "@jscomponents/prostitution/notice_editor/global_properties_names";
import { EmptyInputValue } from "@jscomponents/empty_input_option";
import RequestBuilding from "@mixins/components/prostitute_announcement_creator/request_building";

export default {
  name: "prostitution-save-notice",

  mixins: [RequestBuilding],

  components: {
    AddButton,
  },

  data() {
    return {
      translations: Translations,
      routesConfig: RoutesConfig,
      csrfToken: "",
    };
  },

  methods: {
    createRequestObject(): FormData {
      let rawObject = {
        ...this.createRequestObjectPersonalitiesPart(),
        ...this.createRequestObjectServicesPart(),
        ...this.createRequestObjectLocationAndWorkingHoursPart(),
      };
      let formData = new FormData();
      Object.keys(rawObject).forEach((key) => formData.append(key, rawObject[key]));
      this.createRequestObjectPhotosPart(formData);
      return formData;
    },

    createRequestObjectLocationAndWorkingHoursPart(): object {
      let requestPart = {};
      if (this.preciseHoursDecision === "1") {
        //sucks a little bit I know
        requestPart = this.createRequestObjectWorkingHoursPart();
      }
      return {
        ...requestPart,
        ...this.createLocationRequestPart(),
      };
    },

    createLocationRequestPart(): object {
      return {
        cityId: this.cityId,
        regionId: this.regionId,
      };
    },

    anyValueWasChosenByUser(propertyValue): boolean {
      return propertyValue && propertyValue != EmptyInputValue;
    },

    createRequestObjectPhotosPart(formData: FormData): void {
      this.photos.forEach((photo, index) => formData.append(`photo${index}`, photo));
    },

    createRequestObjectPersonalitiesPart(): object {
      let personalitiesPart = {
        nickname: this.nickname,
        birthDate: this.birthDate,
        userTypeId: this.userTypeId,
      };
      optionalPersonalitiesPropertiesNames.forEach((propertyName) => {
        if (this.anyValueWasChosenByUser(this[propertyName])) {
          personalitiesPart[propertyName] = this[propertyName];
        }
      });
      return personalitiesPart;
    },

    createRequestObjectServicesPart(): object {
      return {
        ...this.createAlwaysVisibleServicesRequestObjectPart(),
        ...this.createSecondaryServicesRequestObjectPart(),
      };
    },

    createAlwaysVisibleServicesRequestObjectPart(): object {
      let serviceProperties = {};
      sexServicesAlwaysVisibleKeys.forEach((propertyCoreName) => {
        let preferencePropertyName = `${propertyCoreName}Preference`;
        if (this[preferencePropertyName] !== "never") {
          serviceProperties[preferencePropertyName] = this[preferencePropertyName];
        }

        if (this[preferencePropertyName].includes("aditional_payment")) {
          let aditionalPaymentPropertyName = `${propertyCoreName}AditionalPayment`;
          serviceProperties[aditionalPaymentPropertyName] = this[
            aditionalPaymentPropertyName
          ];
        }
      });
      return serviceProperties;
    },

    createSecondaryServicesRequestObjectPart(): object {
      let serviceProperties = {};
      if (this.secondaryServices.length > 0) {
        serviceProperties["secondaryServices"] = JSON.stringify(this.secondaryServices);
      }
      if (this.tripsPreference === "1") {
        serviceProperties["tripsPreference"] = this.tripsPreference;
      }

      if (this.oralCreampiePreferenceShouldBeAdded) {
        serviceProperties["oralCreampiePreference"] = this.oralCreampiePreference;
      }

      if (this.cumSwallowPreferenceShouldBeAdded) {
        serviceProperties["cumSwallowPreference"] = this.cumSwallowPreference;
      }

      if (this.userSelectedAditionalPaymentForOralCreampie) {
        serviceProperties[
          "oralCreampieAditionalPayment"
        ] = this.oralCreampieAditionalPayment;
      }

      if (this.userSelectedAditionalPaymentForCumSwallow) {
        serviceProperties["cumSwallowAditionalPayment"] = this.cumSwallowAditionalPayment;
      }
      serviceProperties["paymentForms"] = JSON.stringify(this.paymentForms);
      return serviceProperties;
    },

    async saveNotice() {
      const requestBody = this.createRequestObject();
      const requestData = {
        method: "POST",
        headers: {
          "X-CSRF-TOKEN": this.csrfToken,
        },
        body: requestBody,
      };

      const response = await fetch(RoutesConfig.noticesManagement, requestData);
      this.processNoticeResponse(response);
    },

    async processNoticeResponse(response) {
      switch (response.status) {
        case 201:
          this.notifyAboutSuccess();
          break;

        case 400:
          this.notificationErrorMessage(
            "incorrect_announcement_data_please_make_sure_data_has_not_been_modified"
          );
          break;

        case 401:
          this.notificationErrorMessage("probably_your_session_has_expired");
          break;

        case 403:
          this.notificationErrorMessage("one_announcement_is_awaiting_validation");
          break;

        case 500:
          this.notificationErrorMessage("server_error_please_contact_admin");
          break;
      }
    },

    notificationErrorMessage(message: string): void {
      this.emitter.emit("showNotification", {
        notificationText: message,
        notificationType: "error",
        headerText: "error",
      });
    },

    notifyAboutSuccess(): void {
      this.emitter.emit("showNotification", {
        notificationText: "announcement_has_been_added",
        notificationType: "information",
        headerText: "information",
      });
    },
  },

  computed: {
    //@ts-ignore
    ...mapWritableState(announcementDetails, GlobalPropertiesNames),

    userPerformsBlowjobWithoutCondom(): boolean {
      return (
        this.blowjobPreference === "without_condom" ||
        this.blowjobPreference === "without_condom_with_aditional_payments"
      );
    },

    oralCreampiePreferenceShouldBeAdded(): boolean {
      return (
        this.userPerformsBlowjobWithoutCondom && this.oralCreampiePreference !== "never"
      );
    },

    userAllowsOralCreampie(): boolean {
      return (
        this.oralCreampiePreference === "included" ||
        this.oralCreampiePreference === "aditional_payment"
      );
    },

    cumSwallowPreferenceShouldBeAdded(): boolean {
      return this.userAllowsOralCreampie && this.cumSwallowPreference !== "never";
    },

    userSelectedAditionalPaymentForOralCreampie(): boolean {
      return (
        this.oralCreampiePreferenceShouldBeAdded &&
        this.oralCreampiePreference.includes("aditional_payment")
      );
    },

    userSelectedAditionalPaymentForCumSwallow(): boolean {
      return (
        this.cumSwallowPreferenceShouldBeAdded &&
        this.cumSwallowPreference.includes("aditional_payment")
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

.save-notice {
  padding: 4px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  text-align: center;
  @include responsive-font();
}

.important-info {
  color: red;
}

.info-container {
  padding: 10px 0;
}
</style>
