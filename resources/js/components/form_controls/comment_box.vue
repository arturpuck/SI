<template>
  <div class="comment-container">
    <div v-if="authenticatedUser" class="user-nickname-label">
      <user-preview
        v-bind:user-nickname="authenticatedUserNickname"
        v-bind:authenticated-user="true"
        v-bind:avatar-file-path="avatarFilePath"
      >
      </user-preview>
      <button v-on:click="send" class="add-button">
        <span v-text="translator.translate('add')" class="add-button-description"></span>
        <add-plus-icon class="add-comment-decoration"></add-plus-icon>
      </button>
    </div>
    <label v-if="!authenticatedUser" class="user-nickname-label">
      <avatar-icon class="nickname-decoration"></avatar-icon>
      <span
        v-text="unauthenticatedUserNicknameDescription"
        class="unauthenticated-user-nickname-description"
      ></span>
      <input
        v-on:input="emitUserNickName"
        v-on:blur="emitUserNickName"
        v-model="unauthenticatedUserNickName"
        type="text"
        class="unauthenticated-user-nickname"
      />
      <button v-on:click="send" class="add-button">
        <span v-text="translator.translate('add')" class="add-button-description"></span>
        <add-plus-icon class="add-comment-decoration"></add-plus-icon>
      </button>
    </label>
    <div class="comment-background">
      <label class="blank-label">
        <span v-text="placeholderText" class="comment-description"></span>
        <textarea
          v-on:paste="processUserComment"
          v-on:keyup.enter="send"
          v-bind:style="{ height: textAreaHeightCSS, padding: paddingCSS }"
          v-bind:placeholder="placeholderText"
          ref="comment_textarea"
          v-on:input="processUserComment"
          v-on:blur="emitCommentText"
          v-model="userComment"
          class="comment-body"
          rows="1"
        ></textarea>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator.js";
import UserPreview from "@jscomponents/user/user_preview.vue";
import AvatarIcon from "@svgicon/avatar_icon.vue";
import Comment from "@interfaces/Comment";
import AddPlusIcon from "@svgicon/add_plus_icon.vue";

@Component({ components: { UserPreview, AvatarIcon, AddPlusIcon } })
export default class CommentBox extends Vue {
  @Prop({
    type: Boolean,
    default: false,
  })
  readonly authenticatedUser: Boolean;

  @Prop({
    type: String,
    required: false,
    default: "",
  })
  readonly avatarFilePath: String;

  @Prop({
    type: String,
    required: false,
  })
  readonly authenticatedUserNickname: String;

  private translator = null;
  private unauthenticatedUserNickName: string = "";
  private userComment: string = "";
  private textAreaHeightCSS: string = null;
  private paddingCSS: string = "2px";

  emitUserNickName() {
    this.$emit("nicknameInput", this.unauthenticatedUserNickName);
  }

  getCommentContentHeight(): number {
    return (<HTMLElement>this.$refs.comment_textarea).scrollHeight;
  }

  processUserComment() {
    this.$emit("commentInput", this.userComment);

    setTimeout(() => {
      this.textAreaHeightCSS = "auto";
      this.paddingCSS = "0";
      this.paddingCSS = "2px";
      this.textAreaHeightCSS = `${this.getCommentContentHeight()}px`;
    }, 0);
  }

  emitCommentText() {
    this.$emit("commentInput", this.userComment);
  }

  get unauthenticatedUserNicknameDescription(): string {
    return `${this.translator.translate("nickname")} :`;
  }

  get placeholderText(): string {
    return this.translator.translate("comment_text");
  }

  send() {
    const commentData: Comment = {
      userNickname: this.unauthenticatedUserNickName,
      body: this.userComment,
    };

    this.$emit("send", commentData);
  }

  resetCommentBox() {
    this.userComment = "";
    this.unauthenticatedUserNickName = "";
  }

  created() {
    this.translator = Translator;
    this.$root.$on("resetCommentBox", this.resetCommentBox);
  }

  mounted() {
    this.textAreaHeightCSS = "calc(1.4em + 6px)";
  }
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/responsive_icon";

.empty-avatar-decoration {
  @include responsive-font(1.3vw, 16px, "");
  color: crimson;
  margin: 0 5px;
}

.authenticated-user-nickname {
  white-space: nowrap;
  overflow: hidden;
  flex-grow: 100;
  @include responsive-font(1.3vw, 16px);
  color: white;
}

.user-avatar {
  width: 1.8vw;
  height: 1.8vw;
  margin: 0 4px;
  border-radius: 2px;
  border-radius: 30%;
  @media (max-width: 1200px) {
    width: 30px;
    height: 30px;
  }
}

.add-comment-decoration {
  margin: 0 4px;
  width: 1em;
  height: auto;
  fill: white;
}

.add-button {
  background: linear-gradient(#11ea11, #205a07);
  border-radius: 0.7vw;
  border: none;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 5px;
  padding: 0.3vw;
  color: white;
  outline: none;
  @include responsive-font();
  cursor: pointer;
  &:active {
    transform: scale(1.05);
  }
  &:hover {
    background: linear-gradient(#da3232, #3e0606);
  }
}

.blank-label {
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
}

.comment-description {
  position: absolute;
  top: -9999px;
  left: 0;
  font-size: 2px;
}

.comment-background {
  padding: 7px;
  background: black;
  border-radius: 0 0 1vw 1vw;
}

.unauthenticated-user-nickname {
  @include responsive-font(1.3vw, 16px);
  flex-basis: 1%;
  background: #212120;
  border-radius: 0.5vw;
  border: 1px solid transparent;
  color: white;
  flex-grow: 100;
  outline: none;
  min-width: 0;
  &:focus {
    border: 1px solid #cb425f;
  }
}

.unauthenticated-user-nickname-description {
  @include responsive-font(1.3vw, 16px);
  line-height: 1.5em;
  padding-right: 7px;
  white-space: nowrap;
}

.comment-container {
  font-size: 0;
  width: 40vw;
  min-width: 320px;
  margin: 10px auto;
  border: 1px solid gray;
  border-radius: 1vw;
  box-shadow: 2px 2px 2px 2px black;
}

.user-nickname-label {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: white;
  border-radius: 1vw 1vw 0 0;
  padding: 8px 5px 0;
}

.nickname-decoration {
  @include responsive-icon(0 5px, 2.3vw, 28px);
  fill: white;
}

.comment-body {
  width: 100%;
  background: #212120;
  border-radius: 0.5vw;
  line-height: 1.4em;
  border: 1px solid transparent;
  outline: none;
  resize: none;
  overflow: hidden;
  color: white;
  @include responsive-font(1.3vw, 16px);
  &:focus {
    border: 1px solid #cb425f;
  }
}
</style>
