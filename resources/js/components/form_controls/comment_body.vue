<template>
  <section v-bind:style="sizeStyleObject" class="comment-container">
    <div class="actuall-comment">
      <div class="user-data">
        <user-preview
          v-bind:user-nickname="userNickname"
          v-bind:authenticated-user="addedByAuthenticatedUser"
          v-bind:avatar-file-path="avatarFilePath"
        >
        </user-preview>
        <div class="date-conatiner">
          <date-confirmed-icon
            class="date-confirmed-icon"
          ></date-confirmed-icon>
          <span v-text="addedAgo" class="added-ago"></span>
        </div>
      </div>
      <div v-text="commentBody" class="comment-text"></div>
    </div>
      <phantom-button
        v-on:click="toggleResponseCommentBox"
        v-show="!inResponseMode"
        class="answear-comment-button"
        >{{ Translator.translate("answear_comment") }}</phantom-button
      >
    <comment-box
      v-if="inResponseMode"
      v-bind:user-nickname="userNickname"
      v-bind:avatar-file-path="avatarFilePath"
      v-bind:nesting-level="childrenNestingLevel"
      v-bind:comment-id="id"
    >
    </comment-box>
  </section>
</template>

<script lang="ts">
import Translator from "@jsmodules/translator.js";
import UserPreview from "@jscomponents/user/user_preview.vue";
import DateConfirmedIcon from "@svgicon/date_confirmed_icon";
import PhantomButton from "@jscomponents/form_controls/phantom_button.vue";
import CommentBox from "@jscomponents-form-controls/comment_box.vue";

const BASIC_BODY_SIZE = 50,
  BASIC_MIN_WIDTH = 270,
  BODY_SIZE_UNIT = "vw",
  BODY_MIN_WIDTH_UNIT = "px";

export default {
  name: "comment-body",

  provide() {
    return { 
      avatarFilePath : this.avatarFilePath
    }
  },

  data() {
    return {
      Translator,
      inResponseMode: false,
    };
  },

  methods: {
    toggleResponseCommentBox() {
      this.inResponseMode = !this.inResponseMode;
      if (this.inResponseMode) {
        this.emitter.emit("hideCommentForm");
      }
    },
  },

  computed: {
    sizeStyleObject() {
      return {
        width: `${BASIC_BODY_SIZE - this.nestingLevel * 7}${BODY_SIZE_UNIT}`,
        minWidth: `${
          BASIC_MIN_WIDTH - this.nestingLevel * 7
        }${BODY_MIN_WIDTH_UNIT}`,
      };
    },

    childrenNestingLevel(): number {
      return this.nestingLevel in [0, 1] ? this.nestingLevel + 1 : 2;
    },
  },

  components: { UserPreview, DateConfirmedIcon, CommentBox, PhantomButton },

  props: {

    id : { 
      required : true,
      type : Number
    },

    avatarFilePath : { 
       type: String,
       required: true,
       default : ''
    },

    addedByAuthenticatedUser: {
      type: Boolean,
      required: false,
      default: false,
    },

    userNickname: {
      type: String,
      required: true,
    },

    commentBody: {
      type: String,
      required: true,
    },

    addedAgo: {
      type: String,
      required: true,
    },

    nestingLevel: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@import "~sass/responsive_icon";

.actuall-comment {
  border: 1px solid gray;
  border-radius:1vw;
}

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
  border-radius: 1vw 1vw 0 0;
  align-items: center;
  background: #252222;
  justify-content: space-between;
  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.comment-text {
  @include responsive-font();
  padding: 1vw;
  background: black;
  color: white;
  border-radius: 0 0 1vw 1vw;
}

.comment-container {
  border-radius: 1vw;
  margin: 20px auto;
  position: relative;
}

.date-confirmed-icon {
  width: 1.4em;
  height: 1.4em;
}

.answear-comment-button {
  width:10%;
  min-width:100px;
  display: block;
  margin:0 0 0 10px;
  color: white;
  @include responsive-font();
  &:hover {
    color: #e50c33;
  }
  &:active {
    transform: scale(1.1);
  }
}
</style>
