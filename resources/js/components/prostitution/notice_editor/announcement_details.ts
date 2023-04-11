import { defineStore } from 'pinia';
import { EmptyInputValue} from "@jscomponents/empty_input_option";
import { EmptyInputList } from "@jscomponents/empty_input_option";

const announcementDetails = defineStore({
    id : 'announcementDetails',
    state : () => ({
        nickname : '',
        phoneNumber : '',
        birthDate: null,
        description : "",
        userType: EmptyInputValue,
        sexualOrientation: EmptyInputValue,
        hairColor: EmptyInputValue,
        titsSize: '0',
        height: "",
        weight: "",

        massagePreference : EmptyInputValue,
        vaginalSexPreference: EmptyInputValue,
        blowjobPreference: EmptyInputValue,
        oralCreampiePreference : EmptyInputValue,
        cumSwallowPreference : EmptyInputValue,
        cumOnFacePreference : EmptyInputValue,
        analPreference : EmptyInputValue,
        pussyLickingPreference : EmptyInputValue,
        clientRimmingPreference : EmptyInputValue,
        kissingPreference : EmptyInputValue,
        cumOnBodyPreference : EmptyInputValue,
        tripsPreference : EmptyInputValue,
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
        secondaryServices : [],
        paymentForms : [{unit : 'for_hour', price : 200}],

        photos: [],

        preciseHoursDecision: EmptyInputValue,
        showEverySingleWeekday: false,
        workingHoursByPeriodOrDay: undefined,
        city: EmptyInputValue,
        voivodeship: EmptyInputValue,

    })
});

export default announcementDetails;