<template>
  <nav
    id="fixed-authenticated-user-sidebar"
    class="fixed-sidebar authenticated-user-side-bar"
  >
    <ul class="user-sidebar-list">
      <li
        v-on:click="hideSideBar"
        v-bind:title="translations['hide_side_bar_title']"
        class="authenticated-user-sidebar-list-element"
      >
        <phantom-button>
          <angle-top-icon class="authenticated-user-sidebar-icon"></angle-top-icon>
          <span
            v-text="translations['hide_authenticated_user_sidebar_caption']"
            class="sidebar-item-description"
          ></span>
        </phantom-button>
      </li>
      <li
        v-bind:title="translations['show_user_profile_settings_title']"
        class="authenticated-user-sidebar-list-element"
      >
        <a href="/profil/ustawienia" class="sub-menu-link">
          <settings-icon class="authenticated-user-sidebar-icon"></settings-icon>
          <span
            v-text="translations['show_user_profile_settings_caption']"
            class="sidebar-item-description"
          ></span>
        </a>
      </li>
      <li v-on:click="logout" class="authenticated-user-sidebar-list-element">
        <phantom-button>
          <exit-arrow-icon class="authenticated-user-sidebar-icon"></exit-arrow-icon>
          <span
            v-text="translations['logout_caption']"
            class="sidebar-item-description"
          ></span>
        </phantom-button>
        <form
          aria-hidden="true"
          id="logoutForm"
          class="logout-form"
          method="POST"
          action="/wyloguj"
        >
          <input type="hidden" v-bind:value="csrfToken" name="_token" />
        </form>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator.js";
import AngleTopIcon from "@svgicon/angle_top_icon";
import SettingsIcon from "@svgicon/settings_icon";
import ExitArrowIcon from "@svgicon/exit_arrow_icon";
import EventBus from "@jsmodules/event_bus.js";

@Options({
  components: { AngleTopIcon, SettingsIcon, ExitArrowIcon },
  name: "AuthenticatedUserSidebar",
})
export default class AuthenticatedUserSidebar extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly csrfToken: String;

  private translations = Translator.getPackage("authenticated_user_sidebar");

  logout() {
    (<HTMLFormElement>document.getElementById("logoutForm")).submit();
  }

  hideSideBar() {
    EventBus.$emit("hideSideBar");
  }
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/components/side_bar";

.authenticated-user-side-bar {
  right: 0;
  box-shadow: -1px -1px 2px 2px black;
  min-width: min-content;
  @include responsive-font(0.9vw, 12px);
}

.authenticated-user-sidebar-list-element {
  @include sidebar-list-element();
  padding: 4px 0;
  &:hover {
    background: #211e1e;
  }
}

.authenticated-user-sidebar-icon {
  @include responsive-font(1.4vw, 16px, initial);
  color: red;
  height: auto;

  fill: red;
  width: 1em;
}
</style>
