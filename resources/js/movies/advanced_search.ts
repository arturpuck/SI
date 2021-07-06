import VueConstructor from '@jsmodules/basic.js';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
import LabeledCheckBox from '@jscomponents-form-controls/labeled_checkbox.vue';
import UserNotification from '@jscomponents/user_notification.vue';
import NotificationFunction from '@jsmodules/notification_function.ts';
import { MoviesListResponse } from '@interfaces/movies/MoviesListResponse.ts';
const Vue = VueConstructor.build();
import MultiSelect from '@jscomponents-form-controls/multiselect.vue';
import Translator from '@jsmodules/translator.js';
import SearchEngineTranslations from '@jsmodules/translations/search_engine_translations.js';
import RelativeShadowContainer from '@jscomponents/decoration/relative_shadow_container.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import AcceptButton from '@jscomponents-form-controls/accept_button.vue';
import ResetButton from '@jscomponents-form-controls/reset_button.vue';
import SearchEngineVariables from '@jsmodules/search_engine_variables.ts';
import { QueryBuilder, QueryParams } from '@jsmodules/query_builder.ts';
import { createTextChangeRange } from 'typescript';
import { createDecorator } from 'vue-class-component';
import { XHRRequestData } from '@interfaces/XHRRequestData.ts';
import FixedShadowContainer from '@jscomponents/decoration/fixed_shadow_container.vue';
import MoviesList from '@jscomponents/movies/movies_list.vue';
import MagnifierIcon from '@svgicon/magnifier_icon.vue';
import ExitArrowIcon from '@svgicon/exit_arrow_icon.vue';
import ArrowDownIcon from '@svgicon/arrow_down_icon.vue';
import ImprovementPerformanceIcon from '@svgicon/improvement_performance_icon.vue';
import FingerPointIcon from '@svgicon/finger_point_icon.vue';
import SideBarVisibilityMixin from "@js/mixins/side_bar_visibility";
import ShutdownIcon from "@svgicon/shutdown_icon.vue";

Vue.component('simple-labeled-select', SimpleLabeledSelect);
Vue.component('labeled-checkbox', LabeledCheckBox);
Vue.component('user-notification', UserNotification);
Vue.component('multiselect', MultiSelect);
Vue.component('relative-shadow-container', RelativeShadowContainer);
Vue.component('expect-circle', ExpectCircle);
Vue.component('accept-button', AcceptButton);
Vue.component('reset-button', ResetButton);
Vue.component('fixed-shadow-container', FixedShadowContainer);
Vue.component('movies-list', MoviesList);
Vue.component('magnifier-icon', MagnifierIcon);
Vue.component('exit-arrow-icon', ExitArrowIcon);
Vue.component('arrow-down-icon', ArrowDownIcon);
Vue.component('improvement-performance-icon', ImprovementPerformanceIcon);
Vue.component('finger-point-icon', FingerPointIcon);
Vue.component('shutdown-icon', ShutdownIcon);

