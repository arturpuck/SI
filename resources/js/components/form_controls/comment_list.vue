<template>
  <div>
    <div
      v-show="showNoCommentsAvailableNotification"
      v-text="Translations['no_comments']"
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

@Component({ components: { CommentBody, PagesList } })
export default class CommentList extends Vue {
  @Prop({
    type: Array,
    required: false,
    default: [],
  })
  readonly initialComments: Comment[];

  @Prop({
    type: Number,
    required: false,
    default: 20,
  })
  readonly commentsPerPage: number;

  private comments: Comment[];

  mounted() {
    this.comments = this.initialComments;
    this.$root.$on("updateComments", this.updateComments);
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

  calculateSubPagesNumber(
    totalComments: number,
    commentsPerPage: number
  ): number {
    return Math.ceil(totalComments / commentsPerPage);
  }

  get showNoCommentsAvailableNotification(): boolean {
    return this.comments.length > 0;
  }
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.no-comments-info {
  @include responsive-font();
  text-align: center;
  color: white;
  padding: 5px;
}
</style>