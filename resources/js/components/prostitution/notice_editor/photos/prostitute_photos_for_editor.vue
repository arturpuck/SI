<template>
  <prostitute-photos
    v-on:prostitute-photos-validated="emitSuccessFullValidation"
    class="container-with-decoration"
  >
    <expect-shadow-circle
      v-show="fetchingInProgress"
      v-bind:circle-label="Translations.setting_in_progress"
    ></expect-shadow-circle>
    <strong
      v-text="Translations.two_types_of_photo_edition_is_available"
      class="important-notice centered-important"
    ></strong>
    <div v-text="Translations.prolonging_announcement" class="update-type"></div>
    <p
      v-text="Translations.if_you_want_to_prolong_your_prostitution_announcement"
      class="photo-edition-type-description"
    ></p>
    <div v-text="Translations.updating_until_expiration_date" class="update-type"></div>
    <p
      v-text="Translations.if_you_dont_want_to_prolong_your_prostitution_announcement"
      class="photo-edition-type-description"
    ></p>
    <div class="buttons-container">
      <button
        v-on:click="generateNewToken"
        v-text="Translations.generate_new_token"
        class="token-assignement-button new-token-button"
      ></button>
      <button
        v-on:click="assignOldToken"
        v-text="Translations.use_old_token"
        class="token-assignement-button old-token-button"
      ></button>
    </div>
    <div class="photos-awaiting-validation-notice" v-if="anyPhotoAwaitsValidation">
      <strong
        class="photos-awaiting-validation-text"
        v-text="Translations.these_photos_currently_await_validation"
      ></strong>
    </div>
    <div class="token-info">
      <span v-text="tokenLabel"></span> :
      <strong class="token" v-text="token"></strong>
    </div>
  </prostitute-photos>
</template>

<script lang="ts">
import Translations from "@js/modules/translations/components/prostitution/prostitution_offer_photos";
import ProstitutePhotos from "@js/components/prostitution/notice_editor/photos/prostitute_photos.vue";
import { TokenType } from "@js/enum/token_type";
import TokenSetter from "@mixins/components/prostitute_announcement_creator/token_setter";
import Routes from "@config/paths/routes";
import PhotoTokenRequest from "@js/interfaces/prostitution/PhotoTokenRequest";
import TokenErrorProcessor from "@mixins/components/prostitute_announcement_creator/token_error_processor";
import ExpectShadowCircle from "@jscomponents/decoration/expect_shadow_circle.vue";
import { mapWritableState } from "pinia";
import announcementDetails from "@jscomponents/prostitution/notice_editor/announcement_details";

export default {
  name: "prostitute-photos-for-editor",

  emits: ["validated"],

  mixins: [TokenSetter, TokenErrorProcessor],

  props: {
    anyPhotoAwaitsValidation: {
      required: false,
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      Translations,
      showOldToken: true,
      oldToken: undefined,
      newToken: undefined,
      csrfToken: undefined,
      fetchingInProgress: false,
      photosFirstModification: true,
    };
  },

  watch: {
    photos() {
      if (!this.modifiedFields.includes("photos") && !this.photosFirstModification) {
        this.modifiedFields.push("photos");
      }
      this.photosFirstModification = false;
    },
  },

  methods: {
    addEventListeners(): void {
      this.emitter.on(
        "setProstitutePhotoToken",
        (oldToken) => (this.oldToken = oldToken)
      );
      this.emitter.on("prostitutePhotosForEditorValidator", () =>
        this.emitter.emit("prostitutePhotosValidator")
      );
    },

    emitSuccessFullValidation(): void {
      this.$emit("validated");
    },

    showFetchingDecoration(): void {
      this.fetchingInProgress = true;
    },

    hideFetchingDecoration(): void {
      this.fetchingInProgress = false;
    },

    async generateNewToken() {
      this.showFetchingDecoration();
      const csrfToken = this.csrfToken;
      const photoTokenRequest: PhotoTokenRequest = {
        URL: Routes.photoToken,
        tokenType: TokenType.New,
        csrfToken,
      };
      await this.managePhotoTokenInSession(photoTokenRequest).then(
        this.setNewTokenForUI,
        this.processTokenError
      );
      this.hideFetchingDecoration();
    },

    setNewTokenForUI(newToken: string): void {
      this.newToken = newToken;
      this.showOldToken = false;
      this.modifiedFields.push("token");
    },

    setTokenToOld(): void {
      this.showOldToken = true;
      this.modifiedFields.push("token");
    },

    async assignOldToken() {
      if (!this.showOldToken) {
        const csrfToken = this.csrfToken;
        const photoTokenRequest: PhotoTokenRequest = {
          URL: Routes.photoToken,
          tokenType: TokenType.LastGenerated,
          csrfToken,
        };

        await this.managePhotoTokenInSession(photoTokenRequest).then(
          this.setTokenToOld,
          () => this.showErrorMessageNotification("error_occured_while_token_processing")
        );
      }
    },
  },

  components: {
    ProstitutePhotos,
    ExpectShadowCircle,
  },

  computed: {
    token(): string {
      return this.showOldToken ? this.oldToken : this.newToken;
    },

    tokenLabel(): string {
      return this.showOldToken ? Translations.old_token : Translations.new_token;
    },

    ...mapWritableState(announcementDetails, ["photos", "modifiedFields"]),
  },

  mounted() {
    this.addEventListeners();
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.photos-awaiting-validation-notice {
  text-align: center;
  padding: 5px;
}

.photos-awaiting-validation-text {
  color: #f70b56;
  @include responsive-font(1.4vw, 20px);
}
.important-notice {
  color: red;
}

.container-with-decoration {
  position: relative;
}

.buttons-container {
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
}

.old-token-button {
  background: linear-gradient(#0fe00b, #054004);
  &:hover {
    filter: drop-shadow(0 0 3px #34ef0c);
  }
}

.new-token-button {
  background: linear-gradient(to bottom, #eb2d6a, #a50d37);
  &:hover {
    filter: drop-shadow(0 0 3px #e61a1a);
  }
}

.token-assignement-button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 8px;
  color: white;
  @include responsive-font();
  &:active {
    transform: scale(1.1);
  }
}

.centered-important {
  display: block;
  text-align: center;
  @include responsive-font(1.4vw, 19px);
  padding: 6px;
}

.photo-edition-type-description {
  margin: 0;
  padding: 10px;
  color: white;
  @include responsive-font();
  text-align: left;
}

.update-type {
  @include responsive-font(1.5vw, 20px);
  color: white;
  padding: 0 0 0 5px;
  font-weight: bold;
}

.token-info {
  text-align: center;
  padding: 5px;
  @include responsive-font(1.5vw, 20px);
  background: #0d9312;
}

.token {
  letter-spacing: 0.3em;
}
</style>
