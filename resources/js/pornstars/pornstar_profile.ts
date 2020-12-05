
import VueConstructor from '@jsmodules/basic.js';
import FixedShadowContainer from '@jscomponents/decoration/fixed_shadow_container.vue';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import MoviePreview from '@jscomponents/movies/movie_preview.vue';
import StarRating from '@jscomponents/star_rating.vue';
import {PornstarProfileTab}  from '@js/enum/pornstar_profile_tab';
import Translator from '@jsmodules/translator.js';
import UserNotification from '@jscomponents/user_notification.vue'
import TextAreaCombo from '@jscomponents-form-controls/textarea_combo.vue';
import AcceptButton from '@jscomponents-form-controls/accept_button.vue';
import RelativeShadowContainer from '@jscomponents/decoration/relative_shadow_container.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import IconStop from '@jscomponents-decoration/icon_stop.vue';
import IconConfirm from '@jscomponents-decoration/icon_confirm.vue';
import CommentBox from '@jscomponents-form-controls/comment_box.vue';

const Vue = VueConstructor.build();
Vue.component('fixed-shadow-container', FixedShadowContainer);
Vue.component('movie-box', MovieBox);
Vue.component('movie-preview', MoviePreview);
Vue.component('star-rating', StarRating);
Vue.component('user-notification', UserNotification);
Vue.component('textarea-combo', TextAreaCombo);
Vue.component('accept-button', AcceptButton);
Vue.component('relative-shadow-container', RelativeShadowContainer);
Vue.component('expect-circle', ExpectCircle);
Vue.component('icon-stop', IconStop);
Vue.component('icon-confirm', IconConfirm);
Vue.component('comment-box', CommentBox);


new Vue({
    el: '#app',

    data(){
        return {
            showsPreview:false,
            activeTab : PornstarProfileTab.Movies,
            translations : null,
            csrfToken:null,
            processingCommentsInProgress:false,
            pornstarCommentsHaveBeenFetched : false,
            expectCircleLabel : 'fetching_comments',
            showNoCommentsInfo : false,
            commentsPerPage : 5,
            pornstarComments : {},
            pagesNumber : 0,
            currentPage : null,
            showCommentPanel:false
        }
    },
   
   
    methods : {

      showCommentsExpectationDecoration(label:string){
         this.expectCircleLabel = label;
         this.processingCommentsInProgress = true;
      },

      hideCommentsExpectationDecoration(){
        this.processingCommentsInProgress = false;
      },

      showCommentForm(){
          this.showCommentPanel = true;
      },

      changeTab(event){
           this.activeTab = event.target.id || event.target.parentElement.id;
      },

      loadCommentsData(data, pageNumber){

            let totalComments = data['total_comments'];

            if(totalComments == 0){
              this.showNoCommentsInfo = true;
              this.currentPage = null;
              this.pornstarComments = {};
            }
            else{
              this.showNoCommentsInfo = false;
              this.pagesNumber = Math.ceil(this.totalComments / this.commentsPerPage);
              this.pornstarComments = data['comments'];
              this.currentPage = pageNumber;
            }
           
      },

      async fetchPornstarComments(pornstarID:number, pageNumber:number){

        const requestData = {
            method : 'GET',
            headers : {
              'X-CSRF-TOKEN' : this.csrfToken,
              'Content-type': 'application/json; charset=UTF-8'
            }
         };
         let pagesNumberQueryParam = '';

        const response = await fetch(`/pornstar/comments?id=${pornstarID}&page=${pageNumber}&comments_per_page=${this.commentsPerPage}`, requestData);

          switch(response.status){

              case 200:
                let responseBody = await response.json();
                console.log(responseBody);
                this.loadCommentsData(responseBody, pageNumber);
              break;

              default:
                this.showNotification('unexpected_error_occured_while_fetching_comments')
              break;
          }

          this.hideCommentsExpectationDecoration();
      },

      showComments(pornstarID:number){
        this.activeTab = "comments-tab";

        if(!this.pornstarCommentsHaveBeenFetched){
            this.showCommentsExpectationDecoration(this.translations['fetching_comments']);
            this.fetchPornstarComments(pornstarID,1);
        }
      },

      showNotification(text, type="no-error"){
        const header = type === "no-error" ? "information" : "error";
        this.$root.$emit('showNotification', {notificationText : text, notificationType : type, headerText : header});
     },

      async ratePornstar(data){
          
            const rateData = {
                pornstar_id : data['pornstarID'],
                rate : data['rate']
            };

            const requestData = {
              method : 'PUT',
              headers : {
                 'X-CSRF-TOKEN' : this.csrfToken,
                 'Content-type': 'application/json; charset=UTF-8'
              },
              body : JSON.stringify(rateData)
           };

        try{
           const response = await fetch('/rate/pornstar', requestData);

              switch(response.status){
                case 200:
                  this.showNotification('pornstar_has_been_rated')
                break;

                case 400:
                  throw new Error('pornstar_rate_data_is_invalid');
                break;

                default:
                  throw new Error('undefined_error');
                break;

             }

          }
          catch(exception){
            this.showNotification(exception.message, 'error');
          }
      },

      async addComment(){
           this.showCommentsExpectationDecoration(this.translations['adding_comment']);

           const commentData = {

           };

           const requestData = {
            method : 'PUT',
            headers : {
               'X-CSRF-TOKEN' : this.csrfToken,
               'Content-type': 'application/json; charset=UTF-8'
            },
            body : JSON.stringify(commentData)
         };

      },

      validateUnauthenticatedUserNickname(sender){

         const value = sender.inputValue.trim();

         if(value.length == 0){
          sender.resetValidation();
          return;
        }
         
        if(value.length > 20){
            sender.showError('the_nickname_exceeds_20_characters');
        }
 
      }
    },

   computed : {
      pornstarMoviesTabIsActive(){
          return this.activeTab == PornstarProfileTab.Movies;
      },

      pornstarCommentsTabIsActive(){
        return this.activeTab == PornstarProfileTab.Comments;
      },

      pornstarRankingTabIsActive(){
        return this.activeTab == PornstarProfileTab.Rank;
      }
   },

    mounted(){
        this.$root.$on('showPreview', ()=> this.showsPreview = true);
        this.$root.$on('closePreview', ()=> this.showsPreview = false);
        this.translations = Translator.getPackage('pornstar_action_section');
        this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
      },
   
   });