<template>
  <li class="comment-container">
    <div class="user-data">
      <user-preview
        v-bind:user-nickname="userNickname"
        v-bind:authenticated-user="authenticatedUser"
        v-bind:avatar-file-path="avatarFilePath"
      >
      </user-preview>
      <div class="date-conatiner">
        <date-confirmed-icon class="date-confirmed-icon"></date-confirmed-icon>
        <span v-text="addedAgo" class="added-ago"></span>
      </div>
    </div>
    <div v-text="commentBody" class="comment-text"></div>
  </li>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator.js";
import UserPreview from "@jscomponents/user/user_preview.vue";
import DateConfirmedIcon from "@svgicon/date_confirmed_icon";

@Options({ name: "CommentBody", components: { UserPreview, DateConfirmedIcon } })
export default class CommentBody extends Vue {
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

  @Prop({
    type: String,
    required: true,
  })
  readonly userNickname: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly commentBody: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly addedAgo: string;

  private translations = Translator;
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/responsive_icon";

.added-ago {
  @include responsive-font();
  width: max-content;
  color: white;
}

.date-conatiner {
  display: flex;
  padding: 4px;
  @media (max-width: 500px) {
    padding: 4px 4px 4px 10px;
  }
}

.date-icon {
  margin: 0 4px;
  color: white;
  @include responsive-font(1.3vw, 16px, "");
}

.user-data {
  padding: 0.5vw;
  display: flex;
  align-items: center;
  background: #252222;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.comment-text {
  @include responsive-font();
  padding: 1vw;
  background: black;
  color: white;
}

.comment-container {
  min-width: 300px;
  width: 70vw;
  box-shadow: 2px 2px 2px 2px black;
  border-radius: 1vw;
  overflow: hidden;
  margin: 20px auto;
  border: 1px solid gray;
}

.date-confirmed-icon {
  @include responsive-icon();
}
</style>
