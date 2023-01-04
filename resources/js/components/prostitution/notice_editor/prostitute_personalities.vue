<template>
  <section class="basic-information-container">
    <div class="data-explanation">
      <span v-text="translations.this_is_the_minimal_required_data"></span> : 
      <span class="required-fields" v-text="requiredFieldsList"></span>.
      <span v-text="translations.the_rest_is_optional"></span>.
      <strong v-text="translations.birth_date_restrictions"></strong>.
    </div>
    <text-input-combo
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      v-model="nickname"
      unique-id="Nickname"
      class="extended"
      >{{ translations.nickname }} :</text-input-combo
    >
    <text-input-combo
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      v-model="phoneNumber"
      unique-id="PhoneNumber"
      input-type="tel"
      class="extended"
      >{{ translations.phone_number }} :</text-input-combo
    >
    <text-input-combo
      class="extended"
      unique-id="BirthDate"
      v-model="birthDate"
      input-type="date"
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      >{{ translations.birthday }} :</text-input-combo
    >
    <select-combo
      v-bind:select-options="userTypesList"
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      v-model="userType"
      unique-id="UserType"
      class="extended"
      >{{ translations.user_type }} :</select-combo
    >
    <select-combo
      v-bind:select-options="sexualOrientationsList"
      v-model="sexualOrientation"
      class="extended without-error-message-box"
      >{{ translations.sexual_orientation }} :</select-combo
    >
    <select-combo
      v-bind:select-options="titsSizesList"
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      v-model="titsSize"
      unique-id="TitsSize"
      class="extended"
      >{{ translations.tits_size }} :</select-combo
    >
    <text-input-combo
      class="extended without-error-message-box"
      input-type="number"
      v-model="height"
      >{{ translations.height }} (cm) :</text-input-combo
    >
    <text-input-combo
      class="extended without-error-message-box"
      input-type="number"
      v-model="weight"
      >{{ translations.weight }} (kg) :</text-input-combo
    >
    <select-combo
      v-bind:select-options="hairColorsList"
      v-model="hairColor"
      class="extended without-error-message-box last-input"
      >{{ translations.hair_color }} :</select-combo
    >
  </section>
</template>
        
<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitute_basic_information";
import SimpleLabeledInput from "@jscomponents-form-controls/simple_labeled_input.vue";
import SimpleLabeledSelect from "@jscomponents-form-controls/simple_labeled_select.vue";
import SelectCombo from "@jscomponents/form_controls/select_combo.vue";
import Routes from "@config/paths/routes";
import checkIfUserIsAdult from "@jsmodules/helpers/adult_check";
import checkIfUserExceedsMaximumPossibleAge from "@jsmodules/helpers/max_age_check";
import { UserType } from "@js/enum/user_type";
import ErrorOnComboForProstitueAnnouncements from "@mixins/components/prostitute_announcement_creator/error_on_combo_input";
const blankOption = `--${Translations.choose_options}--`;

export default {
  name: "prostitute-personalities",

  mixins : [ErrorOnComboForProstitueAnnouncements],

  emits : ['validated'],

  methods: {

    validateSelectedOptions(): void {
      this.resetAllValidation();
      this.validateNickname();
      this.validateBirthDate();
      this.validateUserType();
      this.validateTitsSize();
      this.validatePhoneNumber();
      if(this.validationIsSuccessfull) {
        this.$emit('validated');
      }
    },

    validatePhoneNumber(): void {
      if (this.phoneNumber) {
          this.validatePhoneNumberFormat();
      }
    },

    validatePhoneNumberFormat(): void {
      const regularExpression = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
      if (!this.phoneNumber.match(regularExpression)) {
        this.showErrorOnComboInput("PhoneNumber", "phone_number_format_must_be_valid");
      }
    },

    resetAllValidation(): void {
      this.validationIsSuccessfull = true;
      this.emitter.emit("resetValidationNickname");
      this.emitter.emit("resetValidationBirthDate");
      this.emitter.emit("resetValidationUserType");
      this.emitter.emit("resetValidationTitsSize");
      this.emitter.emit("resetValidationPhoneNumber");
    },

    validateTitsSize(): void {
      if (
        this.userTypeString === Translations[UserType.Male] &&
        this.titsSize != 0
      ) {
        this.showErrorOnComboInput(
          "TitsSize",
          "you_mustnot_choose_tits_size_if_you_are_a_male"
        );
      }
    },

    validateUserType(): void {
      if (!this.userType) {
        this.showErrorOnComboInput("UserType", "user_type_is_required");
      }
    },

    validateNickname(): void {
      if (this.nickname.trim().length < 3) {
        this.showErrorOnComboInput(
          "Nickname",
          "nickname_must_contain_at_least_3_characters"
        );
      } else if (this.nickname.trim().length > 30) {
        this.showErrorOnComboInput(
          "Nickname",
          "nickname_mustnot_contain_more_than_30_characters"
        );
      }
    },

    validateBirthDate(): void {
      if (!this.birthDate) {
        this.showErrorOnComboInput("BirthDate", "birth_date_is_required");
      } else {
        this.validateUserBirthDateSpan();
      }
    },

    validateUserBirthDateSpan(): void {
      if (!checkIfUserIsAdult(this.birthDate)) {
        this.showErrorOnComboInput("BirthDate", "you_are_under_18");
      } else if (checkIfUserExceedsMaximumPossibleAge(this.birthDate)) {
        this.showErrorOnComboInput("BirthDate", "you_cant_be_over_120_yo");
      }
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

  computed: {
    userTypeString(): string {
      return this.userTypesList[parseInt(this.userType)];
    },

    requiredFieldsList(): string {
      return `${this.translations.nickname}, ${this.translations.user_type}, ${this.translations.birthday}`;
    }
  },

  components: {
    SimpleLabeledInput,
    SimpleLabeledSelect,
    SelectCombo,
  },

  data() {
    return {
      translations: Translations,
      nickname: "",
      phoneNumber: "",
      csrfToken: "",
      userTypesList: [],
      userType: 0,
      sexualOrientationsList: [],
      sexualOrientation: 0,
      hairColor: 0,
      birthDate: null,
      hairColorsList: {
        0: blankOption,
        blonde: "blond",
        dark: "ciemny",
        bronze: "brązowy",
        gray: "siwy",
        red: "rudy",
        other: "inny",
      },
      titsSizesList: [blankOption, 1, 2, 3, 4, 5, 6, 7, 8],
      titsSize: 0,
      height: "",
      weight: "",
    };
  },

  mounted() {
    this.prepareSelectValues();
    this.emitter.on(
      "prostituteBasicInformationValidator",
      this.validateSelectedOptions
    );
  },

  created() {
    this.csrfToken = (<HTMLMetaElement>(
      document.getElementById("csrf-token")
    )).content;
  },
};
</script>
        
<style lang="scss">
@import "~sass/fonts";

.without-error-message-box {
  margin-top:calc(1em + 6px);
}

.data-explanation {
  color : white;
  @include responsive-font(1.1vw, 14px);
  padding:0 7px;
  text-align: center;
}

.basic-information-container {
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.basic-information-input {
  margin: 10px;
}

.extended {
  width: 90%;
}

#app .text-input-combo-value-label {
  width: initial;
}

.required-fields {
  font-weight: bold;
  color:#ef0c7e;
}

.last-input {
  margin-bottom:calc(1em + 6px);
}
</style>