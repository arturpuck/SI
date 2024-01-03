interface WorkingPeriodRange {
    since: string
    until: string
}

import { Weekdays } from "@js/enum/weekdays";
const orderedWeekDays = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
};

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
            let orderedDays = Object.keys(workingHoursCopy).sort(function(first: string, second: string): number {
                return orderedWeekDays[second] > orderedWeekDays[first] ? -1 : 1;
            })

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