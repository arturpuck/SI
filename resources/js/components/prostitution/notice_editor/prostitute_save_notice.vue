<template>
    <section class="save-notice">
        <div class="info-container">
            <span v-text="translations['prostitute_save_announcement_info']"></span>
            <strong class="important-info" v-text="translations['announcement_must_be_accepted_reminder']"></strong>
        </div>
        <add-button v-on:click="saveNotice">{{ translations['add_notice'] }}</add-button>
    </section>
</template>

<script lang="ts">
import Translations from "@jsmodules/translations/components/prostitution_save_notice";
import RoutesConfig from "@config/paths/routes";
import AddButton from "@jscomponents-form-controls/add_button.vue";
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";
import { mapWritableState } from 'pinia';
import GlobalPropertiesNames from "@jscomponents/prostitution/notice_editor/global_properties_names";
import { optionalPersonalitiesPropertiesNames } from "@jscomponents/prostitution/notice_editor/global_properties_names";
import { sexServicesPropertiesCoreKeys } from "@jscomponents/prostitution/notice_editor/global_properties_names";
import { EmptyInputValue } from "@jscomponents/empty_input_option";
import { Weekdays } from "@js/enum/weekdays";

interface WorkingPeriodRange {
    since: string
    until: string
}

export default {
    name: "prostitution-save-notice",

    components: {
        AddButton
    },

    data() {
        return {
            translations: Translations,
            routesConfig: RoutesConfig,
            csrfToken : '',
        };
    },

    methods: {
        createRequestObject() {
            let rawObject = {
                ...this.createRequestObjectPersonalitiesPart(),
                ...this.createRequestObjectServicesPart(),
                ...this.createRequestObjectLocationAndWorkingHoursPart(),
            }
            let formData = new FormData();
            Object.keys(rawObject).forEach(key => formData.append(key, rawObject[key]));
            this.createRequestObjectPhotosPart(formData);
            return formData;
        },

        createRequestObjectLocationAndWorkingHoursPart(): object {
            let requestPart = {};
            if (this.preciseHoursDecision === '1') {  //sucks a little bit I know
                requestPart = this.createRequestObjectWorkingHoursPart();
            }
            return {
                ...requestPart,
                ...this.createLocationRequestPart()
            };
        },

        createLocationRequestPart(): object {
            return {
                city: this.city,
                voivodeship: this.voivodeship
            };
        },

        createRequestObjectWorkingHoursPart(): object {
            return this.showEverySingleWeekday ?
                this.extractWorkingHoursForEverySingleDayOfWeek() :
                this.extractWorkingHoursWhenUserChoseMondayToFridayAsOneOption();
        },

        extractWorkingHoursForEverySingleDayOfWeek(): object {
            let workingHoursCopy = { ...this.workingHoursByPeriodOrDay };
            let result = {};
            delete workingHoursCopy['mondayToFriday'];

            Object.keys(workingHoursCopy).forEach(dayOfWeek => {
                if (this.userWorksDuringThisDayOrPeriod(workingHoursCopy[dayOfWeek])) {
                    result[dayOfWeek] = workingHoursCopy[dayOfWeek];
                }
            });
            return {
                workingHours: JSON.stringify(result)
            };
        },

        extractWorkingHoursWhenUserChoseMondayToFridayAsOneOption(): object {
            let result = {};
            if (this.userWorksDuringThisDayOrPeriod(this.workingHoursByPeriodOrDay['mondayToFriday'])) {
                let mondayToFridayHours: WorkingPeriodRange = this.workingHoursByPeriodOrDay['mondayToFriday'];
                Object.values(Weekdays).forEach(weekday => {
                    result[weekday] = mondayToFridayHours;
                })
            }
            if (this.userWorksDuringThisDayOrPeriod(this.workingHoursByPeriodOrDay['saturday'])) {
                result['saturday'] = this.workingHoursByPeriodOrDay['saturday'];
            }

            if (this.userWorksDuringThisDayOrPeriod(this.workingHoursByPeriodOrDay['sunday'])) {
                result['sunday'] = this.workingHoursByPeriodOrDay['sunday'];
            }

            return {
                workingHours: JSON.stringify(result)
            };
        },

        userWorksDuringThisDayOrPeriod(period: WorkingPeriodRange): boolean {
            return period.since !== undefined && period.until !== undefined;
        },

        anyValueWasChosenByUser(propertyValue): boolean {
            return propertyValue && propertyValue != EmptyInputValue;
        },

        createRequestObjectPhotosPart(formData : FormData) : void {
            this.photos.forEach((photo, index) => formData.append(`photo${index}`, photo));
        },

        createRequestObjectPersonalitiesPart(): object {
            let personalitiesPart = {
                nickname: this.nickname,
                birthDate: this.birthDate,
                userType: this.userType,
            }
            optionalPersonalitiesPropertiesNames.forEach(propertyName => {
                if (this.anyValueWasChosenByUser(this[propertyName])) {
                    personalitiesPart[propertyName] = this[propertyName];
                }
            })
            return personalitiesPart;
        },

        createRequestObjectServicesPart(): object {
            let serviceProperties = {};
            sexServicesPropertiesCoreKeys.forEach(propertyCoreName => {
                let preferencePropertyName = `${propertyCoreName}Preference`;
                if (this[preferencePropertyName] !== 'never') {
                    serviceProperties[preferencePropertyName] = this[preferencePropertyName];
                }

                if (this[preferencePropertyName].includes('aditional_payment')) {
                    let aditionalPaymentPropertyName = `${propertyCoreName}AditionalPayment`;
                    serviceProperties[aditionalPaymentPropertyName] = this[aditionalPaymentPropertyName];
                }
            });
            if (this.secondaryServices.length > 0) {
                serviceProperties['secondaryServices'] = JSON.stringify(this.secondaryServices);
            }
            if (this.tripsPreference === '1') {
                serviceProperties['tripsPreference'] = this.tripsPreference
            }
            serviceProperties['paymentForms'] = JSON.stringify(this.paymentForms);
            return serviceProperties;
        },

       async saveNotice() {
            const requestBody = this.createRequestObject();
            const requestData = {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                },
                body: requestBody
            };
            
            const response = await fetch(RoutesConfig.addAnnouncement, requestData);
            this.processNoticeResponse(response);
        },

        async processNoticeResponse(response) {
            switch(response.status) {
                case 200:
                    alert('good');
                break;

                case 400:
                    alert('your request sucks');
                break;

                case 500:
                    alert('your server sucks');
                break;
            }
        }
    },

    computed: {
        //@ts-ignore
        ...mapWritableState(announcementDetails, GlobalPropertiesNames),
    },

    mounted() {
        this.csrfToken = (<HTMLMetaElement>(
      document.getElementById("csrf-token")
    )).content;
    }

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
