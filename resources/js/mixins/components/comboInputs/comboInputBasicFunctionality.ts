import InputComboState from "@interfaces/InputComboState";
import Translator from "@jsmodules/translator";

const comboInputBasicFunctionality = {
   methods: {
      showIfValueIsCorrect(currentStatus: InputComboState): void {
         alert('no tu pokazuję');
         this.valueOK = currentStatus.valueIsCorrect;
         this.errorMessage = Translator.translate(currentStatus.errorMessage);
      },

      resetValidation() {
         this.valueOK = undefined;
         this.errorMessage = "";
      },

      attachEventListeners(): void {
         this.emitter.on(`showIfValueIsOK${this.uniqueId}`, this.showIfValueIsCorrect);
         this.emitter.on(`resetValidation${this.uniqueId}`, this.resetValidation);
      },
   }

}

export default comboInputBasicFunctionality