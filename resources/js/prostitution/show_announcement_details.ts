import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import ImagesGallery from '@jscomponents/image_gallery/images_gallery.vue';
import PhoneIcon from '@svgicon/phone_icon.vue';
import PhantomButton from "@jscomponents/form_controls/phantom_button.vue";
import RoutesConfig from "@config/paths/routes";
import MoneyBagIcon from "@svgicon/money_bag_icon.vue";
import BedHeartIcon from "@svgicon/bed_heart_icon.vue";
import InfoCircleIcon from "@svgicon/info_circle_icon.vue";
import SimpleAddText from "@jscomponents/form_controls/simple_add_text.vue";
import PadlockIcon from "@svgicon/padlock_icon.vue";
import AddPlusIcon from "@svgicon/add_plus_icon.vue";
import CommentIcon from "@svgicon/comment_icon.vue";
import ExpectShadowCircle from "@jscomponents-decoration/expect_shadow_circle.vue";
import SimpleCommentsList from "@jscomponents/simple_comments_list.vue";

const settings = {

    data() {
        return {
            csrfToken: null,
            announcementUid: undefined,
            phoneNumber: null,
            completePhoneNumberIsDisplayed: false,
            showCommentsList : false,
            commentsProcessingInProgress : false,
            comments : []
        };
    },

    components : {
       ImagesGallery,
       PhoneIcon,
       PhantomButton,
       MoneyBagIcon,
       BedHeartIcon,
       InfoCircleIcon,
       SimpleAddText,
       PadlockIcon,
       AddPlusIcon,
       CommentIcon,
       ExpectShadowCircle,
       SimpleCommentsList
    },

    methods : {

        getComments() : void {
            this.commentsProcessingInProgress = true;
            this.showCommentList();
            this.fetchComments().then(this.processGetCommentsResponse, this.processGetCommentsResponse);
        },

        async processGetCommentsResponse(response : Response) {
            this.commentsProcessingInProgress = false;

            if(response.status === 200) {
                this.comments = await response.json();
                return;
            }
            this.showErrorMessageNotification('oops_something_went_wrong');
        },

        showErrorMessageNotification(message : string) : void {
            this.emitter.emit("showNotification", {
                notificationText: message,
                notificationType: "error",
                headerText: "error",
              });
        },

        showCommentForm() {
            this.showCommentsList = false;
        },

        showCommentList() {
            this.showCommentsList = true;
        },

        tryToSaveComment(commentBody : string): void {
            if(commentBody.length <= 0) {
                this.showErrorMessageNotification('comment_cannot_be_empty');
                return;
            }
            
            if(commentBody.length > 1000) {
                this.showErrorMessageNotification('comment_text_exceeds_1000_characters');
                return;
            }
            this.commentsProcessingInProgress = true;
            this.saveComment(commentBody)
                .then(this.afterCommentSavingCleanUp);
        },

        async fetchComments() {
            const requestData = {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                },
            };
            const URL = `${RoutesConfig.getProstitutueComment}?announcementUid=${this.announcementUid}`;
            const response = await fetch(URL, requestData);
            return response;
        },

        async saveComment(commentBody : string) {

            const requestData = {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body : JSON.stringify({
                    announcementUid: this.announcementUid,
                    commentBody,
                })
            };

            const response = await fetch(RoutesConfig.saveProstituteComment, requestData);
            return response.status;
        },
        
        afterCommentSavingCleanUp(statusCode : number): void {
            this.commentsProcessingInProgress = false;
            switch(statusCode) {
                case 201:
                case 200:
                    this.showNotification('comment_submitted_awaits_verification');
                break;

                case 401:
                    this.showErrorMessageNotification(('you_have_to_be_logged_in_maybe_your_session_has_expired'));
                break;

                case 403:
                    this.showErrorMessageNotification('you_can_add_only_one_comment_for_one_announcement');
                break;

                default:
                    this.showErrorMessageNotification('oops_something_went_wrong');
                break;

            }
            

        },

        showNotification(message : string) : void {
            this.emitter.emit("showNotification", {
                notificationText: message,
                notificationType: "no-error",
                headerText: "information",
              });
        },

        async fetchPhoneNumber() {
            
            const requestData = {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken
                }
            };
            const URL = `${RoutesConfig.prostitutePhoneNumber}?announcementUid=${this.announcementUid}`;
            const response = await fetch(URL, requestData);
            if(response.status === 200) {
                const responseBody = await response.json();
                this.phoneNumber = responseBody['phoneNumber'];
                this.completePhoneNumberIsDisplayed = true;
            }
        }
    },

    computed : {
        phoneNumberHrefAttribute(): string {
            return `tel:${this.phoneNumber}`;
        }
    },

    mounted() {
        //@ts-ignore
        this.csrfToken = document.getElementById("csrf-token").content;
        this.announcementUid = document.querySelector("[data-announcement-uid]").getAttribute('data-announcement-uid');
        this.phoneNumber = document.querySelector("[data-short-phone-number]")?.getAttribute('data-short-phone-number');
    }
};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");