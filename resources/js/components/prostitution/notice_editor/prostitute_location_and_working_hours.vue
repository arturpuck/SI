<template>
  <section class="location-and-hours">
    <expect-shadow-circle
      v-show="fetchingCitiesInProgress"
      v-bind:circle-label="Translations['fetching_cities']"
    ></expect-shadow-circle>
    <div
      v-text="Translations['empire_policy_for_working_hours_of_prostitutes']"
      class="info"
    ></div>
    <div>
      <h2 v-text="Translations['working_hours']" class="subsection-header"></h2>
      <select-combo
        v-bind:error-message-box-available="true"
        unique-id="preciseHoursDecision"
        v-bind:select-options="YesNoOptions"
        v-model="preciseHoursDecision"
        v-bind:complete-error-display-available="true"
        class="select"
      >
        {{ Translations["do_you_want_to_set_precise_working_hours"] }} :
      </select-combo>
    </div>
    <div class="weekly-schedule" v-show="showWeeklySchedule">
      <div class="toggle-days-container">
        <add-button v-on:click="toggleWeekdaysList">{{
          toggleWeekdaysButtonCaption
        }}</add-button>
      </div>

      <div v-show="!showEverySingleWeekday" class="time-period-details">
        <span v-text="Translations['from_monday_to_friday']"></span>
        <text-input-combo
          v-bind:error-message-box-available="true"
          unique-id="mondayToFridayHourSince"
          input-type="time"
          v-model="workingHoursByPeriodOrDay['mondayToFriday']['since']"
          class="hours-range-edge"
          v-bind:complete-error-display-available="true"
        >
          {{ Translations["since"] }} :
        </text-input-combo>
        <text-input-combo
          v-bind:error-message-box-available="true"
          unique-id="mondayToFridayHourUntil"
          input-type="time"
          v-model="workingHoursByPeriodOrDay['mondayToFriday']['until']"
          class="hours-range-edge"
          v-bind:complete-error-display-available="true"
        >
          {{ Translations["until"] }} :
        </text-input-combo>
        <labeled-checkbox
          v-on:update:modelValue="
            (clean) => toggleDayFreeOrBusy(clean, 'mondayToFriday')
          "
          class="shortcut-checkbox"
          >{{ Translations["day_of"] }}</labeled-checkbox
        >
      </div>

      <div v-if="showEverySingleWeekday">
        <div
          v-for="(weekday, index) in weekdays"
          v-bind:key="index"
          class="time-period-details"
        >
          <span v-text="Translations[weekday]"></span>
          <text-input-combo
            v-bind:error-message-box-available="true"
            v-bind:unique-id="`${weekday}HourSince`"
            input-type="time"
            v-model="workingHoursByPeriodOrDay[weekday]['since']"
            class="hours-range-edge"
            v-bind:complete-error-display-available="true"
          >
            {{ Translations["since"] }} :
          </text-input-combo>
          <text-input-combo
            v-bind:error-message-box-available="true"
            v-bind:unique-id="`${weekday}HourUntil`"
            input-type="time"
            v-model="workingHoursByPeriodOrDay[weekday]['until']"
            class="hours-range-edge"
            v-bind:complete-error-display-available="true"
          >
            {{ Translations["until"] }} :
          </text-input-combo>
          <labeled-checkbox
            v-on:update:modelValue="(clean) => toggleDayFreeOrBusy(clean, weekday)"
            class="shortcut-checkbox"
            >{{ Translations["day_of"] }}</labeled-checkbox
          >
        </div>
      </div>

      <div class="time-period-details">
        <span v-text="Translations['saturday']"></span>
        <text-input-combo
          v-bind:error-message-box-available="true"
          unique-id="saturdayHourSince"
          input-type="time"
          v-model="workingHoursByPeriodOrDay['saturday']['since']"
          class="hours-range-edge"
          v-bind:complete-error-display-available="true"
        >
          {{ Translations["since"] }} :
        </text-input-combo>
        <text-input-combo
          v-bind:error-message-box-available="true"
          unique-id="saturdayHourUntil"
          input-type="time"
          v-model="workingHoursByPeriodOrDay['saturday']['until']"
          class="hours-range-edge"
          v-bind:complete-error-display-available="true"
        >
          {{ Translations["until"] }} :
        </text-input-combo>
        <labeled-checkbox
          v-on:update:modelValue="(clean) => toggleDayFreeOrBusy(clean, 'saturday')"
          class="shortcut-checkbox"
          >{{ Translations["day_of"] }}</labeled-checkbox
        >
      </div>
      <div class="time-period-details">
        <span v-text="Translations['sunday']"></span>
        <text-input-combo
          v-bind:error-message-box-available="true"
          unique-id="sundayHourSince"
          input-type="time"
          v-model="workingHoursByPeriodOrDay['sunday']['since']"
          class="hours-range-edge"
          v-bind:complete-error-display-available="true"
        >
          {{ Translations["since"] }} :
        </text-input-combo>
        <text-input-combo
          v-bind:error-message-box-available="true"
          unique-id="sundayHourUntil"
          input-type="time"
          v-model="workingHoursByPeriodOrDay['sunday']['until']"
          class="hours-range-edge"
          v-bind:complete-error-display-available="true"
        >
          {{ Translations["until"] }} :
        </text-input-combo>
        <labeled-checkbox
          v-on:update:modelValue="(clean) => toggleDayFreeOrBusy(clean, 'sunday')"
          class="shortcut-checkbox"
          >{{ Translations["day_of"] }}</labeled-checkbox
        >
      </div>
    </div>
    <h2 v-text="Translations['location']" class="subsection-header"></h2>
    <select-combo
      v-bind:error-message-box-available="true"
      unique-id="voivodeship"
      v-bind:select-options="voivodeshipsList"
      v-model="regionId"
      v-on:selected="getCitiesForVoivodeship"
      class="select"
      v-bind:complete-error-display-available="true"
    >
      {{ Translations["voivodeship"] }} :
    </select-combo>
    <select-combo
      v-bind:error-message-box-available="true"
      unique-id="city"
      v-bind:select-options="citiesList"
      v-model="cityId"
      class="select"
      v-bind:complete-error-display-available="true"
    >
      {{ Translations["city"] }} :
    </select-combo>
  </section>
