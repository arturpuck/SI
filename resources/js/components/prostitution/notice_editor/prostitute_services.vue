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
    <div class="limited-width service-container">
      <select-combo
        v-bind:select-options="BinaryPreferences"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="tripsPreference"
        class="sex-preference-input"
        >{{ translations.trips }} :</select-combo
      >
    </div>
    <div v-text="translations.remaining_services_description" class="info"></div>
    <div class="service-container limited-width">
      <Multiselect
      class="secondary-services-list"
      v-model="selectedSecondaryServices"
      v-bind:initial-options="SecondaryServicesList"
      v-bind:showSearchInput="true"
    >{{translations.click_to_chose_remaining_services}}</Multiselect>
    </div>
    <div v-text="translations.prices_for_your_services_description" class="info"></div>
    <div class="service-container limited-width">
      <simple-labeled-input
        v-model="selectedServiceFormsToPayFor[0]['price']"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
      <select-combo
        v-bind:select-options="AvailableServiceFormsToPayFor"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="selectedServiceFormsToPayFor[0]['unit']"
        class="service-unit"
        ></select-combo>
    </div>
    <div v-for="(selectedPaymentType, index) in addedServiceForms" v-bind:key="index" class="service-container limited-width">
      <simple-labeled-input
        v-model="selectedPaymentType['price']"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</simple-labeled-input
      >
      <select-combo
        v-bind:select-options="AvailableServiceFormsToPayFor"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="selectedPaymentType['unit']"
        class="service-unit"
        ></select-combo>
    </div>
    <div class="other-controls limited-width">
      <add-button v-on:click="addServicePaymentForm">{{translations.add_payment_type}}</add-button>
      <remove-button v-on:click="removeServicePaymentForm">{{translations.remove_payment_type}}</remove-button>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "~sass/fonts";

.service-unit {
  flex-grow:10;
  margin-left:5px;
}

.other-controls {
  padding: 5px 0;
}
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
  font-size:14px;
  font-family: "Exo 2", sans-serif;
}

.secondary-services-list {
  width: 100%;
}
</style>

<script lang="ts">
import SelectCombo from "@jscomponents/form_controls/select_combo.vue";
import Translations from "@jsmodules/translations/components/prostitute_services";
import { DefaultPreferencesOptionsList } from "@jsmodules/translations/components/prostitute_services";
import { DefaultSexPreference } from "@jsmodules/translations/components/prostitute_services";
import { BlowjobPreferencesOptionsList } from "@jsmodules/translations/components/prostitute_services";
import { BlowjobPreference } from "@jsmodules/translations/components/prostitute_services";
import { SecondaryServicesList } from "@jsmodules/translations/components/prostitute_services";
import { AvailableServiceFormsToPayFor } from "@jsmodules/translations/components/prostitute_services";
import { BinaryPreferences } from "@jsmodules/translations/components/prostitute_services";
import SimpleLabeledSelect from "@jscomponents-form-controls/simple_labeled_select.vue";
import SimpleLabeledInput from "@jscomponents-form-controls/simple_labeled_input.vue";
import Multiselect from '@jscomponents-form-controls/multiselect.vue';
import LabeledCheckbox from "@jscomponents/form_controls/labeled_checkbox.vue";
import AddButton from "@jscomponents-form-controls/add_button.vue";
import RemoveButton from "@jscomponents-form-controls/remove_button.vue";

export default {
  name: "prostitute-services",

  components: {
    SelectCombo,
    SimpleLabeledSelect,
    SimpleLabeledInput,
    Multiselect,
    LabeledCheckbox,
    RemoveButton,
    AddButton,
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
      tripsPreference : "choose",
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
      selectedSecondaryServices : [],
      SecondaryServicesList,
      DefaultPreferencesOptionsList,
      BlowjobPreferencesOptionsList,
      AvailableServiceFormsToPayFor,
      BinaryPreferences,
      selectedServiceFormsToPayFor : [{unit : 'for_hour', price : 200}],
      allServiceFormsUnits : Object.keys(AvailableServiceFormsToPayFor),
    };
  },

  computed: {

    showVaginalSexAditionalPayment(): boolean {
      return (
        this.vaginalSexPreference === DefaultSexPreference.aditional_payment
      );
    },

    addedServiceForms() : [] {
      let [firstPayment, ...addedPayments] = this.selectedServiceFormsToPayFor;
      return addedPayments; 
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

  methods : {
    addServicePaymentForm() : void {
      const currentNumberOfElements = this.selectedServiceFormsToPayFor.length 
      if(currentNumberOfElements >= this.AvailableServiceFormsToPayFor.length) {
        return;
      }
      this.selectedServiceFormsToPayFor.push({unit : this.allServiceFormsUnits[currentNumberOfElements], price : 200});
    },

    removeServicePaymentForm() : void {
      this.selectedServiceFormsToPayFor.pop();
    }
  }

};
</script>