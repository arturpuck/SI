<template>
  <div class="user-preview">
    <Avatar></Avatar>
    <span v-text="userLabel" class="user-nickname"></span>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator";
import Avatar from '@jscomponents/user/avatar.vue';

@Options({ name: "UserPreview", components: { Avatar } })
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
