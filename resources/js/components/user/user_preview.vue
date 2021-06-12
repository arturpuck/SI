<template>
  <div class="user-preview">
    <img
      v-bind:src="avatarFilePath"
      alt=""
      v-if="avatarFileIsAvailable"
      class="user-image"
    />
    <avatar-icon
      class="unregistered-user-icon"
      v-if="defaultUserImageShouldBeDisplayed"
    ></avatar-icon>
    <span v-text="userLabel" class="user-nickname"></span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AvatarIcon from "@svgicon/avatar_icon.vue";
import Translator from "@jsmodules/translator";

@Component({ components: { AvatarIcon } })
export default class UserPreview extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly userNickname: string;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  readonly authenticatedUser: boolean;

  @Prop({
    type: String,
    required: false,
    default: "",
  })
  readonly avatarFilePath: string;

  private translations = Translator;

  get avatarFileIsAvailable(): boolean {
    return this.avatarFilePath && this.authenticatedUser;
  }

  get defaultUserImageShouldBeDisplayed(): boolean {
    return !this.authenticatedUser || !this.avatarFilePath;
  }

  get userLabel(): string {
    return this.authenticatedUser
      ? this.userNickname
      : `${this.translations.translate("unregistered_user")} - ${this.userNickname}`;
  }
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/responsive_icon";

.unregistered-user-icon {
  fill: white;
  @include responsive-icon(0 7px, 2.3vw, 28px);
}

.user-preview {
  display: inline-flex;
  align-items: center;
  padding: 4px;
  @media (max-width: 500px) {
    border-bottom: 1px solid #5d0e0e;
    width: 100%;
  }
}

.user-nickname {
  @include responsive-font();
  color: white;
}

.user-image {
  display: inline-block;
  min-width: 30px;
  min-height: 30px;
  margin: 0 6px;
  width: 2vw;
  height: 2vw;
  border-radius: 6px;
}
</style>
