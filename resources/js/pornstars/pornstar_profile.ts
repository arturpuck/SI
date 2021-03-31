
import VueConstructor from '@jsmodules/basic.js';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import StarRating from '@jscomponents/star_rating.vue';
import { PornstarProfileTab } from '@js/enum/pornstar_profile_tab';
import Translator from '@jsmodules/translator.js';
import UserNotification from '@jscomponents/user_notification.vue';
import TextAreaCombo from '@jscomponents-form-controls/textarea_combo.vue';
import AcceptButton from '@jscomponents-form-controls/accept_button.vue';
import RelativeShadowContainer from '@jscomponents/decoration/relative_shadow_container.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import IconStop from '@jscomponents-decoration/icon_stop.vue';
import IconConfirm from '@jscomponents-decoration/icon_confirm.vue';
import CommentBox from '@jscomponents-form-controls/comment_box.vue';
import CommentBody from '@jscomponents/form_controls/comment_body.vue';
import LinksBox from '@jscomponents/links_box.vue';
import MoviePreviewComplete from '@jscomponents/movies/movie_preview_complete.vue';

const Vue = VueConstructor.build();
Vue.component('movie-box', MovieBox);
Vue.component('star-rating', StarRating);
Vue.component('user-notification', UserNotification);
Vue.component('textarea-combo', TextAreaCombo);
Vue.component('accept-button', AcceptButton);
Vue.component('relative-shadow-container', RelativeShadowContainer);
Vue.component('expect-circle', ExpectCircle);
Vue.component('icon-stop', IconStop);
Vue.component('icon-confirm', IconConfirm);
Vue.component('comment-box', CommentBox);
Vue.component('comment-body', CommentBody);
Vue.component('links-box', LinksBox);
Vue.component('movie-preview-complete', MoviePreviewComplete);


