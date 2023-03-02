
import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
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
import CommentValidator from '@jsmodules/validators/comment_validator';
import CameraIcon from "@svgicon/camera_icon.vue";
import CommentIcon from "@svgicon/comment_icon.vue";
import PodiumIcon from "@svgicon/podium_icon.vue";
import StopHandIcon from "@svgicon/stop_hand_icon.vue";
import BoxVotingIcon from "@svgicon/box_voting_icon.vue";
import PageListUpdate from '@interfaces/PageListUpdate';
import CommentList from '@jscomponents/form_controls/comment_list.vue';
import { PornstarRating } from '@interfaces/pornstars/PornstarRating';
import Translations from '@jsmodules/translations/pornstar_profile';
import Comment from '@interfaces/Comment';


const settings = {

  data() {
    return {
      showsPreview: false,
      activeTab: PornstarProfileTab.Movies,
      csrfToken: null,
      processingCommentsInProgress: false,
      pornstarCommentsHaveBeenFetched: false,
      expectCircleLabel: 'fetching_comments',
      commentsPerPage: 10,
      pornstarID: undefined,
      numberOfVotes: 0,
      overallRating: 0,
      userRating: undefined,
      translations: Translations,
      fetchingRatingInProgress: true,
    }
  },

  components: {
    MovieBox,
    StarRating,
    UserNotification,
    TextAreaCombo,
    AcceptButton,
    RelativeShadowContainer,
    ExpectCircle,
    IconStop,
    IconConfirm,
    CommentBox,
    CommentBody,
    LinksBox,
    MoviePreviewComplete,
    CameraIcon,
    CommentIcon,
    PodiumIcon,
    StopHandIcon,
    BoxVotingIcon,
    CommentList
  },

  methods: {

    showRating(): void {
      this.activeTab = PornstarProfileTab.Rank;
      this.getPornstarRating();
    },

    getAriaLabelAttributeValueForSubPageButton(pageNumber: number): string {
      return `${this.translator.translate('show_comments_sub_page_with_number')} : ${pageNumber}`;
    },

    validateComment: CommentValidator,

    resetCommentBox() {
      this.emitter.emit('resetCommentBox');
    },

    async saveComment(commentData: Comment) {

      try {

        const validationResult = this.validateComment(commentData);

        if (!validationResult['success']) {
          throw new Error(validationResult['message']);
        }
        this.showCommentsExpectationDecoration(this.translator.translate('adding_comment'));

        commentData['pornstar_id'] = this.pornstarID;
        commentData['commentsPerPage'] = this.commentsPerPage;

        const requestData = {
          method: 'POST',
          body: JSON.stringify(commentData),
          headers: {
            'X-CSRF-TOKEN': this.csrfToken,
            'Content-type': 'application/json; charset=UTF-8'
          }
        };
        const savingChildComment = commentData.hasOwnProperty('parentCommentID');

        const response = await fetch(`/pornstar/comments/add`, requestData);

        switch (response.status) {

          case 200: case 201:
            const commentsUpdateList = await response.json();
            if (savingChildComment) {
              this.loadChildComments(commentsUpdateList, commentData.parentCommentID);
            }
            else {
              this.loadRootComments(commentsUpdateList);
            }
            this.resetCommentBox();
            this.showNotification(this.translator.translate('comment_added'));
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

    loadChildComments(comments : PageListUpdate<Comment>, parentCommentId : number) : void {
      this.emitter.emit(`childCommentsReceived${parentCommentId}`, comments);
   },
   
   loadRootComments(commentsUpdate: PageListUpdate<Comment> | Comment): void {
       this.emitter.emit('updateComments', commentsUpdate);
       this.emitter.emit('resetCommentBox');
   },

    showCommentsExpectationDecoration(label: string) {
      this.expectCircleLabel = label;
      this.processingCommentsInProgress = true;
    },

    hideCommentsExpectationDecoration() {
      this.processingCommentsInProgress = false;
    },

    changeTab(event) {
      this.activeTab = event.target.id || event.target.parentElement.id;
    },

    fetchRootComments(pageNumber: number = 1) : void{
      const parameters = `pornstar_id=${this.pornstarID}&page=${pageNumber}&comments_per_page=${this.commentsPerPage}`;
      this.fetchComments(parameters)
          .then(comments => this.loadRootComments(comments));
  },

  fetchChildComments(parentCommentId: number, pageNumber: number = 1, commentsPerPage : number = 5) : void {
      const parameters = `page=${pageNumber}&comments_per_page=${commentsPerPage}&parent_comment_id=${parentCommentId}`;
      this.fetchComments(parameters)
          .then(comments => this.loadChildComments(comments, parentCommentId));
  },

  
  async fetchComments(parametersList: string) {
      
      const requestData = {
          method: 'GET',
          headers: {
              'X-CSRF-TOKEN': this.csrfToken
          }
      };

      try {
          const response = await fetch(`/pornstar/comments?${parametersList}`, requestData);
          
          if (response.status == 200) {
              const commentsPageListUpdate: PageListUpdate<Comment> = await response.json();
              return commentsPageListUpdate;
          } else {
              throw new Error('undefined_error');
          }
          
      }
      catch (exception) {
          this.showNotification(this.translator.translate(exception.message), 'error');
      }
      finally {
        this.hideCommentsExpectationDecoration();
      }
      
  },


    showComments() {
      this.activeTab = "comments-tab";

      if (!this.pornstarCommentsHaveBeenFetched) {
        this.showCommentsExpectationDecoration(this.translator.translate('fetching_comments'));
        this.fetchRootComments(1);
      }
    },

    showNotification(text, error = false) {
      const header = error ? "error" : "information";
      const type = error ? 'error' : 'no-error';
      this.emitter.emit('showNotification', { notificationText: text, notificationType: type, headerText: header });
    },

    loadPornstarRating(pornstarRating: PornstarRating): void {
      this.numberOfVotes = pornstarRating.numberOfVotes;
      this.overallRating = pornstarRating.overallRating;
      this.userRating = pornstarRating.userRating;

      if (this.userHasRatedPornstar) {
        this.emitter.emit('userUpdateRate', this.userRating);
      }

      if (this.pornstarHasAverageRate) {
        this.emitter.emit('averageUpdateRate', this.overallRating);
      }
      this.fetchingRatingInProgress = false;
    },

    async getPornstarRating() {

      const requestData = {
        method: 'GET',
        headers: {
          'X-CSRF-TOKEN': this.csrfToken,
          'Content-type': 'application/json; charset=UTF-8'
        },
      };

      try {
        const response = await fetch(`/pornstar/rating?id=${this.pornstarID}`, requestData);

        switch (response.status) {
          case 200:
            const rating: PornstarRating = await response.json();
            this.loadPornstarRating(rating);
            break;

          default:
            throw new Error('an_error_occured_while_fetching_pornstar_rating');
            break;

        }

      }
      catch (exception) {
        this.showNotification(this.translator.translate(exception.message), true);
      }

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
            const refreshedRate: PornstarRating = await response.json();
            this.loadPornstarRating(refreshedRate);
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

  },

  computed: {
    pornstarMoviesTabIsActive(): boolean {
      return this.activeTab == PornstarProfileTab.Movies;
    },

    pornstarCommentsTabIsActive(): boolean {
      return this.activeTab == PornstarProfileTab.Comments;
    },

    pornstarRankingTabIsActive(): boolean {
      return this.activeTab == PornstarProfileTab.Rank;
    },

    pornstarHasAverageRate(): boolean {
      return typeof this.overallRating == 'number';
    },

    userHasRatedPornstar(): boolean {
      return Number.isInteger(this.userRating);
    },

    averageRatingLabel(): string {
      const core = this.translations.movieAverageRating;
      return this.overallRating ? `${core} : ${this.overallRating}` : `${core} : ${this.translations.averageRateNotAvailableYet}`;
    },

    numberOfVotesLabel(): string {
      return `${this.translations.currentNumberOfVotes} : ${this.numberOfVotes}`;
    }

  },

  mounted() {
    this.translator = Translator;
    this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
    this.emitter.on('pageHasBeenSelectedPornstarComments', this.fetchRootComments);
    this.pornstarID = parseInt(document.getElementById('pornstar-profile-container').getAttribute('data-pornstar-id'));
    this.emitter.on('saveComment', this.saveComment);
    this.emitter.on('showCommentAnswears', (parameters : []) => this.fetchChildComments(...parameters));
  },

};
//@ts-ignore
const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");