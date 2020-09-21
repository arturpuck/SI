export default {

async emailExists(email){
         
        email = encodeURI(email);
  
        try{
           const response = await fetch(`/verify-email/${email}`);

               switch(response.status){
                  case 200:
                    return false;
                  break;
  
                  case 400:
                     throw "email_has_already_been_taken";
                  break;
  
                  case 429:
                     throw "to_many_attempts";
                  break;
  
                  default:
                     throw "undefined_error";
                  break;
               }
        }
        catch(error){
           return error;
        } 
     },

      emailhasCorrectFormat(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }

}