new Vue({
  el: '#app',

  data() {
    return {
      showsPreview: false,
      activeTab: PornstarProfileTab.Movies,
      translations: null,
      csrfToken: null,
      processingCommentsInProgress: false,
      pornstarCommentsHaveBeenFetched: false,
      expectCircleLabel: 'fetching_comments',
      commentsPerPage: 8,
      pornstarComments: {},
      pagesNumber: 0,
      currentCommentsPage: null,
      showCommentPanel: false,
      pornstarID: undefined,
      totalComments: 0
    }
  },


  methods: {

    getAriaLabelAttributeValueForSubPageButton(pageNumber: number): string {
      return `${this.translator.translate('show_comments_sub_page_with_number')} : ${pageNumber}`;
    },

    checkCurrentPage(pageNumber: number): boolean {
      return pageNumber == this.currentCommentsPage;
    },

    validateComment(commentData: object): object {

      try {

        if (!commentData['comment_text']) {
          throw new Error('comment_text_is_missing');
        }

        if (commentData['comment_text'].length > 1000) {
          throw new Error('comment_text_exceeds_1000_characters');
        }

        if (commentData.hasOwnProperty('nickname')) {

          if (!commentData['nickname']) {
            throw new Error('nickname_is_missing');
          }

          if (commentData['nickname'].length > 50) {
            throw new Error('nickname_exceeds_50_characters');
          }

        }

      }
      catch (error) {
        return { success: false, message: error.message };
      }

      return { success: true };
    },

    resetCommentBox() {
      this.$root.$emit('resetCommentBox');
    },

    async saveComment(commentData: object) {

      try {

        const validationResult = this.validateComment(commentData);

        if (!validationResult['success']) {
          throw new Error(validationResult['message']);
        }
        this.showCommentsExpectationDecoration(this.translator.translate('adding_comment'));

        commentData['pornstar_id'] = this.pornstarID;

        const requestData = {
          method: 'POST',
          body: JSON.stringify(commentData),
          headers: {
            'X-CSRF-TOKEN': this.csrfToken,
            'Content-type': 'application/json; charset=UTF-8'
          }
        };

        const response = await fetch(`/pornstar/comments/add`, requestData);

        switch (response.status) {

          case 200:
            let responseBody = await response.json();
            this.loadCommentsData(responseBody, 1);
            this.resetCommentBox();
            break;

          case 429:
            throw new Error('because_of_safety_reasons_adding_comments_is_limited_to_2_per_minute');
            break;

          default:
            throw new Error('unexpected_error_occured_while_fetching_comments');
            break;

        }
      }
      catch (error) {
        this.showNotification(this.translator.translate(error.message), true);
      }
      finally {
        this.hideCommentsExpectationDecoration();
      }

    },

    showCommentsExpectationDecoration(label: string) {
      this.expectCircleLabel = label;
      this.processingCommentsInProgress = true;
    },

    hideCommentsExpectationDecoration() {
      this.processingCommentsInProgress = false;
    },

    showCommentForm() {
      this.showCommentPanel = true;
    },

    changeTab(event) {
      this.activeTab = event.target.id || event.target.parentElement.id;
    },

    loadCommentsData(data, pageNumber) {

      let totalComments = parseInt(data['total_comments']);

      if (totalComments == 0) {
        this.anyCommentsAvailable = true;
        this.currentCommentsPage = null;
        this.pornstarComments = {};
        this.totalComments = 0;
      }
      else {
        this.pagesNumber = Math.ceil(totalComments / this.commentsPerPage);
        this.pornstarComments[pageNumber] = data['comments'];
        this.currentCommentsPage = pageNumber;
        this.totalComments = totalComments;
      }

    },

    async fetchPornstarComments(pageNumber: number, pornstarID: number = null) {

      try {

        const requestData = {
          method: 'GET',
          headers: {
            'X-CSRF-TOKEN': this.csrfToken
          }
        };
        let pagesNumberQueryParam = '';
        pornstarID = pornstarID ? pornstarID : this.pornstarID;
        this.showCommentsExpectationDecoration(this.translator.translate('fetching_comments'));

        const response = await fetch(`/pornstar/comments?id=${pornstarID}&page=${pageNumber}&comments_per_page=${this.commentsPerPage}`, requestData);

        switch (response.status) {

          case 200:
            let responseBody = await response.json();
            this.loadCommentsData(responseBody, pageNumber);
            break;

          default:
            this.showNotification(this.translator.translate('unexpected_error_occured_while_fetching_comments'), true);
            break;
        }

      } catch (error) {
        this.showNotification('unexpected_error_occured_while_fetching_comments', true);
      }
      finally {
        this.hideCommentsExpectationDecoration();
      }


    },

    showComments(pornstarID: number) {
      this.activeTab = "comments-tab";
      this.pornstarID = pornstarID;

      if (!this.pornstarCommentsHaveBeenFetched) {
        this.showCommentsExpectationDecoration(this.translator.translate('fetching_comments'));
        this.fetchPornstarComments(1, pornstarID);
      }
    },

    showNotification(text, error = false) {
      const header = error ? "error" : "information";
      const type = error ? 'error' : 'no-error';
      this.$root.$emit('showNotification', { notificationText: text, notificationType: type, headerText: header });
    },

    async ratePornstar(data) {

      const rateData = {
        pornstar_id: data['elementID'],
        rate: data['rate']
      };

      const requestData = {
        method: 'PUT',
        headers: {
          'X-CSRF-TOKEN': this.csrfToken,
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(rateData)
      };

      try {
        const response = await fetch('/rate/pornstar', requestData);

        switch (response.status) {
          case 200:
            this.showNotification(this.translator.translate('element_has_been_rated'));
            break;

          case 400:
            throw new Error('pornstar_rate_data_is_invalid');
            break;

          default:
            throw new Error('undefined_error');
            break;

        }

      }
      catch (exception) {
        this.showNotification(this.translator.translate(exception.message), true);
      }
    },

    validateUnauthenticatedUserNickname(sender) {

      const value = sender.inputValue.trim();

      if (value.length == 0) {
        sender.resetValidation();
        return;
      }

      if (value.length > 20) {
        sender.showError('the_nickname_exceeds_20_characters');
      }

    }
  },

  computed: {
    pornstarMoviesTabIsActive() {
      return this.activeTab == PornstarProfileTab.Movies;
    },

    pornstarCommentsTabIsActive() {
      return this.activeTab == PornstarProfileTab.Comments;
    },

    pornstarRankingTabIsActive() {
      return this.activeTab == PornstarProfileTab.Rank;
    },

    linksBoxShouldBeDisplayed(): boolean {
      return this.pagesNumber > 1;
    },

    amountOfCommentsCaption(): string {
      return `${this.translator.translate('total_comments')} : ${this.totalComments}`;
    },

    anyCommentsAvailable(): boolean {
      return this.totalComments > 0;
    },

    currentCommentsPageIsNotFirst(): boolean {
      return this.currentCommentsPage > 1;
    },

    currentCommentsPageIsNotLast(): boolean {
      return this.currentCommentsPage < this.pagesNumber;
    }

  },

  mounted() {
    this.$root.$on('showPreview', () => this.showsPreview = true);
    this.$root.$on('closePreview', () => this.showsPreview = false);
    this.translator = Translator;
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
  },

});