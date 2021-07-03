<template>
  <div>
    <nav v-on-clickaway="handleClickoutsideNavbar" class="page-navigation">
      <ul class="navigation-list">
        <li
          v-bind:aria-hidden="!contentSideBarIsVisible"
          v-on:click="showContentSideBar"
          class="navigation-element-main contenerized-navbar-element"
        >
          <button
            title="rozwiń menu boczne"
            v-bind:class="{ 'visible-sidebar-button': !contentSideBarIsVisible }"
            class="show-sidebar-button show-content-side-bar-button"
          >
            <span
              class="fas fa-angle-down show-sidebar-button-decoration show-sidebar-button-element"
            ></span>
            <span class="phantom-text">rozwiń menu boczne</span>
          </button>
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
            class="fas navbar-icon navbar-icon-outer fa-arrow-up"
          >
          </arrow-up-icon>
          <phantom-button class="phantom-button"> Porno </phantom-button>
        </li>
        <li
          v-if="!userIsAuthenticated"
          class="navigation-element-main register-selection"
        >
          <a class="navbar-link-main-manu" href="/rejestruj">
            <signup-icon class="navbar-icon navbar-icon-outer"></signup-icon>
            Rejestruj
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
          v-on:click="toggleAuthenticatedUserSideBar"
          class="navigation-element-main navbar-element-user"
        >
          <phantom-button
            class="show-user-sidebar-button"
            label="rozwiń menu użytkownika"
          >
            <avatar-icon
              v-if="!avatarFileName"
              class="navbar-icon navbar-icon-outer"
            ></avatar-icon>
            <span v-text="userName" class="user-nick"></span>
            <img
              v-if="avatarFileName"
              v-bind:src="avatarFilePath"
              v-bind:alt="userAvatarDescription"
              class="user-avatar"
            />
          </phantom-button>
        </li>
      </ul>
      <ul
        v-bind:aria-hidden="!pornSubMenuIsVisible"
        v-bind:class="{
          'visible-sub-menu': pornSubMenuIsVisible,
          'hidden-sub-menu': !pornSubMenuIsVisible,
        }"
        class="sub-menu-list porn-sub-menu-list"
      >
        <li class="sub-menu-list-element intendation-first-level">
          <div v-on:click="toggleMoviesSubMenu" class="sub-menu-level-one-item">
            <movie-media-player-icon
              v-show="!moviesSubMenuIsVisible"
              class="navbar-icon navbar-icon-outer"
            >
            </movie-media-player-icon>

            <arrow-up-icon
              v-show="moviesSubMenuIsVisible"
              class="navbar-icon navbar-icon-outer"
            ></arrow-up-icon>
            <phantom-button> Filmy </phantom-button>
          </div>
        </li>
        <li>
          <ul
            v-bind:aria-hidden="!moviesSubMenuIsVisible"
            class="sub-menu-list-nested-level-two"
            v-bind:class="{
              'visible-movies-sub-menu': moviesSubMenuIsVisible,
              'hidden-movies-sub-menu': !moviesSubMenuIsVisible,
            }"
          >
            <li
              v-on:click="showCategoriesList"
              class="sub-menu-list-element-intendation-second-level"
            >
              <folder-icon class="navbar-icon navbar-icon-second-level"></folder-icon>
              Kategorie
            </li>
            <li class="sub-menu-list-element-intendation-second-level">
              <a class="navbar-link-main-manu" href="/filmy/najnowsze/strona/1">
                <expand-all-icon
                  class="navbar-icon navbar-icon-second-level--colored"
                ></expand-all-icon>
                Najnowsze
              </a>
            </li>
            <li class="sub-menu-list-element-intendation-second-level">
              <a class="navbar-link-main-manu" href="/filmy/najpopularniejsze/strona/1">
                <happy-tongue-icon
                  class="navbar-icon navbar-icon-second-level--colored"
                ></happy-tongue-icon>
                Najpopularniejsze
              </a>
            </li>
            <li class="sub-menu-list-element-intendation-second-level">
              <a class="navbar-link-main-manu" href="/filmy/wyszukiwanie-zaawansowane">
                <magnifier-icon
                  class="navbar-icon navbar-icon-second-level--colored"
                ></magnifier-icon>
                Szukanie zaawansowane
              </a>
            </li>
          </ul>
        </li>
        <li class="sub-menu-list-element intendation-first-level">
          <div class="sub-menu-level-one-item">
            <a class="navbar-link-main-manu" href="/gwiazdy-porno/lista">
              <star-full-icon class="navbar-icon navbar-icon-outer"></star-full-icon>
              Gwiazdy porno
            </a>
          </div>
        </li>
      </ul>
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
    <div
      v-if="!userIsAuthenticated"
      v-show="loginPanelIsVisible"
      class="login-form-container"
    >
      <form
        action="/login"
        method="POST"
        id="login-form"
        v-bind:class="{ 'visible-login-form': animatePanel }"
        class="login-form"
      >
        <header class="login-panel-toolbar">
          <span class="login-info">Zaloguj się do Sex-Imperium</span>
          <button-close
            v-on:click.native="toggleLoginPanel"
            title="Zamknij okno logowania"
            aria-label="Zamknij okno logowania"
          ></button-close>
        </header>
        <input v-bind:value="csrfToken" type="hidden" name="_token" />
        <label for="login" class="main-panel-label">Email lub login</label>
        <text-input-combo
          v-bind:input-is-required="true"
          input-id="login"
          inputType="text"
          name="login-or-email"
        >
        </text-input-combo>
        <label for="password" class="main-panel-label">Hasło</label>
        <text-input-combo
          v-bind:input-is-required="true"
          input-id="password"
          inputType="password"
          name="password"
        >
        </text-input-combo>
        <labeled-checkbox class="remember-me-checkbox" name="remember">
          Zapamiętaj mnie
        </labeled-checkbox>
        <submit-button>Zaloguj</submit-button>
        <a href="/haslo/resetuj/wyslij-link" class="forgot-password-link"
          >Zapomniałem hasła</a
        >
      </form>
    </div>
    <categories-list v-on:hide="hideCategories" v-if="showCategories"></categories-list>
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";
import AdultIcon from "@svgicon/adult_icon";
import ArrowUpIcon from "@svgicon/arrow_up_icon";
import MovieMediaPlayerIcon from "@svgicon/movie_media_player_icon";
import StarFullIcon from "@svgicon/star_full_icon";
import FolderIcon from "@svgicon/folder_icon";
import ExpandAllIcon from "@svgicon/expand_all_icon";
import HappyTongueIcon from "@svgicon/happy_tongue_icon";
import MagnifierIcon from "@svgicon/magnifier_icon";
import SignupIcon from "@svgicon/signup_icon";
import EnterIcon from "@svgicon/enter_icon";
import AvatarIcon from "@svgicon/avatar_icon";

