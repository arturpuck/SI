import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import SimpleLabeledSelect from "@jscomponents-form-controls/simple_labeled_select.vue";
import RoutesConfig from "@config/paths/routes";
import AcceptButton from '@jscomponents/form_controls/accept_button.vue';
import MagnifierIcon from "@svgicon/magnifier_icon.vue";
import SearchButton from "@jscomponents-form-controls/search_button.vue";
import Translator from "@jsmodules/translator.js";
import ProstitutionAnnouncementSearchCriteria from '@js/interfaces/prostitution/ProstitutionAnnouncementSearchCriteria';
import ProstitutionAnnouncementsSet from "@jscomponents/prostitution/prostitution_announcements_set.vue";
import ExpectShadowCircle from '@jscomponents/decoration/expect_shadow_circle.vue';

const settings = {

    components : {
        SimpleLabeledSelect,
        AcceptButton,
        MagnifierIcon,
        SearchButton,
        ProstitutionAnnouncementsSet,
        ExpectShadowCircle
    },

    data() {
        return {
            selectedVoivodeship : "",
            selectedCity : "",
            selectedUserType : "",
            translator : Translator,
            loadingDecorationIsVisible : false,
        }
    },

    watch : {
        selectedVoivodeship() {
            if(this.selectedVoivodeship) {
                this.fetchCities(this.selectedVoivodeship)
                    .then(this.loadCities);
                return;
            }
            this.resetCities();
        }
    },
    
    methods : {
        
        resetCities() : void {
         this.selectedCity = "";
         this.emitter.emit('updateSelectValuescity', {});
      },

      updateAnnouncementsList(announcements : []) : void {
        this.emitter.emit('UpdateProstitutionAnnouncementsSet', announcements);
      },

      searchAnnouncements() : void {
        const searchCriteria : ProstitutionAnnouncementSearchCriteria = {};
        if(this.selectedCity) {
            searchCriteria.cityId = this.selectedCity;
        }

        if(this.selectedVoivodeship) {
            searchCriteria.voivodeshipId = this.selectedVoivodeship;
        }

        if(this.selectedUserType) {
            searchCriteria.userTypeId = this.selectedUserType;
        }
        this.loadingDecorationIsVisible = true;
        this.fetchAnnouncements(searchCriteria).
            then(this.loadAnnouncements)
      },

      async loadAnnouncements(response : Response) {
          if(response.status !== 200) {
              this.showErrorNotification('undefined_error');
            } else {
            const announcements = await response.json();
            this.updateAnnouncementsList(announcements);
        }
        this.loadingDecorationIsVisible = false;
      },
    
    async fetchAnnouncements(criteria : ProstitutionAnnouncementSearchCriteria) {
          const requestData = {
              method: "GET",
          };
         let URL = `${RoutesConfig.noticesSet}?`;
         Object.keys(criteria).forEach(key => {
            URL = `${URL}${key}=${criteria[key]}&`;
         })
         URL.slice(0,-1);
         const response = await fetch(URL, requestData);
         return response;

      },

      async  loadCities(response : Response) {
            if(response.status !== 200) {
                this.showErrorNotification('undefined_error');
                return;
            }

            const cities = await response.json();
            
            const parsedList = {};
            cities.forEach(element => {
                parsedList[element.id] = element.name;
            });
            this.emitter.emit('updateSelectValuescity', parsedList);
        },

        async fetchCities(voivodeshipID : number) {
            const requestData = {
                method: "GET",
              };
              const URL = `${RoutesConfig.cities}?voivodeshipID=${voivodeshipID}`;
              const response = await fetch(URL, requestData);
              return response;
        },

        async fetchUserTypes() {
            const requestData = {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              };
              
              const response = await fetch(RoutesConfig.userTypes, requestData);
              return response;
        },

        async fetchAvailableVoivodeships() {
            const requestData = {
                method: "GET",
              };
        
              const response = await fetch(RoutesConfig.voivodeships, requestData);
              return response;
        },

        async loadVoivodeships(response: Response)  {
            if(response.status !== 200) {
                this.showErrorNotification('undefined_error');
                return;
            }

            const voivodeships = await response.json();
            const parsedList = {};
            voivodeships.forEach(element => {
                parsedList[element.id] = element.name;
            });
            this.emitter.emit('updateSelectValuesvoivodeships', parsedList);
        },
        
        showErrorNotification(errorMessage : string) : void {
            this.emitter.emit("showNotification", {
                notificationText: errorMessage,
                notificationType: "error",
                headerText: "error",
              });
        },

        showNotificationIfVoivodeshipIsNotSelected() {
            if (this.cityCannotBeSelected) {
                this.showErrorNotification('any_voivodeship_must_be_selected');
                return;
            }
        },

        async loadUserTypes(response : Response) {
            if(response.status !== 200) {
                this.showErrorNotification('error_during_fetching_announcement_types_remaining_options_should_be_available');
                return;
            }
            const userTypes = await response.json();
            const parsedList = {};
            let femaleTypeID = 0;
            userTypes.forEach(element => {
                parsedList[element.id] = this.translator.translate(element.user_type_name);
                if(element.user_type_name === 'female') {
                    femaleTypeID = element.id;
                }
            });
            this.emitter.emit('updateSelectValuesuserType', parsedList);
            this.selectedUserType = femaleTypeID;

        }
    },

    computed : {
        cityCannotBeSelected() : boolean {
            return !this.selectedVoivodeship;
        },

        loadingDecorationLabel() : string {
            return this.translator.translate('fetching_announcements')
        }
    },


    mounted() {
        this.fetchAvailableVoivodeships()
            .then(this.loadVoivodeships);
        this.fetchUserTypes()
            .then(this.loadUserTypes);
    }
    
};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");