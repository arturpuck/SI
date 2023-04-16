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
    <textarea-combo 
      v-bind:placeholder-text="translations.description_limitation" 
      rows-number="10"
      unique-id="announcementDescription"
      v-model="description"
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      class="extended">
      {{translations.announcement_description}}
    </textarea-combo>
    <select-combo
      v-bind:select-options="userTypesList"
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      v-model="userTypeId"
      unique-id="UserType"
      class="extended"
      >{{ translations.user_type }} :</select-combo
    >
    <select-combo
      v-bind:select-options="sexualOrientationsList"
      v-model="sexualOrientationId"
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
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      class="extended without-error-message-box"
      input-type="number"
      unique-id="UserHeight"
      v-model="heightInCentimeters"
      >{{ translations.height }} (cm) :</text-input-combo
    >
    <text-input-combo
      v-bind:error-message-box-available="true"
      v-bind:complete-error-display-available="true"
      unique-id="UserWeight"
      class="extended without-error-message-box"
      input-type="number"
      v-model="weightInKilograms"
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
import checkIfUserIsAdult from "@jsmodules/helpers/adult_check";
import checkIfUserExceedsMaximumPossibleAge from "@jsmodules/helpers/max_age_check";
import { UserType } from "@js/enum/user_type";
import ErrorOnComboForProstitueAnnouncements from "@mixins/components/prostitute_announcement_creator/error_on_combo_input";
import TextareaCombo from '@jscomponents-form-controls/textarea_combo.vue';
import { EmptyInputValue} from "@jscomponents/empty_input_option";
import { EmptyInputList } from "@jscomponents/empty_input_option";
import { EmptyInputDescription } from "@jscomponents/empty_input_option";
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";
import { mapWritableState } from 'pinia'

export default {
  name: "prostitute-personalities",

  mixins : [ErrorOnComboForProstitueAnnouncements],

  emits : ['validated'],

  props : {
    userTypesList : {
      type : Array,
      default : [],
      required : true
    },

    sexualOrientationsList : {
      type : Array,
      default : [],
      required : true
    },

  },

  methods: {

    validateSelectedOptions(): void {
      this.resetAllValidation();
      this.validateNickname();
      this.validateBirthDate();
      this.validateUserType();
      this.validateTitsSize();
      this.validatePhoneNumber();
      this.validateDescription();
      this.validateHeight();
      this.validateWeight();
      if(this.validationIsSuccessfull) {
        this.$emit('validated');
      }
    },

    validateDescription() : void {
      if(this.description.length > 2000) {
        this.showErrorOnComboInput("announcementDescription", "the_description_exceeds_2000_characters");
      }
    },

    validateHeight(): void {
      if(!this.heightInCentimeters) {
        return;
      }

      if(!Number.isInteger(this.heightInCentimeters) || (this.heightInCentimeters > 270) || (this.heightInCentimeters < 90)) {
        this.showErrorOnComboInput("UserHeight", "height_must_be_an_integer_between_90_and_270");
      }
    },

    validateWeight(): void {
      if(!this.weightInKilograms) {
        return;
      }

      if(!Number.isInteger(this.weightInKilograms) || (this.weightInKilograms > 800) || (this.weightInKilograms < 30)) {
        this.showErrorOnComboInput("UserWeight", "weight_must_be_an_integer_between_30_and_800");
      }
    },

    validatePhoneNumber(): void {
      if (this.phoneNumber) {
          this.validatePhoneNumberFormat();
      }
    },

    validatePhoneNumberFormat(): void {
      const regularExpression = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
      if (!this.phoneNumber.trim().match(regularExpression)) {
        this.showErrorOnComboInput("PhoneNumber", "phone_number_format_must_be_valid");
      }

      if (this.phoneNumber.trim().length > 16) {
        this.showErrorOnComboInput("PhoneNumber", "phone_number_must_not_exceed_16_characters");
      }

      if (this.phoneNumber.trim().length < 7) {
        this.showErrorOnComboInput("PhoneNumber", "phone_number_must_contain_at_least_7_characters");
      }
    },

    resetAllValidation(): void {
      this.validationIsSuccessfull = true;
      this.emitter.emit("resetValidationNickname");
      this.emitter.emit("resetValidationBirthDate");
      this.emitter.emit("resetValidationUserType");
      this.emitter.emit("resetValidationTitsSize");
      this.emitter.emit("resetValidationPhoneNumber");
      this.emitter.emit("resetValidationannouncementDescription");
      this.emitter.emit("resetValidationUserHeight");
      this.emitter.emit("resetValidationUserWeight");
    },

    validateTitsSize(): void {
      if (
        this.userTypeString === Translations[UserType.Male] &&
        this.titsSize !== '0'
      ) {
        this.showErrorOnComboInput(
          "TitsSize",
          "you_mustnot_choose_tits_size_if_you_are_a_male"
        );
      }
    },

    validateUserType(): void {
      if (this.userTypeId === EmptyInputValue) {
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

  },

  computed: {
    userTypeString(): string {
      return this.userTypesList[parseInt(this.userTypeId)];
    },

    requiredFieldsList(): string {
      return `${this.translations.nickname}, ${this.translations.user_type}, ${this.translations.birthday}`;
    },
    ...mapWritableState(announcementDetails, [
      'nickname', 
      'phoneNumber', 
      'birthDate', 
      'description', 
      'userTypeId', 
      'sexualOrientationId', 
      'hairColor',
      'titsSize',
      'heightInCentimeters',
      'weightInKilograms',
    ])
  },

  components: {
    SimpleLabeledInput,
    SimpleLabeledSelect,
    SelectCombo,
    TextareaCombo
  },

  data() {
    return {
      translations: Translations,
      csrfToken: "",
      hairColorsList: {
        ...EmptyInputList,
        blonde: "blond",
        dark: "ciemny",
        bronze: "brązowy",
        gray: "siwy",
        red: "rudy",
        other: "inny",
      },
      titsSizesList: [EmptyInputDescription, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  },

  mounted() {
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
  background: rgba(0, 0, 0, 0.8);
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