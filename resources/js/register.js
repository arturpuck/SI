require('./bootstrap');
import Vue from 'vue';
import Navbar  from './components/navbar.vue';
import TextInputCombo  from './components/text_input_combo.vue';
import ExpectBar  from './components/expect_bar.vue';

Vue.component('navbar', Navbar);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('expect-bar', ExpectBar);

  new Vue({
 el: '#app',

 data : {
    
 },

 methods : {
   validateLogin(sender)
   {
      this.$root.$emit('awaitingResponse');
      let login = sender.textInputValue;
      
      if(login.length < 3){
         sender.showError("Login ma mniej niż 3 znaki");
         return;
      }

      if(login.length > 20){
         sender.showError("Login ma więcej niż 20 znaków");
         return;
      }

      const ajaxRequest = new XMLHttpRequest();
      ajaxRequest.onreadystatechange = () => {

        if(ajaxRequest.readyState === XMLHttpRequest.DONE) {
           let status = ajaxRequest.status;

           if (status === 0 || (status >= 200 && status < 400)) {
            sender.showValueIsOK();
           } else {
            sender.showError("Login jest już zajęty");
          }

        };
     }
     const URL = '/verify-login/' + login;
     ajaxRequest.open("GET", URL);
     ajaxRequest.send();
  },
 	showRegistrationPanel()
 	{
 		this.$refs.login_panel.style.display = "none";
 		this.$refs.register_panel.style.display = "block";
 		this.$refs.show_login_form_button.style.background = "linear-gradient(#e81a4a, #780520)";
 		this.$refs.show_register_form_button.style.background = "linear-gradient(#0fe00b, #054004)";
 		this.$refs.registration_information.style.display = "block";
 		this.$refs.login_information.style.display = "none";
 	},

 	showLoginPanel()
 	{
 	  this.$refs.login_panel.style.display = "block";
 		this.$refs.register_panel.style.display = "none";
 		this.$refs.show_login_form_button.style.background = "linear-gradient(#0fe00b, #054004)"; 
 		this.$refs.show_register_form_button.style.background = "linear-gradient(#e81a4a, #780520)";
 		this.$refs.registration_information.style.display = "none";
 		this.$refs.login_information.style.display = "block";
 	},

 	showErrorMessage(refName, message = undefined)
 	{
 			
 			this.$refs["correct_value_" + refName].style.display = "none";
 			this.$refs["incorrect_value_" + refName].style.display = "flex";
 			this.$refs["label_ref_" + refName].style.border = "2px solid red";

      if(message !== undefined)
      {
        const errorMessageBox = this.$refs[refName + "_error_message_box"];
        errorMessageBox.textContent = message;
        errorMessageBox.style.visibility = "visible";
      }
 			  
 	},

 	inputLengthValidation(str, minLength = 3, maxLength = 20)
 	{
        if(str.length < minLength)
        {
      
          return {
        		success : false,
        		message : "mniej niż " + minLength + " znaki"
        	};
        }

        if(str.length > maxLength)
        {
        	return {
        		success : false,
        		message : "więcej niż " + maxLength + " znaków"
        	};
        }

        return {
        	success : true
        };
 	},

   showValueIsCorrect(refName)
   {
      this.$refs['incorrect_value_' + refName].style.display = "none";
      this.$refs['correct_value_' + refName].style.display = "block";
      this.$refs['label_ref_' + refName].style.border = "2px solid green";
      this.$refs[refName + "_error_message_box"].style.visibility = "hidden";
   },

   showNoInformationAboutInput(refName)
    {
      this.$refs['incorrect_value_' + refName].style.display = "none";
      this.$refs['correct_value_' + refName].style.display = "none";
      this.$refs['label_ref_' + refName].style.border = "2px solid transparent";
    },

    handleAJAXResponse(ajaxRequest, refName, errorMessage)
    {
      
       if(ajaxRequest.readyState === XMLHttpRequest.DONE)
       {
              if(ajaxRequest.status === 200)
              {
                  this.showValueIsCorrect(refName);     
               }
               else
              {
                this.showErrorMessage(refName, errorMessage);
              }
      }
    },

 	registrationLoginLooseFocus()
 	{   
       const typedInLogin = this.$refs.input_ref_registrationLogin.value;    
 		
 		   if(typedInLogin.length > 0)
 		  {
            
            const validationResult = this.inputLengthValidation(typedInLogin);

            if(validationResult.success === false)
            {
              this.showErrorMessage("registrationLogin", "Błędny login - " + validationResult.message);
              return;
            }

          const ajaxRequest = new XMLHttpRequest();
          ajaxRequest.onreadystatechange = this.handleAJAXResponse.bind(this,ajaxRequest,"registrationLogin", "Login jest już zajęty");

          const URL = '/verify-login/' + typedInLogin;
          ajaxRequest.open("GET", URL);
          ajaxRequest.send();
 		  }
 		  else
 		  {
         this.showNoInformationAboutInput("registrationLogin");
 		  }
   
  },

  emailLooseFocus()
  {
     function emailIsValid(email) 
     {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(String(email).toLowerCase());
     }

     const typedInEmail = this.$refs.input_ref_email.value;

     if(typedInEmail.length > 0)
     {
          if(emailIsValid(typedInEmail))
          {
             const ajaxRequest = new XMLHttpRequest();
             ajaxRequest.onreadystatechange = this.handleAJAXResponse.bind(this,ajaxRequest,"email", "Email jest już zajęty");
             const URL = '/verify-email/' + typedInEmail;
             ajaxRequest.open("GET", URL);
             ajaxRequest.send();  
          }
          else
         {
          this.showErrorMessage('email', 'Email wygląda na nieprawidłowy');
         }
     }
     else
     {
       this.showNoInformationAboutInput('email');
     }
  
  },

  registrationPasswordLooseFocus()
  {
     
     const typedInPassword = this.$refs.input_ref_registrationPassword.value;

     if(typedInPassword.length > 0)
     {
          const lengthValidationResult = this.inputLengthValidation(typedInPassword);

          if(lengthValidationResult.success === true)
          {
             this.showValueIsCorrect("registrationPassword");
          }
          else
          {
              this.showErrorMessage("registrationPassword", "Złe hasło - " + lengthValidationResult.message);
          }
     }
     
  },


  validateSelectedValue(refName)
  {
     const selectedOption = this.$refs["input_ref_" + refName].value;

      if(selectedOption === "--wybierz--")
      {
        this.showErrorMessage(refName, "Należy wybrać jedną opcję");
      }
      else
      {
        this.showValueIsCorrect(refName);
      }
  },

  userTypeSelectOption()
  {
      this.validateSelectedValue("userType");
  },

  sexualOrientationSelectOption()
  {
     this.validateSelectedValue("sexualOrientation");
  },

  birthDateChange()
  {
      
      function isDateBeforeGivenTimeSpan(day, month, year, timeSpan)
      {
          day = parseInt(day);
          month = parseInt(month);
          year = parseInt(year);
          timeSpan = parseInt(timeSpan);

          const currentDate = new Date();
          const currentMonth = currentDate.getMonth();
          const currentDay = currentDate.getDate();
          const currentYear = currentDate.getFullYear();
          const dateTimeSpanAgo = new Date(currentYear - timeSpan, currentMonth, currentDay);
          const examinedDate = new Date(year, month - 1, day);
        
          return examinedDate.getTime() <= dateTimeSpanAgo.getTime();
      }

      
           const dayNumber = parseInt(this.$refs.day_ref_birthDate.value);
           const monthNumber = parseInt(this.$refs.month_ref_birthDate.value);

           if((dayNumber === 0) || (monthNumber === 0))
           {
             this.showNoInformationAboutInput('birthDate');
           }
           else
           {
              const year = parseInt(this.$refs.year_ref_birthDate.value);
              const monthWith31Days = [1,3,5,7,8,10,12].includes(monthNumber);

              if(monthWith31Days && ((dayNumber > 31) || (dayNumber < 1)))
              { 
                 this.showErrorMessage("birthDate", "Ten miesiąc nie ma tylu dni");
                 return;
              }
              
              if(!monthWith31Days)
              {
                  if(monthNumber === 2)
                  {
                       const lastDayInFebruary = (year % 4 === 0) ? 29 : 28;

                       if((dayNumber < 1) || (dayNumber > lastDayInFebruary))
                       {
                          this.showErrorMessage("birthDate", "Luty nie miał tylu dni");
                          return;
                       }
                  }
                  else if((dayNumber < 1) || (dayNumber > 30))
                  {
                      this.showErrorMessage("birthDate", "Ten miesiąc nie ma tylu dni");
                      return;
                  }
              }

               if((monthNumber !== 0) && (year !== 0))
               {
                  if(isDateBeforeGivenTimeSpan(dayNumber,monthNumber,year,18))
                  {
                     if(isDateBeforeGivenTimeSpan(dayNumber,monthNumber,year,120))
                     {
                       this.showErrorMessage("birthDate", "Ludzie nie żyją dłużej niż 120 lat");
                     }
                     else
                     {
                       this.showValueIsCorrect("birthDate");
                     }
                  }
                  else
                  {
                    this.showErrorMessage("birthDate", "Musisz mieć ukończone 18 lat");
                  }
 
               }
               else
               {
                  this.showNoInformationAboutInput('birthDate');
               }
               
           }
  }
}

});