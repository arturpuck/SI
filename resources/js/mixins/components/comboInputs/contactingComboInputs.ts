import InputComboState from "@interfaces/InputComboState";

const contactingComboInputs = {
     methods : {

        notifyComboInputAboutState(receiver: string = '', errorMessage: string = undefined): void {
            const valueIsCorrect = !Boolean(errorMessage);
            let comboInputStatus: InputComboState = { valueIsCorrect };
            if (!valueIsCorrect) {
               comboInputStatus.errorMessage = errorMessage;
            }
            this.emitter.emit(`showIfValueIsOK${receiver}`, comboInputStatus);
         },

         resetComboInput(receiver: string = ''): void {
            this.emitter.emit(`resetValidation${receiver}`);
         }
     }
};

export default contactingComboInputs