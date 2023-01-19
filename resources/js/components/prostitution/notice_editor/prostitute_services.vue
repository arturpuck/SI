<template>
  <section class="services-list">
    <div class="info">
      <span v-text="translations.most_important_services_description"></span>
      <strong
        class="important-info"
        v-text="translations.most_important_services_exact_information_notice"
      ></strong>
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="vaginalSexPreference"
        unique-id="vaginalSexPreference"
        class="sex-preference-input"
        >{{ translations.classic_sex }} :</select-combo
      >
      <text-input-combo
        v-show="showVaginalSexAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="vaginalSexAditionalPayment"
        input-type="number"
        unique-id="vaginalSexAditionalPayment"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="BlowjobPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="blowjobPreference"
        unique-id="blowjobPreference"
        class="sex-preference-input"
        >{{ translations.blowjob }} :</select-combo
      >
      <text-input-combo
        v-show="showBlowjobAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="blowjobAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div
      v-show="showOralCreampieOption"
      class="service-container limited-width"
    >
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="oralCreampiePreference"
        unique-id="oralCreampiePreference"
        class="sex-preference-input"
        >{{ translations.oral_creampie }} :</select-combo
      >
      <text-input-combo
        v-show="showOralCreampieAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="oralCreampieAditionalPayment"
        unique-id="oralCreampieAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div
      v-show="showCumSwallowOption"
      class="service-container limited-width"
    >
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumSwallowPreference"
        unique-id="cumSwallowPreference"
        class="sex-preference-input"
        >{{ translations.cum_swallow }} :</select-combo
      >
      <text-input-combo
        v-show="showCumSwallowAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumSwallowAditionalPayment"
        unique-id="cumSwallowAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="analPreference"
        unique-id="analPreference"
        class="sex-preference-input"
        >{{ translations.anal }} :</select-combo
      >
      <text-input-combo
        v-show="showAnalAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="analAditionalPayment"
        unique-id="analAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        unique-id="kissingPreference"
        v-model="kissingPreference"
        class="sex-preference-input"
        >{{ translations.kisses }} :</select-combo
      >
      <text-input-combo
        v-show="showKissingAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="kissingAditionalPayment"
        unique-id="kissingAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumOnFacePreference"
        unique-id="cumOnFacePreference"
        class="sex-preference-input"
        >{{ translations.cum_on_face }} :</select-combo
      >
      <text-input-combo
        v-show="showCumOnFaceAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumOnFaceAditionalPayment"
        unique-id="cumOnFaceAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumOnBodyPreference"
        unique-id="cumOnBodyPreference"
        class="sex-preference-input"
        >{{ translations.cum_on_body }} :</select-combo
      >
      <text-input-combo
        v-show="showCumOnBodyAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="cumOnBodyAditionalPayment"
        unique-id="cumOnBodyAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="massagePreference"
        unique-id="massagePreference"
        class="sex-preference-input"
        >{{ translations.massage }} :</select-combo
      >
      <text-input-combo
        v-show="showMassageAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="massageAditionalPayment"
        unique-id="massageAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="pussyLickingPreference"
        unique-id="pussyLickingPreference"
        class="sex-preference-input"
        >{{ translations.pussy_licking }} :</select-combo
      >
      <text-input-combo
        v-show="showPussyLickingAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="pussyLickingAditionalPayment"
        unique-id="pussyLickingAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="service-container limited-width">
      <select-combo
        v-bind:select-options="DefaultPreferencesOptionsList"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="clientRimmingPreference"
        unique-id="clientRimmingPreference"
        class="sex-preference-input"
        >{{ translations.client_rimming }} :</select-combo
      >
      <text-input-combo
        v-show="showClientRimmingAditionalPayment"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="clientRimmingAditionalPayment"
        unique-id="clientRimmingAditionalPayment"
        input-type="number"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
    </div>
    <div class="limited-width service-container">
      <select-combo
        v-bind:select-options="BinaryPreferences"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        unique-id="tripsPreference"
        v-model="tripsPreference"
        class="sex-preference-input"
        >{{ translations.trips }} :</select-combo
      >
    </div>
    <div
      v-text="translations.remaining_services_description"
      class="info"
    ></div>
    <div class="service-container limited-width">
      <Multiselect
        class="secondary-services-list"
        v-model="selectedSecondaryServices"
        v-bind:initial-options="SecondaryServicesList"
        v-bind:showSearchInput="true"
        >{{ translations.click_to_chose_remaining_services }}</Multiselect
      >
    </div>
    <div
      v-text="translations.prices_for_your_services_description"
      class="info"
    ></div>
    <div class="service-container limited-width">
      <text-input-combo
        v-model="selectedServiceFormsToPayFor[0]['price']"
        input-type="number"
        unique-id="paymentForService0"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
      <select-combo
        v-bind:select-options="AvailableServiceFormsToPayFor"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        unique-id="serviceForm0"
        v-model="selectedServiceFormsToPayFor[0]['unit']"
        class="service-unit"
      ></select-combo>
    </div>
    <div
      v-for="(selectedPaymentType, index) in addedServiceForms"
      v-bind:key="index"
      class="service-container limited-width"
    >
      <text-input-combo
        v-model="selectedPaymentType['price']"
        input-type="number"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-bind:unique-id="getServiceID('paymentForService', index + 1)"
        class="money-amount"
        >{{ translations.money_amount }}(PLN) :</text-input-combo
      >
      <select-combo
        v-bind:select-options="AvailableServiceFormsToPayFor"
        v-bind:error-message-box-available="true"
        v-bind:complete-error-display-available="true"
        v-model="selectedPaymentType['unit']"
        v-bind:unique-id="getServiceID('serviceForm', index + 1)"
        class="service-unit"
      ></select-combo>
    </div>
    <div class="other-controls limited-width">
      <add-button v-on:click="addServicePaymentForm">{{
        translations.add_payment_type
      }}</add-button>
      <remove-button v-on:click="removeServicePaymentForm">{{
        translations.remove_payment_type
      }}</remove-button>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "~sass/fonts";