</template>
        
<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitute_location_and_working_hours";
import SelectCombo from "@jscomponents/form_controls/select_combo.vue";
import YesNoOptions from "@jsmodules/translations/components/yes_no_options";
import AddButton from "@jscomponents-form-controls/add_button.vue";
import Routes from "@config/paths/routes";
import ExpectShadowCircle from "@jscomponents-decoration/expect_shadow_circle.vue";
import { Weekdays } from "@js/enum/weekdays";
import { DaysOfWeek } from "@js/enum/days_of_week";
import { EmptyInputValue } from "@jscomponents/empty_input_option";
import { EmptyInputList } from "@jscomponents/empty_input_option";
import ErrorOnComboForProstitueAnnouncements from "@mixins/components/prostitute_announcement_creator/error_on_combo_input";
import TimeStringValidator from "@jsmodules/helpers/time_string_validator";
import { mapWritableState } from 'pinia';
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";

export default {
  name: "prostitute-location-and-working-hours",

  mixins: [ErrorOnComboForProstitueAnnouncements],

  emits: ["validated"],

  props: {
    voivodeshipsList: {
      required: true,
      type: Object,
    },
  },

  components: {
    SelectCombo,
    AddButton,
    ExpectShadowCircle,
  },

  methods: {
    resetValidation(): void {
      this.emitter.emit("resetValidationpreciseHoursDecision");
      Object.values(DaysOfWeek).forEach((dayOfWeek) => {
        this.emitter.emit(`resetValidation${dayOfWeek}HourSince`);
        this.emitter.emit(`resetValidation${dayOfWeek}HourUntil`);
      });
      this.emitter.emit(`resetValidationmondayToFridayHourSince`);
      this.emitter.emit(`resetValidationmondayToFridayHourFrom`);
      this.emitter.emit(`resetValidationvoivodeship`);
      this.emitter.emit(`resetValidationcity`);
      this.incorrectRelationBetweenHourOfStartAndEnd = false;
      this.validationIsSuccessfull = true;
    },

    validateData(): void {
      this.resetValidation();
      this.validateWorkingHours();
      this.validateLocation();
      if(this.validationIsSuccessfull) {
        this.$emit('validated');
      }
    },

    validateLocation(): void {
      if(this.regionId === EmptyInputValue) {
        this.showErrorOnComboInput('voivodeship', 'choose_option');
      }

      if(this.cityId === EmptyInputValue) {
        this.showErrorOnComboInput('city', 'choose_option');
      }
    },

    validateWorkingHours(): void {
      if (this.userMadeDecisionOnWorkingHours) {
        if (this.showWeeklySchedule) {
            this.validateWeekdays();
            this.validateWeekends();
            this.checkIfAnyRangeHasBeenProvided();
        }
      } else {
        this.showErrorOnComboInput("preciseHoursDecision", "please_decide");
      }

      if(this.incorrectRelationBetweenHourOfStartAndEnd) {
        this.emitter.emit("showNotification", {
          notificationText: "time_since_must_be_earlier_than_time_until",
          notificationType: "error",
          headerText: "error",
        });
      }
    },

    checkIfAnyRangeHasBeenProvided() : void {
      if(this.showEverySingleWeekday && this.freePeriods.length === 7) {
          this.setFailedValidationAndShowError('no_working_period_has_been_provided');
          return;
      }

      if(!this.showEverySingleWeekday && this.userSetAllDaysToFreeUsingShortWeekdays) {
          this.setFailedValidationAndShowError('no_working_period_has_been_provided');
        }

    },

    validateWeekdays(): void {
      if (this.showEverySingleWeekday) {
          this.weekdays.forEach(weekday => this.validateWorkingPeriod(weekday));
      } else {
        this.validateWorkingPeriod("mondayToFriday");
      }
    },

    setFailedValidationAndShowError(errorMessage : string) : void {
      this.validationIsSuccessfull = false;
      this.emitter.emit("showNotification", {
          notificationText: errorMessage,
          notificationType: "error",
          headerText: "error",
        });
    },

    validateWeekends() : void {
      this.validateWorkingPeriod('saturday');
      this.validateWorkingPeriod('sunday');
    },

    validateWorkingPeriod(period: string): void {
      if (this.userProvidedWorkingHours(period)) {
        const timeSince = this.workingHoursByPeriodOrDay[period]["since"];
        const timeUntil = this.workingHoursByPeriodOrDay[period]["until"];
        let bothTimesAreValid = true;
        if (!TimeStringValidator(timeSince)) {
          this.showErrorOnComboInput(`${period}HourSince`,"invalid_time_format");
          bothTimesAreValid = false;
        }
        if (!TimeStringValidator(timeUntil)) {
          this.showErrorOnComboInput(`${period}HourUntil`,"invalid_time_format");
          bothTimesAreValid = false;
        }

        if(bothTimesAreValid && (timeSince >= timeUntil)) {
          this.showErrorOnComboInput(`${period}HourSince`);
          this.incorrectRelationBetweenHourOfStartAndEnd = true;
        }
      }
    },

    userProvidedWorkingHours(period: string): boolean {
      return !this.freePeriods.includes(period);
    },

    initiateWorkingHours(): void {
      this.workingHoursByPeriodOrDay = {};
      this.initiateWeekdays();
      this.initiateWeekendHours();
    },

    initiateWeekendHours(): void {
      this.workingHoursByPeriodOrDay["saturday"] = this.getEmptyPeriod();
      this.workingHoursByPeriodOrDay["sunday"] = this.getEmptyPeriod();
    },

    initiateWeekdays(): void {
      this.weekdays.forEach((weekday) => {
        this.workingHoursByPeriodOrDay[weekday] = this.getEmptyPeriod();
      });
      this.workingHoursByPeriodOrDay["mondayToFriday"] = this.getEmptyPeriod();
    },

    getEmptyPeriod() {
      return {
        since: "00:00",
        until: "00:00",
      };
    },

    toggleWeekdaysList(): void {
      this.showEverySingleWeekday = !this.showEverySingleWeekday;
    },

    toggleDayFreeOrBusy(free: boolean, period: string): void {
      if(free) {
        this.workingHoursByPeriodOrDay[period]["since"] = undefined;
        this.workingHoursByPeriodOrDay[period]["until"] = undefined;
        this.freePeriods.push(period);
      } else {
        this.workingHoursByPeriodOrDay[period]["since"] = "00:00";
        this.workingHoursByPeriodOrDay[period]["until"] = "00:00";
        this.freePeriods = this.freePeriods.filter(freePeriods => freePeriods !== period);
      }
    },

    getCitiesForVoivodeship(voivodeshipID: string) {
      if (voivodeshipID !== EmptyInputValue) {
        this.fetchingCitiesInProgress = true;
        this.fetchCitiesForVoivodeship(voivodeshipID);
      }
      this.fetchingCitiesInProgress = false;
    },

    async fetchCitiesForVoivodeship(voivodeshipID: string) {
      const requestData = {
        method: "GET",
        headers: {
          "X-CSRF-TOKEN": this.csrfToken,
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      const URL = `${Routes.cities}?voivodeshipID=${voivodeshipID}`;
      let response = await fetch(URL, requestData);
      if (response.status === 200) {
        response = await response.json();
        this.loadCities(response);
      } else {
        this.notifyUserAboutFetchError();
      }
    },

    loadCities(cities: any[]): void {
      let loadedCities = { ...EmptyInputList };
      cities.forEach((city) => {
        loadedCities[city.id] = city.name;
      });
      this.citiesList = loadedCities;
      this.cityId = EmptyInputValue;
    },

    notifyUserAboutFetchError(): void {
      this.emitter.emit("showNotification", {
        notificationText: "failed_to_fetch_cities_list_please_try_again",
        notificationType: "error",
        headerText: "error",
      });
    },
  },

  data() {
    return {
     
      freePeriods : [],
      Translations,
      YesNoOptions,
      incorrectRelationBetweenHourOfStartAndEnd : false,
      csrfToken: "",
      fetchingCitiesInProgress: false,
      citiesList: EmptyInputList,
    };
  },

  created() {
    this.emitter.on(
      "prostituteLocationAndWorkingHoursValidator",
      this.validateData
    );
    this.initiateWorkingHours();
    this.csrfToken = (<HTMLMetaElement>(
      document.getElementById("csrf-token")
    )).content;
  },

  computed: {
    showWeeklySchedule(): boolean {
      return parseInt(this.preciseHoursDecision) === 1;
    },

    weekdays(): string[] {
      return Object.values(Weekdays);
    },

    toggleWeekdaysButtonCaption(): string {
      return this.showEverySingleWeekday
        ? Translations["show_weekdays_as_one_row"]
        : Translations["show_each_single_day_from_monday_to_friday"];
    },

    userMadeDecisionOnWorkingHours() : boolean {
      return this.preciseHoursDecision !== EmptyInputValue;
    },

    userSetAllDaysToFreeUsingShortWeekdays() : boolean {
      return this.freePeriods.includes('saturday') && 
              this.freePeriods.includes('sunday') && 
              this.freePeriods.includes('mondayToFriday')
    },

    ...mapWritableState(announcementDetails, [
        'preciseHoursDecision',
        'showEverySingleWeekday',
        'workingHoursByPeriodOrDay',
        'cityId',
        'regionId',
    ])
  },
};
</script>
        
<style lang="scss" scoped>
@import "~sass/fonts";

.toggle-days-container {
  display: flex;
  justify-content: center;
  padding: 10px 0 0;
}

.weekly-schedule {
  max-width: max-content;
  margin: 0 auto;
}

.hours-range-edge {
  max-width: max-content;
  margin-left: 5px;
}

.time-period-details {
  @include responsive-font(1.1vw, 16px);
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.select {
  max-width: max-content;
  margin: 0 auto;
}

.location-and-hours {
  background: rgba(0, 0, 0, 0.87);
  color: white;
  padding: 5px;
  position: relative;
}

.info {
  @include responsive-font(1.2vw, 17px);
  text-align: center;
}

.subsection-header {
  color: white;
  @include responsive-font(1.3vw, 18px);
  text-align: center;
  padding: 5px;
  margin: 8px 0 0;
  background: black;
}

.shortcut-checkbox {
  margin-left: 5px;
}

.relative-shadow-container {
  background: rgba(0, 0, 0, 0.9);
}
</style>
        