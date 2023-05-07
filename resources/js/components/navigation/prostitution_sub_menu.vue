<template>
  <ul
    v-bind:aria-hidden="!visible"
    v-bind:class="{
      'visible-sub-menu': visible,
      'hidden-sub-menu': !visible,
    }"
    class="sub-menu-list prostitution-sub-menu-list"
  >
    <li v-on:click="checkIfUserIsLogedIn" class="sub-menu-list-element intendation-first-level">
      <div class="sub-menu-level-one-item">
        <a class="navbar-link-main-manu" v-bind:href="routesConfig.addAnnouncement">
          <price-list-icon
            class="navbar-icon navbar-icon-outer"
          ></price-list-icon>
          {{ translations["add_notice"] }}
        </a>
      </div>
    </li>
    <li class="sub-menu-list-element intendation-first-level">
      <div class="sub-menu-level-one-item">
        <a class="navbar-link-main-manu" v-bind:href="routesConfig.announcementsList">
          <find-love-icon
            class="navbar-icon navbar-icon-outer"
          ></find-love-icon>
          {{ translations["notices_list"] }}
        </a>
      </div>
    </li>
    <li v-if="authenticated" class="sub-menu-list-element intendation-first-level">
      <div class="sub-menu-level-one-item">
        <a class="navbar-link-main-manu" v-bind:href="routesConfig.myNoticesList">
          <notices-board-icon
            class="navbar-icon navbar-icon-outer"
          ></notices-board-icon>
          {{ translations["my_notices"] }}
        </a>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Translations from "@jsmodules/translations/components/navbar";
import PriceListIcon from "@svgicon/price_list_icon.vue";
import FindLoveIcon from "@svgicon/find_love_icon.vue";
import NoticesBoardIcon from "@svgicon/notices_board_icon.vue";
import RoutesConfig from "@config/paths/routes";
import NotificationFunction from '@jsmodules/notification_function';

export default {
  name: "prostitution-sub-menu",

  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },

    authenticated : {
      type : Boolean,
      required : false,
      default: false
    }
  },

  components: {
    PriceListIcon,
    FindLoveIcon,
    NoticesBoardIcon
  },
  
  data() {
    return {
      routesConfig : RoutesConfig,
      moviesSubMenuIsVisible: false,
      translations: Translations,
    };
  },

  methods: {
    toggleMoviesSubMenu(): void {
      this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
    },

    showNotification : NotificationFunction,

    checkIfUserIsLogedIn(event) : void {
      event.preventDefault();
      if(this.authenticated) {
        window.location.href = this.routesConfig.addAnnouncement;
      } else {
        this.showNotification('you_have_to_be_logged_in_to_add_notice', 'error');
      }
    }
  },
};
</script>
  
<style lang="scss" scoped>
@import "~sass/fonts";
$border-color: black;

@mixin navbar-icon-basic {
  width: 1em;
  height: auto;
}

@mixin navbar-link($alignItems: baseline) {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: $alignItems;
}

.navbar-icon-second-level {
  @include navbar-icon-basic();
  &--colored {
    fill: yellow;
    @include navbar-icon-basic();
  }
}

.hidden-sub-menu {
  max-height: 0;
  transition: none;
}

.prostitution-sub-menu-list {
  left: 23vw;
}

.sub-menu-list {
  position: absolute;
  overflow: hidden;
  display: inline-block;
  top: 100%;
  max-height: 0;
  padding: 0;
  list-style-type: none;
  margin: 0;
  @include responsive-font(1.5vw, 18px, "Aldrich");
  color: white;
  min-width: 140px;
  z-index: 1;
  border-radius: 0 0 8px 8px;
}

.sub-menu-list-element {
  background: linear-gradient(to right, #0a0a0a, #2e2e2d);
  border-bottom: 1px solid $border-color;
  cursor: pointer;
}

.navbar-icon {
  margin: 0 5px;
}

.navbar-icon-outer {
  fill: #eb091c;
  @include navbar-icon-basic();
}

.sub-menu-list-nested-level-two {
  list-style-type: none;
  overflow: hidden;
  padding: 0;
  transition: max-height 0.7s;
}

.visible-sub-menu {
  transition: max-height 1.5s;
  max-height: 1500px;
  box-shadow: 2px 2px 4px 3px black;
}

.navbar-icon-second-level {
  @include navbar-icon-basic();
  &--colored {
    fill: yellow;
    @include navbar-icon-basic();
  }
}

.sub-menu-list-element-intendation-second-level {
  padding: 5px 2px 5px 2vw;
  border-bottom: 1px solid black;
  white-space: nowrap;
  background: linear-gradient(to right, #0a0a0a, #2e2e2d);
  &:hover {
    background: black;
    cursor: pointer;
  }
}

.visible-movies-sub-menu {
  max-height: 500px;
}

.hidden-movies-sub-menu {
  max-height: 0;
}

.sub-menu-level-one-item {
  &:hover {
    background: black;
  }
  padding: 5px 2px 5px 1vw;
}

.sum-menu-list-element:last-child {
  border-radius: 0 0 8px 8px;
}

.navbar-icon {
  margin: 0 5px;
}

.navbar-link-main-manu {
  @include navbar-link(center);
}
</style>
          

          