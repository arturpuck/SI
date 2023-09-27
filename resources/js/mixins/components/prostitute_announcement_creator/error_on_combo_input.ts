import InputComboState from "@interfaces/InputComboState";

const comboInputErrorState: InputComboState = {
    valueIsCorrect: false,
};

export default {
    data() {
        return { 
            validationIsSuccessfull : true
        }
    },

    methods : {
        
        showErrorOnComboInput(id: string, errorMessage: string = ''): void {
            comboInputErrorState.errorMessage = errorMessage;
            this.validationIsSuccessfull = false;
            this.emitter.emit(`showIfValueIsOK${id}`, comboInputErrorState);
          }

    }

}