<template>
  <div>
    <show-comment-form-button
      v-show="!commentFormIsVisible"
      v-on:click.native="showCommentForm"
      class="comment-form-button"
    ></show-comment-form-button>
    <comment-box
      v-show="commentFormIsVisible"
      v-bind:authenticated-user="authenticatedUser"
      v-bind:avatar-file-path="avatarFilePath"
      v-bind:authenticated-user-nickname="authenticatedUserNickname"
      v-on:send="sendComment"
    ></comment-box>
    <div
      v-show="!anyCommentsAvailable"
      v-text="translations['no_comments']"
      class="no-comments-info"
    ></div>
    <ul>
      <comment-body
        v-for="comment in comments"
        v-bind:key="comment.id"
        v-bind:comment-body="comment.body"
        v-bind:authenticated-user="comment.addedByAuthenticatedUser"
        v-bind:avatar-file-path="comment.avatarFilePath"
        v-bind:added-ago="comment.addedAgo"
        v-bind:user-nickname="comment.userNickname"
      >
      </comment-body>
    </ul>
    <pages-list></pages-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CommentBody from "@jscomponents/form_controls/comment_body.vue";
import Comment from "@interfaces/Comment";
import PageListUpdate from "@interfaces/PageListUpdate";
import PagesListBasicData from "@interfaces/pages_list_basic_data";
import PagesList from "@jscomponents/pages_list.vue";
import Translations from "@jsmodules/translations/comments_list";
import ShowCommentFormButton from "@jscomponents/form_controls/show_comment_form_button.vue";
import CommentBox from "@jscomponents/form_controls/comment_box.vue";

@Component({
  components: { ShowCommentFormButton, CommentBody, PagesList, CommentBox },
})
export default class CommentList extends Vue {
  @Prop({
    type: Array,
    required: false,
    default: () => [],
  })
  readonly initialComments: Comment[];

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
  readonly authenticatedUserNickname: string;

  @Prop({
    type: String,
    required: false,
    default: "",
  })
  readonly avatarFilePath: string;

  @Prop({
    type: Number,
    required: false,
    default: 10,
  })
  readonly initialCommentsPerPage: number;

  private comments: Comment[] = [];
  private commentFormIsVisible = false;
  private translations = Translations;
  private commentsPerPage: number;

  mounted() {
    this.comments = this.initialComments;
    this.$root.$on("updateComments", this.updateComments);
    this.commentsPerPage = this.initialCommentsPerPage;
  }

  updateComments(commentsUpdate: PageListUpdate<Comment>): void {
    this.updatePagesList(commentsUpdate);
    this.comments = commentsUpdate.content;
  }

  updatePagesList(commentsUpdate: PageListUpdate<Comment>): void {
    const pagesNumber = this.calculateSubPagesNumber(
      commentsUpdate.totalElements,
      this.commentsPerPage
    );

    const pagesListStatus: PagesListBasicData = {
      pagesNumber,
      currentPage: commentsUpdate.currentPage,
    };
    this.$root.$emit("updatePagesList", pagesListStatus);
  }

  calculateSubPagesNumber(totalComments: number, commentsPerPage: number): number {
    return Math.ceil(totalComments / commentsPerPage);
  }

  get anyCommentsAvailable(): boolean {
    return this.comments.length > 0;
  }

  showCommentForm(): void {
    this.commentFormIsVisible = true;
  }

  sendComment(comment: Comment): void {
    this.$emit("comment", comment);
  }
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.comment-form-button {
  margin: 4px auto;
}

.no-comments-info {
  @include responsive-font();
  text-align: center;
  color: white;
  padding: 5px;
}
</style>
