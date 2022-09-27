<template>
  <div>
    <nav v-click-away="handleClickoutsideNavbar" class="page-navigation">
      <ul class="navigation-list">
        <li
          v-bind:aria-hidden="!contentSideBarIsVisible"
          class="navigation-element-main contenerized-navbar-element"
        >
          <roll-down-button
            v-bind:class="{
              'visible-sidebar-button': !contentSideBarIsVisible,
              'hidden-sidebar-button': contentSideBarIsVisible,
            }"
            v-on:click="showContentSideBar"
            v-bind:caption="translations['showContentSideBarButtonCaption']"
            v-bind:title="translations['showContentSideBarButtonTitle']"
            class="show-side-bar-button--left"
          ></roll-down-button>
        </li>
        <li class="navigation-element-main">
          <a title="Strona główna" href="/" class="logo-link">
            <empire-logo />
          </a>
        </li>
        <li
          v-on:click="togglePornSubMenu"
          v-on:mouseenter="showPornSubMenu"
          class="navigation-element-main navigation-element-main-has-content"
        >
          <adult-icon
            class="navbar-icon navbar-icon-outer"
            v-show="!pornSubMenuIsVisible"
          ></adult-icon>
          <arrow-up-icon
            v-show="pornSubMenuIsVisible"
            class="navbar-icon navbar-icon-outer"
          >
          </arrow-up-icon>
          <phantom-button class="phantom-button"> Porno </phantom-button>
        </li>
        <li class="navigation-element-main navigation-element-main-has-content">
          <add-file-icon class="navbar-icon navbar-icon-outer"></add-file-icon>
          <a v-bind:href="routes.newsRoute" v-text="translations['current_news']" class="navbar-link-main-manu"></a>
        </li>
        <li
          v-if="!userIsAuthenticated"
          class="navigation-element-main register-selection"
        >
          <a class="navbar-link-main-manu" href="/rejestruj">
            <signup-icon class="navbar-icon navbar-icon-outer"></signup-icon>
            {{translations['register']}}
          </a>
        </li>
        <li
          v-if="!userIsAuthenticated"
          v-on:click="toggleLoginPanel"
          class="navigation-element-main"
        >
          <div class="login-button-container">
            <phantom-button class="navbar-phantom-button">
              <enter-icon class="navbar-icon navbar-icon-outer"></enter-icon>
              <span class="login-description">Loguj</span>
            </phantom-button>
          </div>
        </li>
        <li
          v-if="userIsAuthenticated"
          class="navigation-element-main navbar-element-user"
        >
          <span v-text="userName" class="user-nick"></span>
          <img
            v-bind:src="avatarFilePath"
            v-bind:alt="userAvatarDescription"
            class="user-avatar"
          />
          <roll-down-button
            v-bind:class="{
              'visible-sidebar-button': !authenticatedUserSideBarIsVisible,
              'hidden-sidebar-button': authenticatedUserSideBarIsVisible,
            }"
            v-on:click="toggleAuthenticatedUserSideBar"
            v-bind:caption="translations['showAuthenticatedUserSidebarCaption']"
            v-bind:title="translations['showAuthenticatedUserSideBarTitle']"
            class="show-side-bar-button--right"
          ></roll-down-button>
        </li>
      </ul>
      <porn-sub-menu v-bind:porn-sub-menu-is-visible="visible"></porn-sub-menu>
    </nav>
    <authenticated-user-sidebar
      v-if="userIsAuthenticated"
      v-bind:aria-hidden="!authenticatedUserSideBarIsVisible"
      v-bind:class="{
        'visible-sidebar': authenticatedUserSideBarIsVisible,
        'hidden-sidebar': !authenticatedUserSideBarIsVisible,
      }"
      v-bind:csrf-token="csrfToken"
    />
    <content-sidebar
      v-bind:class="{
        'visible-sidebar': contentSideBarIsVisible,
        'hidden-sidebar': !contentSideBarIsVisible,
      }"
    />
    <login-form v-on:hide="toggleLoginPanel" v-if="loginPanelShouldBeVisible"></login-form>
    <categories-list v-on:hide="hideCategories" v-if="showCategories"></categories-list>
  </div>
</template>

<script>
import { directive } from "vue3-click-away";
import AdultIcon from "@svgicon/adult_icon";
import ArrowUpIcon from "@svgicon/arrow_up_icon";
import StarFullIcon from "@svgicon/star_full_icon";
import ExpandAllIcon from "@svgicon/expand_all_icon";
import MagnifierIcon from "@svgicon/magnifier_icon";
import SignupIcon from "@svgicon/signup_icon";
import EnterIcon from "@svgicon/enter_icon";
import AvatarIcon from "@svgicon/avatar_icon";
import SideBarVisibilityMixin from "@js/mixins/side_bar_visibility";
import RollDownButton from "@jscomponents/form_controls/roll_down_button";
import Translations from "@jsmodules/translations/components/navbar";
import AvatarConfig from "@config/paths/avatar";
import OhIcon from "@svgicon/oh_icon";
import { defineAsyncComponent } from 'vue';
import RoutesConfig from "@config/paths/routes";
import AddFileIcon from "@svgicon/add_file_icon";
import PornSubMenu from "@jscomponents/navigation/porn_sub_menu"

const CategoriesList = defineAsyncComponent(() => import("@jscomponents/categories_list"));
const LoginForm = defineAsyncComponent(() => import("@jscomponents/user/login_form.vue"));

