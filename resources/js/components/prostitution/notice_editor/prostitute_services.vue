<template>
  <section class="services-list">
    <div v-text="translations.most_important_services_description" class="info"></div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="vaginalSexPreference"
        unique-id="VaginalSexPreference"
        class="sex-preference-input"
        >{{ translations.classic_sex }} :</select-combo
      >
      <simple-labeled-input
        v-show="showVaginalSexAditionalPayment"
        v-model="vaginalSexAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="BlowjobPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="blowjobPreference"
        unique-id="BlowjobPreference"
        class="sex-preference-input"
        >{{ translations.blowjob }} :</select-combo
      >
      <simple-labeled-input
        v-show="showBlowjobAditionalPayment"
        v-model="blowjobAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div v-show="showOralCreampieOption" class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="oralCreampiePreference"
        class="sex-preference-input"
        >{{ translations.oral_creampie }} :</select-combo
      >
      <simple-labeled-input
        v-show="showOralCreampieAditionalPayment"
        v-model="oralCreampieAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="analPreference"
        class="sex-preference-input"
        >{{ translations.anal }} :</select-combo
      >
      <simple-labeled-input
        v-show="showAnalAditionalPayment"
        v-model="analAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="kissingPreference"
        class="sex-preference-input"
        >{{ translations.kisses }} :</select-combo
      >
      <simple-labeled-input
        v-show="showKissesAditionalPayment"
        v-model="kissesAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumOnFacePreference"
        class="sex-preference-input"
        >{{ translations.cum_on_face }} :</select-combo
      >
      <simple-labeled-input
        v-show="showCumOnFaceAditionalPayment"
        v-model="cumOnFaceAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumOnBodyPreference"
        class="sex-preference-input"
        >{{ translations.cum_on_body }} :</select-combo
      >
      <simple-labeled-input
        v-show="showCumOnBodyAditionalPayment"
        v-model="cumOnBodyAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="massagePreference"
        class="sex-preference-input"
        >{{ translations.massage }} :</select-combo
      >
      <simple-labeled-input
        v-show="showMassageAditionalPayment"
        v-model="massageAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="pussyLickingPreference"
        class="sex-preference-input"
        >{{ translations.pussy_licking }} :</select-combo
      >
      <simple-labeled-input
        v-show="showPussyLickingAditionalPayment"
        v-model="pussyLickingAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="clientRimmingPreference"
        class="sex-preference-input"
        >{{ translations.client_rimming }} :</select-combo
      >
      <simple-labeled-input
        v-show="showClientRimmingAditionalPayment"
        v-model="clientRimmingAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
    </div>
    <div v-text="translations.remaining_services_description" class="info"></div>
    <div class="service-container limited-width">
      <Multiselect
      v-model="selectedRemainingServices"
      mode="tags"
      v-bind:searchable="true"
      v-bind:close-on-select="false"
      v-bind:options="remainingServicesList"
    />
    </div>
  </section>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss" scoped>
@import "~sass/fonts";
.services-list {
  background: rgba(0, 0, 0, 0.7);
}

.limited-width {
  min-width: 300px;
  width: 75%;
  margin: 0 auto;
}

.service-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.sex-preference-input {
  flex-grow: 10;
}

.money-amount {
  margin-left: 5px;
  width: 12em;
}

#app .labeled-checkbox-description {
  color: white;
}

.info {
  padding: 4px;
  color: white;
  text-align: center;
  @include responsive-font(1vw, 13px);
}
</style>

<script lang="ts">
import SelectCombo from "@jscomponents/form_controls/select_combo.vue";
import Translations from "@jsmodules/translations/components/prostitute_services";
import { DefaultPreferencesOptionsList } from "@jsmodules/translations/components/prostitute_services";
import { DefaultSexPreference } from "@jsmodules/translations/components/prostitute_services";
import { BlowjobPreferencesOptionsList } from "@jsmodules/translations/components/prostitute_services";
import { BlowjobPreference } from "@jsmodules/translations/components/prostitute_services";
import SimpleLabeledSelect from "@jscomponents-form-controls/simple_labeled_select.vue";
import SimpleLabeledInput from "@jscomponents-form-controls/simple_labeled_input.vue";
import Multiselect from '@vueform/multiselect'

export default {
  name: "prostitute-services",

  components: {
    SelectCombo,
    SimpleLabeledSelect,
    SimpleLabeledInput,
    Multiselect,
  },

  data() {
    return {
      translations: Translations,
      massagePreference : 0,
      vaginalSexPreference: 0,
      blowjobPreference: 0,
      oralCreampiePreference : 0,
      cumOnFacePreference : 0,
      analPreference : 0,
      pussyLickingPreference : 0,
      clientRimmingPreference : 0,
      kissingPreference : 0,
      cumOnBodyPreference : 0,
      analAditionalPayment : 100,
      vaginalSexAditionalPayment : 100,
      blowjobAditionalPayment : 100,
      oralCreampieAditionalPayment : 100,
      cumOnFaceAditionalPayment : 100,
      massageAditionalPayment : 100,
      pussyLickingAditionalPayment : 100,
      clientRimmingAditionalPayment : 100,
      kissesAditionalPayment : 100,
      cumOnBodyAditionalPayment : 100,
      selectedRemainingServices : null,
      remainingServicesList : ['na hiszpana', 'strapon'],
      DefaultPreferencesOptionsList,
      BlowjobPreferencesOptionsList,
    };
  },

  computed: {
    showVaginalSexAditionalPayment(): boolean {
      return (
        this.vaginalSexPreference === DefaultSexPreference.aditional_payment
      );
    },

    showBlowjobAditionalPayment(): boolean {
      return typeof this.blowjobPreference === "string"
        ? this.blowjobPreference === BlowjobPreference.without_condom_with_aditional_payments
        : false;
      },
      
      showOralCreampieOption() : boolean {
      return typeof this.blowjobPreference === "string"
        ? this.blowjobPreference.includes('without_condom') : false;
    },

    showOralCreampieAditionalPayment(): boolean {
      return this.showOralCreampieOption && (this.oralCreampiePreference === DefaultSexPreference.aditional_payment);
    },

    showAnalAditionalPayment() : boolean {
      return this.analPreference === DefaultSexPreference.aditional_payment;
    },

    showCumOnFaceAditionalPayment() : boolean {
      return this.cumOnFacePreference === DefaultSexPreference.aditional_payment
    },

    showMassageAditionalPayment() : boolean {
      return this.massagePreference === DefaultSexPreference.aditional_payment;
    },

    showPussyLickingAditionalPayment() : boolean {
      return this.pussyLickingPreference === DefaultSexPreference.aditional_payment;
    },

    showClientRimmingAditionalPayment() : boolean {
      return this.clientRimmingPreference === DefaultSexPreference.aditional_payment;
    },

    showKissesAditionalPayment() : boolean {
      return this.kissingPreference === DefaultSexPreference.aditional_payment;
    },

    showCumOnBodyAditionalPayment() : boolean {
      return this.cumOnBodyPreference === DefaultSexPreference.aditional_payment;
    }

  },
};
</script>