new Vue({
  el: '#app',

  mixins: [SideBarVisibilityMixin],

  data: {

    searchEngineTranslations: SearchEngineTranslations,
    csrfToken: undefined,
    multiselectValues: [],
    translator: Translator,
    fetchingPornstarsInProgress: true,
    minimumMovieTime: 0,
    maximumMovieTime: 0,
    minimumMovieViews: 0,
    maximumMovieViews: 0,
    showControlsShortcut: undefined,
    abundanceType: "",
    titsSize: "",
    assSize: "",
    thicknessSize: "",
    ageRange: "",
    hairColor: "",
    race: "",
    nationality: "",
    shavedPussy: "",
    analAmount: "",
    blowjobAmount: "",
    vaginalamount: "",
    handjobAmount: "",
    pussyLickingAmount: "",
    titfuckAmount: "",
    feetPettingAmount: "",
    position69amount: "",
    doublePenetrationamount: "",
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
  },

  computed: {

    minimumMovieTimeLabel(): string {
      return (this.minimumMovieTime == 0) ?
        this.searchEngineTranslations['notSelected'] : `${this.minimumMovieTime} ${this.searchEngineTranslations['selectedTimeLabel']}`;
    },

    maximumMovieTimeLabel(): string {
      return (this.maximumMovieTime == 0) ?
        this.searchEngineTranslations['notSelected'] : `${this.maximumMovieTime} ${this.searchEngineTranslations['selectedTimeLabel']}`;
    },

    minimumMovieViewsLabel(): string {
      return (this.minimumMovieViews == 0) ?
        this.searchEngineTranslations['notSelected'] : `${this.minimumMovieViews} ${this.searchEngineTranslations['selectedViewsLabel']}`;
    },

    maximumMovieViewsLabel(): string {
      return (this.maximumMovieViews == 0) ?
        this.searchEngineTranslations['notSelected'] : `${this.maximumMovieViews} ${this.searchEngineTranslations['selectedViewsLabel']}`;
    },

    totalMoviesFoundCaption(): string {

      if (this.totalMoviesFound > 0) {
        return `${SearchEngineTranslations['totalMoviesLabel']} : ${this.totalMoviesFound}`;
      }
      else {
        return SearchEngineTranslations['noMoviesHaveBeenFound'];
      }

    },

  },

  methods: {

    showNotification: NotificationFunction,

    showSearchPanel(): void {
      this.resetPanel();
      this.advancedSearchPanelIsVisible = true;
    },

    userHasAditionalPanelPreferences(): boolean {
      return localStorage.getItem('showAditionalPanel') !== null;
    },

    setAditionalPanelPreferences(show: boolean): void {
      const value = String(show);
      localStorage.setItem('showAditionalPanel', value);
    },

    savePanelSettings(event): void {

      setTimeout(() => {
        this.setAditionalPanelPreferences(this.showControlsShortcut);
      }, 0);

    },

    hideAditionalPanel(): void {
      this.showControlsShortcut = false;
      this.setAditionalPanelPreferences(false);
    },

    windowIsNarrowEnoughToSetDefaultAditionalPanelVisible(): boolean {
      return window.innerWidth <= 700;
    },

    firstSearch(): void {
      this.searchMovies();
    },

    initiateAditionalPanelSettings(): void {

      if (this.userHasAditionalPanelPreferences()) {
        this.showControlsShortcut = this.userWantsToDisplayAditionalPanel();
      }
      else {
        this.showControlsShortcut = this.windowIsNarrowEnoughToSetDefaultAditionalPanelVisible();
      }

      window.addEventListener('resize', () => {

        if (!this.userHasAditionalPanelPreferences()) {
          this.showControlsShortcut = this.windowIsNarrowEnoughToSetDefaultAditionalPanelVisible();
        }

      });

    },

    userWantsToDisplayAditionalPanel(): boolean {
      const setting = localStorage.getItem('showAditionalPanel');

      switch (setting) {

        case 'true':
          return true;
          break;

        case 'false':
          return false;
          break;

        case null:
          return undefined;
          break;

      }
    },

    async fetchPornstars() {

      const requestData = {

        method: 'GET',
        headers: {
          'X-CSRF-TOKEN': this.csrfToken
        }
      };

      try {
        const response = await fetch('/pornstars/advanced-search/list', requestData);

        if (response.status == 200) {
          let pornstars = await response.json();
          this.$root.$emit('replaceAvailableOptionsForMultiselect', pornstars);
        }
        else {
          this.showNotification(SearchEngineTranslations['fetchingPornstarsFailed'], 'error');
        }
      }
      finally {
        this.fetchingPornstarsInProgress = false;
      }

    },

    pushSelectedOptionListForUser(group: string, propertyName: string, value: any): void {

      const translatedOption: string = this.translator.translate(propertyName);
      let keyValuePair: string;

      switch (group) {

        case 'initialValueIsEmptyString':
          keyValuePair = `${translatedOption} : ${SearchEngineTranslations[propertyName][value]}`;
          break;

        case 'initialValueIsFalse':
          keyValuePair = translatedOption;
          break;

        case 'movieTimeOptions':
          keyValuePair = `${translatedOption} : ${value} ${this.translator.translate('minutes_inflected')}`;
          break;

        case 'movieViewsOptions':
          keyValuePair = `${translatedOption} : ${value}`;
          break;

        case 'pornstarsList':
          keyValuePair = `${translatedOption} : ${value.join(', ')}`;
          break;
      }

      this.selectedOptionsVisibleForUser.push(keyValuePair);
    },

    getSelectedOptions(currentPage: number = 1): QueryParams {

      const selectedOptions: QueryParams = { pornstarsList: [], otherParams: {} };
      this.selectedOptionsVisibleForUser = [];

      SearchEngineVariables.groupNames.forEach(groupName => {
        SearchEngineVariables[groupName].forEach((propertyName: string): void => {

          let selectedValue: any = this[propertyName];

          if (selectedValue) {
            selectedOptions['otherParams'][propertyName] = selectedValue;
            this.pushSelectedOptionListForUser(groupName, propertyName, selectedValue);
          }
        });
      });

      let numberOfSelectedOptions: number = Object.keys(selectedOptions['otherParams']).length;
      let numberOfSelectedPornstars: number = this.pornstarsList.length;

      if (numberOfSelectedPornstars > 0) {
        selectedOptions['pornstarsList'] = this.pornstarsList;
        let pornstarListPropertyName: string = (numberOfSelectedPornstars > 1) ? 'movie_with_following_pornstars' : 'movie_with_pornstar'
        this.pushSelectedOptionListForUser('pornstarsList', pornstarListPropertyName, this.pornstarsList);
      }
      numberOfSelectedOptions += selectedOptions['pornstarsList'].length;

      if (numberOfSelectedOptions === 0) {
        throw new Error('noOptionsHaveBeenSelected');
      }

      selectedOptions['otherParams']['page'] = currentPage;
      return selectedOptions;
    },

    loadMovies(moviesData: MoviesListResponse, currentPage: number = 1): void {
      this.totalMoviesFound = moviesData.totalMovies;

      if (moviesData.totalMovies > 0) {

        if (currentPage === 1) {
          window.scroll(0, 0);
        }

        this.$root.$emit('updateMoviesList', { moviesData, currentPage });
      }
      else{
        this.clearMoviesList();
      }

      this.totalMoviesFound = moviesData.totalMovies;
      this.advancedSearchPanelIsVisible = false;
      
      
    },

    clearMoviesList() : void {
      this.$root.$emit('updateMoviesList', { moviesData : { totalMovies : 0, movies : [] }, currentPage : 0});
    },

    async searchMovies(currentPage: number = 1) {

      try {
        this.fetchingMoviesInProgress = true;

        const requestData: XHRRequestData = {
          method: 'GET',
          headers: {
            'X-CSRF-TOKEN': this.csrfToken
          }
        };

        const query = QueryBuilder.build(this.getSelectedOptions(currentPage));
        const response = await fetch(`/movies/advanced-search?${query}`, requestData);

        switch (response.status) {

          case 200:
            const movies: MoviesListResponse = await response.json();
            this.loadMovies(movies, currentPage);
            break;

          case 429:
            throw new Error('searchHasBenStoppedBecauseThereWereToManyRequests');
            break;

          default:
            throw new Error('unexpectedError');
            break;
        }


      }
      catch (exception) {
        this.showNotification(SearchEngineTranslations[exception.message], 'error');
      }
      finally {
        this.fetchingMoviesInProgress = false;
      }

    },

    resetPanel(event = undefined): void {

      if (event) {
        event.preventDefault();
      }

      SearchEngineVariables['initialValueIsEmptyString'].forEach(propertyName => {
        this[propertyName] = "";
      });

      SearchEngineVariables['initialValueIsFalse'].forEach(propertyName => {
        this[propertyName] = false;
      });

      SearchEngineVariables['initialValueIsZero'].forEach(propertyName => {
        this[propertyName] = 0;
      });

      this.pornstarsList = [];
    }

  },


  mounted() {
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
    this.fetchPornstars();
    this.initiateAditionalPanelSettings();
    this.$root.$on('pageHasBeenSelected', this.searchMovies);
    this.$root.$on('pageHasBeenSelected', this.searchMovies);
  }

});