export default {
  name: "navbar",

  directives: { ClickAway : directive},

  mixins: [SideBarVisibilityMixin],

  props: {
    userId: {
      type: Number,
      required: false,
      default: undefined,
    },

    userName: {
      required: false,
      type: String,
      default: "",
    },

    initialAvatarFileName: {
      required: false,
      type: String,
      default: AvatarConfig.defaultAvatarFileName,
    },
  },
  data() {
    return {
      pornSubMenuIsVisible: false,
      moviesSubMenuIsVisible: false,
      userWantsToLogIn: false,
      csrfToken: "",
      animatePanel: false,
      userIsAuthenticated: undefined,
      authenticatedUserSideBarIsVisible: true,
      contentSideBarIsVisible: false,
      showCategories: false,
      translations: Translations,
      avatarFileName : '',
      routes : RoutesConfig
    };
  },

  components: {
    CategoriesList,
    AdultIcon,
    ArrowUpIcon,
    StarFullIcon,
    FolderIcon,
    ExpandAllIcon,
    HappyTongueIcon,
    MagnifierIcon,
    SignupIcon,
    EnterIcon,
    AvatarIcon,
    RollDownButton,
    DictionaryIcon,
    LoginForm,
    OhIcon,
    AddFileIcon,
    PornSubMenu
  },

  methods: {

    resetAvatar(){
       this.avatarFileName = AvatarConfig.defaultAvatarFileName;
    },
   
    showCategoriesList() {
      this.resetNavbar();
      this.showCategories = true;
    },

    hideCategories() {
      this.showCategories = false;
    },

    showContentSideBar() {
      this.contentSideBarIsVisible = true;
    },

    hideAuthenticatedUserSideBar() {
      this.authenticatedUserSideBarIsVisible = false;
      this.setSideBarVisibilityInformation(false, "authenticatedUserSideBar");
    },

    hideContentSideBar() {
      this.contentSideBarIsVisible = false;
    },

    toggleAuthenticatedUserSideBar() {
      this.authenticatedUserSideBarIsVisible = !this.authenticatedUserSideBarIsVisible;
      this.setSideBarVisibilityInformation(
        this.authenticatedUserSideBarIsVisible,
        "authenticatedUserSideBar"
      );

      this.emitter.emit(
        "sideBarVisibilityChanged",
        this.authenticatedUserSideBarIsVisible
      );
    },

    setSideBarVisibilityInformation(hidden, sideBarType) {
      const visible = hidden ? "visible" : "hidden";
      localStorage.setItem(sideBarType, visible);
    },

    hideAllSecondLevelSubMenus() {
      this.moviesSubMenuIsVisible = false;
    },

    togglePornSubMenu() {
      this.pornSubMenuIsVisible = !this.pornSubMenuIsVisible;
      this.hideAllSubMenusExcept("pornSubMenuIsVisible");
      this.hideAllSecondLevelSubMenus();
    },

    showPornSubMenu(event) {
      this.pornSubMenuIsVisible = true;
      this.hideAllSubMenusExcept("pornSubMenuIsVisible");
    },

    resetNavbar() {
      this.hideAllSubMenusExcept();
      this.hideAllSecondLevelSubMenus();
    },

    toggleLoginPanel() {
      this.userWantsToLogIn = !this.userWantsToLogIn;
    },

    hideAllSubMenusExcept(except = "") {
      const subMenusControlVariableNames = ["pornSubMenuIsVisible"];

      for (const variableName of subMenusControlVariableNames) {
        if (variableName != except) {
          this[variableName] = false;
        }
      }
    },

    handleClickoutsideNavbar() {
      if (this.anySubMenuIsVisible) {
        this.resetNavbar();
      }
    },
  },

  computed: {
    userHasCustomAvatar(){
      return this.avatarFileName != AvatarConfig.defaultAvatarFileName;
    },

    anySubMenuIsVisible() {
      return this.pornSubMenuIsVisible;
    },

    avatarFilePath() {
      return `${AvatarConfig.avatarRootDirectory}${this.avatarFileName}`;
    },

    userAvatarDescription() {
      return this.userHasCustomAvatar ? `${this.translations['user_avatar_description']} : ${this.userName}` : 
       this.translations['default_avatar'];
    },

    loginPanelShouldBeVisible() {
      return !this.userIsAuthenticated && this.userWantsToLogIn;
    }
  },

  created() {
    this.userIsAuthenticated = Boolean(this.userId);

    if (this.userIsAuthenticated) {
      this.authenticatedUserSideBarIsVisible = this.isSideBarVisible(
        "authenticatedUserSideBar"
      );
    }
  },

  mounted() {
    this.avatarFileName = this.initialAvatarFileName;
    this.emitter.on("hideSideBar", this.hideAuthenticatedUserSideBar);
    this.emitter.on("hideContentBar", this.hideContentSideBar);
    this.emitter.on("showMoviesCategories", this.showCategoriesList);
    this.emitter.on('resetAvatar', this.resetAvatar)
    this.csrfToken = document.getElementById("csrf-token").content; 
  },

};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/components/navbar/show_side_bar_button";
@import "~sass/components/navbar/top_menu";

.show-side-bar-button {
  &--left {
    @include show-sidebar-button();
    left: 0;
  }

  &--right {
    @include show-sidebar-button();
    right: 0;
  }
}

.phantom-text {
  position: absolute;
  top: -9999px;
  left: 0;
}

.remember-me-description {
  color: white;
  @include responsive-font();
}

.labeled-checkbox-container {
  display: block;
  width: 95%;
  margin: 4px auto 1px auto;
}

.labeled-checkbox-description {
  color: white;
}

.login-button-container {
  height: 100%;
}

@media (max-width: 540px) {
  .navigation-element-main-has-content {
    display: none;
  }
}

@media (min-width: 541px) {
  .show-side-bar-button--left {
    display: none;
  }
}
</style>
