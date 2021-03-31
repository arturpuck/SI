import VueConstructor from '@jsmodules/basic.js';
import Plyr from 'plyr';
import MovieRollIcon from '@svgicon/movie_roll_icon';
import TelevisionIcon from '@svgicon/television_icon';
import DateConfirmedIcon from '@svgicon/date_confirmed_icon';
import StarFullIcon from '@svgicon/star_full_icon';
import ChartGrowthIcon from '@svgicon/chart_growth_icon';
import SpermatozoidIcon from '@svgicon/spermatozoid_icon';
import DownloadIcon from '@svgicon/download_icon';
import StarRating from '@jscomponents/star_rating';
import UnknownPersonIcon from '@svgicon/unknown_person_icon';
import LikeIcon from '@svgicon/like_icon';
import StarRate from '@interfaces/StarRate';
import UserNotification from '@jscomponents/user_notification.vue';
import NotificationFunction from '@jsmodules/notification_function';

const Vue = VueConstructor.build();
Vue.component('movie-roll-icon', MovieRollIcon);
Vue.component('television-icon', TelevisionIcon);
Vue.component('date-confirmed-icon', DateConfirmedIcon);
Vue.component('star-full-icon', StarFullIcon);
Vue.component('chart-growth-icon', ChartGrowthIcon);
Vue.component('spermatozoid-icon', SpermatozoidIcon);
Vue.component('download-icon', DownloadIcon);
Vue.component('star-rating', StarRating);
Vue.component('unknown-person-icon', UnknownPersonIcon);
Vue.component('like-icon', LikeIcon);
Vue.component('user-notification', UserNotification);

new Vue({
    el: '#app',

    data: {
        csrfToken: undefined
    },

    methods: {

        showNotification: NotificationFunction,

        async rateMovie(rateData: StarRate) {

            const movieRateData = {
                user_vote: rateData.rate,
                movie_id: rateData.elementID
            }

            const requestData = {
                method: 'PUT',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(movieRateData)
            };

            try {
                const response = await fetch('/rate/movie', requestData);

                switch (response.status) {
                    case 200:
                        this.showNotification(this.translator.translate('element_has_been_rated'));
                        break;

                    case 400:
                        throw new Error('movie_rate_data_is_invalid');
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

        async addSpermatozoid(movie_id: number) {

            const movieID = {
                movie_id
            };

            const requestData = {
                method: 'PUT',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(movieID)
            };

            try {
                const response = await fetch('/add/spermatozoid', requestData);

                switch (response.status) {
                    case 200:
                        this.showNotification(this.translator.translate('element_has_been_rated'));
                        break;

                    case 400:
                        throw new Error('movie_rate_data_is_invalid');
                        break;

                    default:
                        throw new Error('undefined_error');
                        break;

                }

            }
            catch (exception) {
                this.showNotification(this.translator.translate(exception.message), true);
            }
        }

    },

    mounted() {
        const player = new Plyr('#player');
        this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
    }

});