interface WorkingPeriodRange {
    since: string
    until: string
}

import { Weekdays } from "@js/enum/weekdays";

export default {
    methods : {
        createRequestObjectWorkingHoursPart(): object {
            return this.showEverySingleWeekday ?
                this.extractWorkingHoursForEverySingleDayOfWeek() :
                this.extractWorkingHoursWhenUserChoseMondayToFridayAsOneOption();
        },

        extractWorkingHoursForEverySingleDayOfWeek(): object {
            let workingHoursCopy = { ...this.workingHours };
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

        userWorksDuringThisDayOrPeriod(period: WorkingPeriodRange): boolean {
            return period.since !== undefined && period.until !== undefined;
        },

        extractWorkingHoursWhenUserChoseMondayToFridayAsOneOption(): object {
            let result = {};
            if (this.userWorksDuringThisDayOrPeriod(this.workingHours['mondayToFriday'])) {
                let mondayToFridayHours: WorkingPeriodRange = this.workingHours['mondayToFriday'];
                Object.values(Weekdays).forEach(weekday => {
                    result[weekday] = mondayToFridayHours;
                })
            }
            if (this.userWorksDuringThisDayOrPeriod(this.workingHours['saturday'])) {
                result['saturday'] = this.workingHours['saturday'];
            }

            if (this.userWorksDuringThisDayOrPeriod(this.workingHours['sunday'])) {
                result['sunday'] = this.workingHours['sunday'];
            }

            return {
                workingHours: JSON.stringify(result)
            };
        },
    }
}