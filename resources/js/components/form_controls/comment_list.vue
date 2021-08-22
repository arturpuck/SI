<template>
  <div>
    <show-comment-form-button
      v-show="!commentFormIsVisible"
      v-on:click="showCommentForm"
      class="comment-form-button"
    ></show-comment-form-button>
    <comment-box
      v-show="commentFormIsVisible"
      v-bind:authenticated-user="authenticatedUser"
      v-bind:avatar-file-path="avatarFilePath"
      v-bind:authenticated-user-nickname="authenticatedUserNickname"
      v-on:send="sendComment"
    ></comment-box>
    <pages-list v-bind:unique-identifier="uniqueIdentifier"></pages-list>
    <div
      v-show="!anyCommentsAvailable"
      v-text="translations['no_comments']"
      class="no-comments-info"
    ></div>
    <ul class="comments-list">
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
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import CommentBody from "@jscomponents/form_controls/comment_body.vue";
import Comment from "@interfaces/Comment";
import PageListUpdate from "@interfaces/PageListUpdate";
import PagesListBasicData from "@interfaces/pages_list_basic_data";
import PagesList from "@jscomponents/pages_list.vue";
import Translations from "@jsmodules/translations/comments_list";
import ShowCommentFormButton from "@jscomponents/form_controls/show_comment_form_button.vue";
import CommentBox from "@jscomponents/form_controls/comment_box.vue";

@Options({
  components: { ShowCommentFormButton, CommentBody, PagesList, CommentBox },
  name: "CommentList",
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

  @Prop({
    type: String,
    required: false,
    default: "",
  })
  readonly uniqueIdentifier: string;

  private comments: Comment[] = [];
  private commentFormIsVisible = false;
  private translations = Translations;
  private commentsPerPage: number;
  private totalCommentsAvailable: number = 0;

  mounted() {
    this.comments = this.initialComments;
    //@ts-ignore
    this.emitter.on("updateComments", this.updateComments); 
    this.commentsPerPage = this.initialCommentsPerPage;
  }

  updateComments(commentsUpdate: PageListUpdate<Comment>): void {
    this.updatePagesList(commentsUpdate);
    this.comments = commentsUpdate.content;
    this.totalCommentsAvailable = commentsUpdate.totalElements;
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
    //@ts-ignore
    this.emitter.emit(`updatePagesList${this.uniqueIdentifier}`, pagesListStatus);
  }

  calculateSubPagesNumber(totalComments: number, commentsPerPage: number): number {
    return Math.ceil(totalComments / commentsPerPage);
  }

  get anyCommentsAvailable(): boolean {
    return this.totalCommentsAvailable > 0;
  }

  showCommentForm(): void {
    this.commentFormIsVisible = true;
  }

  sendComment(comment: Comment): void {
    this.$emit("comment", comment);
  }

  get availableCommentsInformation(): string {
    return this.anyCommentsAvailable
      ? `${this.translations["total_comments"]} : ${this.totalCommentsAvailable}`
      : this.translations["no_comments_available"];
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

.comments-list {
  padding: 0;
  margin: 0;
}
</style>
