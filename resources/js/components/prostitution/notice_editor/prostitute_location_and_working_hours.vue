<template>
  <section class="photos-and-location">
    <div
      v-text="Translations['empire_policy_for_working_hours_of_prostitutes']"
      class="info"
    ></div>
    <div>
      <select-combo
        v-bind:error-message-box-available="true"
        unique-id="precise-hours-decision"
        v-bind:select-options="YesNoOptions"
        v-model="preciseHoursDecision"
        v-bind:complete-error-display-available="true"
        class="precise-hours-decision"
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
            (clean) => toggleHours(clean, 'mondayToFriday')
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
          v-on:update:modelValue="(clean) => toggleHours(clean, weekday)"
           class="shortcut-checkbox">{{
            Translations["day_of"]
          }}</labeled-checkbox>
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
        v-on:update:modelValue="(clean) => toggleHours(clean, 'saturday')"
        class="shortcut-checkbox">{{
          Translations["day_of"]
        }}</labeled-checkbox>
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
          v-model="workingHoursByPeriodOrDay['sunday']['since']"
          class="hours-range-edge"
          v-bind:complete-error-display-available="true"
        >
          {{ Translations["until"] }} :
        </text-input-combo>
        <labeled-checkbox 
        v-on:update:modelValue="(clean) => toggleHours(clean, 'sunday')"
        class="shortcut-checkbox">{{
          Translations["day_of"]
        }}</labeled-checkbox>
      </div>
    </div>
  </section>
</template>
        
<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitute_location_and_working_hours";
import SelectCombo from "@jscomponents/form_controls/select_combo.vue";
import YesNoOptions from "@jsmodules/translations/components/yes_no_options";
import AddButton from "@jscomponents-form-controls/add_button.vue";
import { Weekdays } from "@js/enum/weekdays";

export default {
  name: "prostitute-location-and-working-hours",

  emits: ["validated"],

  components: {
    SelectCombo,
    AddButton,
  },

  methods: {
    validateData(): void {},

    initiateWorkingHours(): void {
      this.workingHoursByPeriodOrDay = {};
      this.initiateWeekdays();
      this.initiateWeekendHours();
    },

    initiateWeekendHours(): void {
      this.workingHoursByPeriodOrDay['saturday'] = this.getEmptyPeriod();
      this.workingHoursByPeriodOrDay['sunday'] = this.getEmptyPeriod();
    },

    initiateWeekdays(): void {
      this.weekdays.forEach((weekday) => {
        this.workingHoursByPeriodOrDay[weekday] = this.getEmptyPeriod();
      });
      this.workingHoursByPeriodOrDay['mondayToFriday'] = this.getEmptyPeriod();
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

    toggleHours(clean: boolean, period: string): void {
        this.workingHoursByPeriodOrDay[period]['since'] = clean ? undefined : "00:00";
        this.workingHoursByPeriodOrDay[period]['until'] = clean ? undefined : "00:00";
    },
  },

  data() {
    return {
      Translations,
      YesNoOptions,
      preciseHoursDecision: "choose",
      showEverySingleWeekday: false,
      workingHoursByPeriodOrDay: undefined,
    };
  },

  created() {
    this.emitter.on(
      "prostituteLocationAndWorkingHoursValidator",
      this.validateData
    );
    this.initiateWorkingHours();
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

.precise-hours-decision {
  max-width: max-content;
  margin: 0 auto;
}

.photos-and-location {
  background: rgba(0, 0, 0, 0.87);
  color: white;
  padding: 5px;
}

.info {
  @include responsive-font(1.2vw, 17px);
  text-align: center;
}

.shortcut-checkbox {
  margin-left: 5px;
}
</style>
        