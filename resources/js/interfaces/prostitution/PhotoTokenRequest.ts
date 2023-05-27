import { TokenType } from "@js/enum/token_type";

export default interface PhotoTokenRequest {
    URL : string
    tokenType : TokenType,
    csrfToken : string,
}