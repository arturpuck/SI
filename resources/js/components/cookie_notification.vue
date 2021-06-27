<template>
  <section v-show="showNotification" class="cookies-notification">
    <header
      class="cookies-notification__header"
      v-text="translations['cookieNotificationHeader']"
    ></header>
    <p v-text="translations['cookieNotificationBody']"></p>
    <accept-button
      v-on:click.native="acceptCookies"
      class="cookies-notification__accept-button"
    >
      {{ translations["acceptButtonCaption"] }}</accept-button
    >
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Translations from "@jsmodules/translations/components/cookie_notification";
import AcceptButton from "@jscomponents/form_controls/accept_button.vue";

@Component({ components: { AcceptButton } })
export default class CookieNotification extends Vue {
  private translations = Translations;
  private showNotification = true;

  acceptCookies(): void {
    localStorage.setItem("cookiesAccepted", "yes");
    this.showNotification = false;
  }
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.cookies-notification {
  min-width: 250px;
  width: 20vw;
  position: fixed;
  right: 10px;
  bottom: 10px;
  animation: fadein 1.5s;
  z-index: 5;
  @include responsive-font(1vw, 14px, "Exo 2", 1400px);
  border-radius: 5px;
  background: #211f20;
  color: white;
  padding: 5px;
  border: 1px solid silver;
  box-shadow: 2px 2px 2px 2px black;

  &__header {
    text-align: center;
    color: #ff074a;
  }

  &__accept-button {
    @include responsive-font();
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
