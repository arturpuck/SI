import { defineStore } from 'pinia';
import { EmptyInputValue} from "@jscomponents/empty_input_option";

const announcementDetails = defineStore({
    id : 'announcementDetails',
    state : () => ({
        id : undefined,
        nickname : '',
        phoneNumber : '',
        birthDate: null,
        description : "",
        userTypeId: EmptyInputValue,
        sexualOrientationId: EmptyInputValue,
        hairColor: EmptyInputValue,
        titsSize: '0',
        heightInCentimeters: "",
        weightInKilograms: "",

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
        workingHours: undefined,
        cityId: EmptyInputValue,
        regionId: EmptyInputValue,

        modifiedFields : []

    })
});

export default announcementDetails;