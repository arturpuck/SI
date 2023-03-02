import { defineStore } from 'pinia';
import { EmptyInputValue} from "@jscomponents/empty_input_option";

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
        titsSize: 0,
        height: "",
        weight: "",

    })
});

export default announcementDetails;