.service-unit {
  flex-grow: 10;
  margin-left: 5px;
}

.other-controls {
  padding: 5px 0;
}
.services-list {
  background: rgba(0, 0, 0, 0.85);
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
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
}

.secondary-services-list {
  width: 100%;
}

.important-info {
  color: #f70531;
}
</style>

<script lang="ts">
import SelectCombo from "@jscomponents/form_controls/select_combo.vue";
import Translations from "@jsmodules/translations/components/prostitute_services";
import { DefaultPreferencesOptionsList } from "@jsmodules/translations/components/prostitute_services";
import { DefaultSexPreference } from "@jsmodules/translations/components/prostitute_services";
import { ServiceKeys } from "@jsmodules/translations/components/prostitute_services";
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
import ErrorOnComboForProstitueAnnouncements from "@mixins/components/prostitute_announcement_creator/error_on_combo_input";
const kesThatDoNotRequireSpecialValidation = ServiceKeys.filter(key => key != 'swallow' && key != 'oralCreampie');
const keysForAditionalPaymentsThatDoNotRequireSpecialValidation = kesThatDoNotRequireSpecialValidation.filter(key => key != 'trips')

export default {
  name: "prostitute-services",

  mixins : [ErrorOnComboForProstitueAnnouncements],

  emits : ['validated'],

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
      massagePreference : "choose",
      vaginalSexPreference: "choose",
      blowjobPreference: "choose",
      oralCreampiePreference : "choose",
      cumSwallowPreference : "choose",
      cumOnFacePreference : "choose",
      analPreference : "choose",
      pussyLickingPreference : "choose",
      clientRimmingPreference : "choose",
      kissingPreference : "choose",
      cumOnBodyPreference : "choose",
      tripsPreference : "choose",
      analAditionalPayment : 100,
      vaginalSexAditionalPayment : 100,
      blowjobAditionalPayment : 100,
      oralCreampieAditionalPayment : 100,
      cumOnFaceAditionalPayment : 100,
      massageAditionalPayment : 100,
      pussyLickingAditionalPayment : 100,
      clientRimmingAditionalPayment : 100,
      kissingAditionalPayment : 100,
      cumOnBodyAditionalPayment : 100,
      cumSwallowAditionalPayment : 100,
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
        return this.blowjobPreference === BlowjobPreference.without_condom_with_aditional_payments;
    },
      
      showOralCreampieOption() : boolean {
      return this.blowjobPreference.includes('without_condom');
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

    showKissingAditionalPayment() : boolean {
      return this.kissingPreference === DefaultSexPreference.aditional_payment;
    },

    showCumOnBodyAditionalPayment() : boolean {
      return this.cumOnBodyPreference === DefaultSexPreference.aditional_payment;
    },

    showCumSwallowOption() : boolean {
      return this.oralCreampiePreference === DefaultSexPreference.aditional_payment || this.oralCreampiePreference === DefaultSexPreference.included;
    },

    showCumSwallowAditionalPayment() : boolean {
     return this.cumSwallowPreference === DefaultSexPreference.aditional_payment;
    }

  },

  methods : {

    getServiceID(type : string, index : number) : string {
        return `${type}${index}`;
    },

    addServicePaymentForm() : void {
      const currentNumberOfElements = this.selectedServiceFormsToPayFor.length 
      if(currentNumberOfElements >= this.AvailableServiceFormsToPayFor.length) {
        return;
      }
      this.selectedServiceFormsToPayFor.push({unit : this.allServiceFormsUnits[currentNumberOfElements], price : 200});
    },

    removeServicePaymentForm() : void {
      this.selectedServiceFormsToPayFor.pop();
    },

    validateSelectedOptions() : void {
      this.resetValidation();
      this.checkIfBasicRequiredOptionsAreSelected();
      this.validateAditionalPayments();
      this.validatePayments();
      if(this.validationIsSuccessfull) {
        this.$emit('validated');
      }
    },

    validatePayments() : void {
      let selectedServiceForms = {};

      for(let index = 0; index <= this.addedServiceForms.length; index++) {
          let moneyAmmount = parseInt(this.selectedServiceFormsToPayFor[index].price);
          let serviceForm = this.selectedServiceFormsToPayFor[index].unit;
        
          if(Number.isNaN(moneyAmmount) || moneyAmmount <= 0) {
            this.showErrorOnComboInput(`paymentForService${index}`, 'the_value_must_be_a_number_greater_than_0');
          }

          if(selectedServiceForms.hasOwnProperty(serviceForm)) {
            ++selectedServiceForms[serviceForm].numberOfOccurences;
            selectedServiceForms[serviceForm].indexes.push(index);
          } else {
            selectedServiceForms[serviceForm] = {indexes : [index], numberOfOccurences : 1};
          }

      }
      this.checkForPaymentUnitDuplicates(selectedServiceForms);
    },
    
    checkForPaymentUnitDuplicates(selectedServiceForms) : void {
      Object.keys(selectedServiceForms).forEach(serviceForm => {
        if(selectedServiceForms[serviceForm].numberOfOccurences > 1) {
          selectedServiceForms[serviceForm].indexes.forEach(index => this.showErrorOnComboInput(`serviceForm${index}`, 'a_payment_type_can_be_chosen_only_once'))
        }
      });
    },

    validateOralCreampiePreference() : void {
        if(this.showOralCreampieOption) {
          this.simpleValidationOfMainInput('oralCreampiePreference');
        }
    },

    validateCumSwallowPreference() : void {
      if(this.showCumSwallowOption) {
        this.simpleValidationOfMainInput('cumSwallowPreference');
      }
    },

    validateAditionalPayments() : void {
      keysForAditionalPaymentsThatDoNotRequireSpecialValidation.forEach(key => this.simpleValidationOfAditionalPayment(key));
      this.validateOralCreampieAditionalPayment();
      this.validateCumSwallowAditionalPayment();
    },

    validateOralCreampieAditionalPayment() : void {
      if(this.showOralCreampieOption) {
        this.simpleValidationOfAditionalPayment('oralCreampie');
      }
    },

    validateCumSwallowAditionalPayment() : void {
      if(this.showCumSwallowAditionalPayment) {
         this.simpleValidationOfAditionalPayment('cumSwallow');
      }
    },

    resetValidation() : void {
      keysForAditionalPaymentsThatDoNotRequireSpecialValidation.forEach(key => this.emitter.emit(`resetValidation${key}AditionalPayment`));
      kesThatDoNotRequireSpecialValidation.forEach(key => this.emitter.emit(`resetValidation${key}Preference`));
      this.emitter.emit('resetValidationoralCreampiePreference');
      this.emitter.emit('resetValidationoralCreampieAditionalPayment');
      this.emitter.emit('resetValidationcumSwallowPreference');
      this.emitter.emit('resetValidationcumSwallowAditionalPayment');
      for(let index = 0; index <= this.addedServiceForms.length; index++) {
        this.emitter.emit(`resetValidationpaymentForService${index}`);
        this.emitter.emit(`resetValidationserviceForm${index}`);
      }
      this.validationIsSuccessfull = true;
    },

    simpleValidationOfAditionalPayment(serviceName : string) : void {
      let preferenceKey = `${serviceName}Preference`;
      let aditionalPaymentKey = `${serviceName}AditionalPayment`;
      if(this[preferenceKey] === DefaultSexPreference.aditional_payment) {
        this.validateAditionalPaymentInput(aditionalPaymentKey);
      }
    },

    validateAditionalPaymentInput(key : string) : void {
        let selectedValue = parseInt(this[key]);
        if(Number.isNaN(selectedValue) || selectedValue <= 0) {
          this.showErrorOnComboInput(key, 'the_value_must_be_a_number_greater_than_0');
        }
    },

    checkIfBasicRequiredOptionsAreSelected() : void {
      kesThatDoNotRequireSpecialValidation.forEach(key => this.simpleValidationOfMainInput(`${key}Preference`));
      this.validateOralCreampiePreference();
      this.validateCumSwallowPreference();
    },

    simpleValidationOfMainInput(serviceName : string) : void {
      if(this[serviceName] === 'choose') {
        this.showErrorOnComboInput(serviceName, 'choose_option');
      }
    },
  },

  mounted() {
    this.emitter.on(
      "prostituteServicesValidator",
      this.validateSelectedOptions
    );
  }

};
</script>