import { createApp } from 'vue';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
import LabeledCheckbox from '@jscomponents/form_controls/labeled_checkbox.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import RelativeShadowContainer from '@jscomponents/decoration/relative_shadow_container.vue';
import Multiselect from '@jscomponents-form-controls/multiselect.vue';
import SimpleLabeledInput from '@jscomponents-form-controls/simple_labeled_input.vue';
import AcceptButton from '@jscomponents-form-controls/accept_button.vue';
import ShutdownIcon from "@svgicon/shutdown_icon.vue";
import ResetButton from '@jscomponents-form-controls/reset_button.vue';
import SearchEngineTranslations from '@jsmodules/translations/search_engine_translations.js';
import Translator from '@jsmodules/translator.js';
import EventEmmiter from 'mitt';
import LabeledRange from "@jscomponents-form-controls/labeled_range";
import SearchEngineVariables from '@jsmodules/search_engine_variables.ts';

const EventBus = EventEmmiter();
const propertiesNotDescribingMovie = [
   'fetchingMoviesInProgress',
   'advancedSearchPanelIsVisible',
   'selectedOptionsVisibleForUser',
   'totalMoviesFound',
   'scrollYreactiveProperty',
   'currentPage',
   'searchEngineTranslations',
   'csrfToken',
   'multiselectValues',
   'translator',
   'fetchingPornstarsInProgress'
];

const settings = {

 components : {
   SimpleLabeledSelect,
   LabeledCheckbox,
   ExpectCircle,
   RelativeShadowContainer,
   Multiselect,
   SimpleLabeledInput,
   AcceptButton,
   ShutdownIcon,
   ResetButton,
   LabeledRange
 },

  data() {
     return {
        searchEngineTranslations: SearchEngineTranslations,
        csrfToken: undefined,
        multiselectValues: [],
        translator: Translator,
        fetchingPornstarsInProgress: true,
        abundanceType: "",
        titsSize: "",
        assSize: "",
        thicknessSize: "",
        ageRange: "",
        hairColor: "",
        race: "",
        nationality: "",
        shavedPussy: "",
        analAmount: 0,
        blowjobAmount: 0,
        vaginalAmount: 0,
        handjobAmount: 0,
        pussyLickingAmount: 0,
        titfuckAmount: 0,
        feetPettingAmount: 0,
        position69amount: 0,
        doublePenetrationamount: 0,
        cumshotType: "",
        isCumshotCompilation: false,
        location: "",
        cameraStyle: "",
        storyOrCostume: "",
        professionalismLevel: "",
        hasStory: "",
        recordedBySpamCamera: false,
        isSadisticOrMasochistic: false,
        isFemaleDomination: false,
        isTranslatedToPolish: false,
        showPantyhose: false,
        showStockings: false,
        showGlasses: false,
        showHighHeels: false,
        showHugeCock: false,
        showWhips: false,
        showSexToys: false,
        pornstarsList: [],
        fetchingMoviesInProgress: false,
        advancedSearchPanelIsVisible: true,
        selectedOptionsVisibleForUser: [],
        totalMoviesFound: undefined,
        scrollYreactiveProperty: 0,
        currentPage: undefined,
        movieDuration : '00:00:00'
     };
  },

  methods: {

   resetPanel(): void {

      this.pornstarsList = [];
    },

   async saveMovie() {
        const movieData = {...this.$data};
        propertiesNotDescribingMovie.forEach( property => delete movieData[property] );
        Object.keys(movieData).forEach(function(propertName : string){
           if(!movieData[propertName]) {
             delete movieData[propertName];
           }
        })

        const requestData = {
         method: 'POST',
         body: JSON.stringify(movieData),
         headers: {
           'X-CSRF-TOKEN': this.csrfToken,
           'Content-type': 'application/json; charset=UTF-8'
         }
       };

       const response = await fetch('/employee-panel/movies', requestData);

       switch(response.status) {
           case 200:

           break;
       }


    }

  },

  mounted() {
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
  } 

};

const app = createApp(settings);
app.config.globalProperties.emitter = EventBus;
      
app.mount("#app");
