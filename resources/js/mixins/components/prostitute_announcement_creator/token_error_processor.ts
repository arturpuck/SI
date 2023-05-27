export default {
    methods : {
        processTokenError(error : Error) : void {
            const errorHTTPStatus = parseInt(error.message);
            if(errorHTTPStatus === 429) {
              this.showErrorMessageNotification('because_of_security_reasons_token_generation_is_limited')
              return;
            }
            this.showErrorMessageNotification('error_occured_while_token_processing');
          },

          showErrorMessageNotification(message : string) : void {
            this.emitter.emit("showNotification", {
                notificationText: message,
                notificationType: "error",
                headerText: "error",
              });
          }
    }
}