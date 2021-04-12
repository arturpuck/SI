import VueConstructor from '@jsmodules/basic.js';
import Plyr from 'plyr';
import MovieRollIcon from '@svgicon/movie_roll_icon';
import TelevisionIcon from '@svgicon/television_icon';
import DateConfirmedIcon from '@svgicon/date_confirmed_icon';
import StarFullIcon from '@svgicon/star_full_icon';
import ChartGrowthIcon from '@svgicon/chart_growth_icon';
import SpermatozoidIcon from '@svgicon/spermatozoid_icon';
import LikeBackgroundIcon from '@svgicon/like_background_icon';
import DownloadIcon from '@svgicon/download_icon';
import StarRating from '@jscomponents/star_rating';
import UnknownPersonIcon from '@svgicon/unknown_person_icon';
import InfoCircleIcon from '@svgicon/info_circle_icon'
import LikeIcon from '@svgicon/like_icon';
import StarRate from '@interfaces/StarRate';
import UserNotification from '@jscomponents/user_notification.vue';
import NotificationFunction from '@jsmodules/notification_function';
import RelativeShadowContainer from '@jscomponents/decoration/relative_shadow_container.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import { MovieBasicData } from "@interfaces/movies/MovieBasicData.ts";

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
Vue.component('like-background-icon', LikeBackgroundIcon);
Vue.component('info-circle-icon', InfoCircleIcon);
Vue.component('relative-shadow-container', RelativeShadowContainer);
Vue.component('expect-circle', ExpectCircle);

new Vue({
    el: '#app',

    data() {

        return {
            csrfToken: undefined,
            ammountOfLikes: undefined,
            views: undefined,
            addedAt: undefined,
            moviePornstars: undefined,
            rating: undefined,
            movie_id: undefined,
            showMovieDesktopFetchingDecoration: true,
            ammountOfSpermatozoids: undefined,
            ammountOfSpermatozoidsAssignedByUser: undefined,
            userRate: undefined,
            userLikesMovie: undefined
        }
    },

    methods: {

        showNotification: NotificationFunction,

        async addLike(movie_id: number) {

            const requestBody = {
                movie_id
            };

            const requestData = {
                method: 'PUT',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(requestBody)
            };

            try {
                const response = await fetch('/movie/add-like', requestData);

                switch (response.status) {
                    case 200:
                        alert('sukces');
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
                this.showNotification(this.translator.translate(exception.message), 'error');
            }

        },

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
                this.showNotification(this.translator.translate(exception.message), 'error');
            }
        },

        async addSpermatozoid(movie_id: number) {

            const requestBody = {
                movie_id
            };

            const requestData = {
                method: 'PUT',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(requestBody)
            };

            try {
                const response = await fetch('/add/spermatozoid', requestData);

                switch (response.status) {
                    case 200:
                        this.showNotification(this.translator.translate('spermatozoid_has_been_asigned'));
                        break;

                    case 400:
                        const errorMesage: string[] = await response.json();

                        if (errorMesage.includes('cum limit exceeded')) {
                            throw new Error('you_have_exceeded_cum_limit');
                        }
                        else {
                            throw new Error('spermatozoid_rate_data_is_incorrect');
                        }

                        break;

                    default:
                        throw new Error('undefined_error');
                        break;

                }

            }
            catch (exception) {
                this.showNotification(this.translator.translate(exception.message), 'error');
            }
        },

        async fetchMovieData() {

            const requestData = {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken,
                    'Content-type': 'application/json; charset=UTF-8'
                }
            };

            try {
                const response = await fetch(`/movie/details/${this.movie_id}`, requestData);

                switch (response.status) {
                    case 200:
                        const responseData: MovieBasicData = await response.json();
                        console.log(responseData);
                        this.loadMovieData(responseData);
                        break;

                    case 400:

                        break;

                    default:
                        throw new Error('undefined_error');
                        break;

                }

            }
            catch (exception) {
                this.showNotification(this.translator.translate(exception.message), 'error');
            }
        },

        loadMovieData(movie: MovieBasicData): void {
            this.views = movie.views;
            this.addedAt = movie.added_at;
            this.rating = movie.rating;
            this.ammountOfSpermatozoids = movie.spermatozoids.total_spermatozoids;
            this.ammountOfSpermatozoidsAssignedByUser = movie.spermatozoids.user_spermatozoids;
            this.showMovieDesktopFetchingDecoration = false;
            this.ammountOfLikes = movie.likes.total_likes;
            this.userLikesMovie = movie.likes.user_likes_movie;
        }

    },

    mounted() {
        const player = new Plyr('#player');
        this.movie_id = this.$refs.player.getAttribute('data-movie-id');
        this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
        this.fetchMovieData();
    },

    computed: {
        spermatozoidsLabel(): string {
            const label = this.translator.translate('ammount_of_spermatozoids');
            const currentUserLabel = this.ammountOfSpermatozoidsAssignedByUser ?
                `(${this.translator.translate('your_spermatozoids')} : ${this.ammountOfSpermatozoidsAssignedByUser})` :
                '';
            return `${label} : ${this.ammountOfSpermatozoids} ${currentUserLabel}`;
        },

        averageRatingLabel(): string {
            const label: string = this.translator.translate('movie_average_rating');
            const value = this.movieRating || this.translator.translate('average_rate_not_available_yet');
            return `${label} : ${value}`;
        },

        viewsLabel(): string {
            return `${this.translator.translate('movie_views')} : ${this.views}`;
        },

        addedAtLabel(): string {
            return `${this.translator.translate('movie_added_at')} : ${this.addedAt}`;
        },

        likesLabel(): string {
            if (this.userLikesMovie) {
                return (this.ammountOfLikes == 1) ? this.translator.translate('you_like_it') :
                    `${this.translator.translate('you_and')} ${this.ammountOfLikes - 1} ${this.translator.translate('people_like_it')}`
            }
            return `${this.translator.translate('number_of_likes')} : ${this.ammountOfLikes}`;
        }
    }

});