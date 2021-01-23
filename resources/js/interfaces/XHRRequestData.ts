export interface XHRRequestData {
    
    method : string,
    headers : {
        'X-CSRF-TOKEN' : string
    }
}