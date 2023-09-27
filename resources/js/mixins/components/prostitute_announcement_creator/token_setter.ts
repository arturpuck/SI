import PhotoTokenRequest from "@js/interfaces/prostitution/PhotoTokenRequest";
import { TokenType } from "@js/enum/token_type";

export default {
  methods: {
    async managePhotoTokenInSession(tokenRequest: PhotoTokenRequest) {
      const method = tokenRequest.tokenType === TokenType.LastGenerated ? "DELETE" : "PUT";
      const requestPayload = {
        method,
        headers: {
          "X-CSRF-TOKEN": tokenRequest.csrfToken,
        },
      };

      const response = await fetch(tokenRequest.URL, requestPayload);

      if (response.status !== 200) {
        throw new Error(`${response.status}`);
      }
      if (tokenRequest.tokenType === TokenType.New) {
        const responseBody = await response.json();
        return responseBody.photoToken;
      }
    }
  }
}