export default {
  name: "navbar",

  directives: { onClickaway },

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

    avatarFileName: {
      required: false,
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pornSubMenuIsVisible: false,
      moviesSubMenuIsVisible: false,
      loginPanelIsVisible: false,
      csrfToken: "",
      animatePanel: false,
      userIsAuthenticated: undefined,
      authenticatedUserSideBarIsVisible: true,
      contentSideBarIsVisible: true,
      showCategories: false,
    };
  },

  components: {
    "categories-list": () => import("@jscomponents/categories_list.vue"),
    AdultIcon,
    ArrowUpIcon,
    MovieMediaPlayerIcon,
    StarFullIcon,
    FolderIcon,
    ExpandAllIcon,
    HappyTongueIcon,
    MagnifierIcon,
    SignupIcon,
    EnterIcon,
    AvatarIcon,
  },

  methods: {
    showCategoriesList() {
      this.resetNavbar();
      this.showCategories = true;
    },

    hideCategories() {
      this.showCategories = false;
    },

    showContentSideBar() {
      this.contentSideBarIsVisible = true;
      this.setSideBarVisibilityInformation(true, "contentSideBar");
    },

    hideAuthenticatedUserSideBar() {
      this.authenticatedUserSideBarIsVisible = false;
      this.setSideBarVisibilityInformation(false, "authenticatedUserSideBar");
    },

    hideContentSideBar() {
      this.contentSideBarIsVisible = false;
      this.setSideBarVisibilityInformation(false, "contentSideBar");
    },

    toggleAuthenticatedUserSideBar() {
      this.authenticatedUserSideBarIsVisible = !this.authenticatedUserSideBarIsVisible;
      this.setSideBarVisibilityInformation(
        this.authenticatedUserSideBarIsVisible,
        "authenticatedUserSideBar"
      );

      this.$root.$emit(
        "sideBarVisibilityChanged",
        this.authenticatedUserSideBarIsVisible
      );
    },

    setSideBarVisibilityInformation(hidden, sideBarType) {
      const visible = hidden ? "visible" : "hidden";
      localStorage.setItem(sideBarType, visible);
    },

    isSideBarVisible(sideBarType) {
      return localStorage.getItem(sideBarType) !== "hidden";
    },

    hideAllSecondLevelSubMenus() {
      this.moviesSubMenuIsVisible = false;
    },

    togglePornSubMenu() {
      this.pornSubMenuIsVisible = !this.pornSubMenuIsVisible;
      this.hideAllSubMenusExcept("pornSubMenuIsVisible");
      this.hideAllSecondLevelSubMenus();
    },

    toggleMoviesSubMenu() {
      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
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
      this.loginPanelIsVisible = !this.loginPanelIsVisible;
      setTimeout(() => (this.animatePanel = !this.animatePanel), 300);
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
    anySubMenuIsVisible() {
      return this.pornSubMenuIsVisible;
    },

    avatarFilePath() {
      return `/images/decoration/users/avatars/${this.avatarFileName}`;
    },

    userAvatarDescription() {
      return `${this.translator.translate("user_avatar_description")} : ${this.userName}`;
    },
  },

  created() {
    this.userIsAuthenticated = Boolean(this.userId);

    if (this.userIsAuthenticated) {
      this.authenticatedUserSideBarIsVisible = this.isSideBarVisible(
        "authenticatedUserSideBar"
      );
    }
    this.contentSideBarIsVisible = this.isSideBarVisible("contentSideBar");
  },

  mounted() {
    this.csrfToken = document.getElementById("csrf-token").content;
    this.$root.$on("hideSideBar", this.hideAuthenticatedUserSideBar);
    this.$root.$on("hide-content-bar", this.hideContentSideBar);
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/components/login_panel";
@import "~sass/components/navbar/show_side_bar_button";
@import "~sass/components/navbar/top_menu";

.remember-me-checkbox {
  color: white;
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

.main-panel-label {
  display: block;
  text-align: center;
  padding: 4px;
  @include responsive-font(1.3vw, 18px);
  color: white;
}

.forgot-password-link {
  display: block;
  padding: 4px;
  text-align: center;
  color: white;
  text-decoration: none;
  @include responsive-font(1.2vw, 17px);
  &:hover {
    text-decoration: underline;
  }
  border-radius: 0 0 7px 7px;
  background: #242229;
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
  .show-content-side-bar-button {
    display: none;
  }
}
</style>
