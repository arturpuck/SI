import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import Plyr from 'plyr';
import MovieRollIcon from '@svgicon/movie_roll_icon.vue';
import TelevisionIcon from '@svgicon/television_icon.vue';
import DateConfirmedIcon from '@svgicon/date_confirmed_icon.vue';
import StarFullIcon from '@svgicon/star_full_icon.vue';
import ChartGrowthIcon from '@svgicon/chart_growth_icon.vue';
import SpermatozoidIcon from '@svgicon/spermatozoid_icon.vue';
import LikeBackgroundIcon from '@svgicon/like_background_icon.vue';
import DownloadIcon from '@svgicon/download_icon.vue';
import StarRating from '@jscomponents/star_rating.vue';
import UnknownPersonIcon from '@svgicon/unknown_person_icon.vue';
import InfoCircleIcon from '@svgicon/info_circle_icon.vue'
import LikeIcon from '@svgicon/like_icon.vue';
import CommentPenIcon from '@svgicon/comment_pen_icon.vue';
import StarRate from '@interfaces/StarRate';
import UserNotification from '@jscomponents/user_notification';
import NotificationFunction from '@jsmodules/notification_function';
import RelativeShadowContainer from '@jscomponents/decoration/relative_shadow_container.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import MoviesList from '@jscomponents/movies/movies_list.vue';
import CommentList from '@jscomponents/form_controls/comment_list.vue';
import { MovieBasicData } from "@interfaces/movies/MovieBasicData";
import { MovieRating } from "@interfaces/movies/MovieRating";
import { MovieSpermatozoids } from "@interfaces/movies/MovieSpermatozoids";
import { MovieLikes } from "@interfaces/movies/MovieLikes";
import { MovieTheatreTab } from "@js/enum/movie_theatre_tab";
import { MoviesListResponse } from "@interfaces/movies/MoviesListResponse.ts";
import { MoviesCurrentPage } from "@interfaces/movies/MoviesCurrentPage.ts";
import PageListUpdate from '@interfaces/PageListUpdate';
import Comment from '@interfaces/Comment';
import CommentValidator from '@jsmodules/validators/comment_validator';
import Translator from "@jsmodules/translator.js";

const settings = {

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
            showSimilarMoviesFetchingDecoration: true,
            ammountOfSpermatozoids: undefined,
            ammountOfSpermatozoidsAssignedByUser: undefined,
            userRate: undefined,
            userLikesMovie: undefined,
            selectedTab: MovieTheatreTab.SimilarMovies,
            showCommentsFetchingDecoration: true,
            commentsPerPage: 10,
            translator : Translator
        }
    },

    methods: {

        showNotification: NotificationFunction,

        validateComment : CommentValidator,

        async saveMovieComment(comment: Comment) {

            try {

                const validationResult = this.validateComment(comment);

                if (!validationResult['success']) {
                   throw new Error(validationResult['message']);
                }

                const requestBody = {
                    movie_id: this.movie_id,
                    commentsPerPage: this.commentsPerPage,
                    ...comment
                };
    
                const requestData = {
                    method: 'PUT',
                    headers: {
                        'X-CSRF-TOKEN': this.csrfToken,
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(requestBody)
                };

                const response = await fetch('/movie/add-comment', requestData);

                switch (response.status) {
                    case 200:
                        const commentsUpdateList: PageListUpdate<Comment> = await response.json();
                        this.loadComments(commentsUpdateList);
                        this.showNotification(this.translator.translate('comment_added'));
                        break;

                    case 500:
                        throw new Error('the_requested_data_is_probably_ok_but_a_server_error_occured');
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

        async addLike() {

            if (this.userLikesMovie) {
                this.showNotification(this.translator.translate('you_already_like_this_movie'));
                return;
            }

            const requestBody = {
                movie_id: this.movie_id
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
                        const movieLikesData: MovieLikes = await response.json();
                        this.loadMovieLikes(movieLikesData);
                        this.showNotification(this.translator.translate('you_like_it'));
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
                movie_id: this.movie_id
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
                        const movieRating: MovieRating = await response.json();
                        this.loadMovieRating(movieRating);
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

        async addSpermatozoid() {

            const requestBody = {
                movie_id: this.movie_id
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
                        const movieSpermatozoids: MovieSpermatozoids = await response.json();
                        this.loadMovieSpermatozoids(movieSpermatozoids);
                        this.showNotification(this.translator.translate('spermatozoid_has_been_asigned'));
                        break;

                    case 400:
                        const errorMesage: string[] = await response.json();
                        this.showSpermatozoidsErrorMessage(errorMesage);
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

        showSpermatozoidsErrorMessage(errorMessage: string[]): never {

            if (errorMessage.includes('cum limit exceeded')) {
                throw new Error('you_have_exceeded_cum_limit');
            }
            else {
                throw new Error('spermatozoid_rate_data_is_incorrect');
            }
        },

        async fetchMovieData() {

            const requestData = {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken
                }
            };

            try {
                const response = await fetch(`/movie/details/${this.movie_id}`, requestData);
                if (response.status == 200) {
                    const responseData: MovieBasicData = await response.json();
                    this.loadMovieData(responseData);
                }
                else {
                    throw new Error('failed_to_load_movie_data');
                }

            }
            catch (exception) {
                this.showNotification(this.translator.translate(exception.message), 'error');
            }
            finally {
                this.hideMovieDesktopFetchingDecoration();
            }
        },

        async fetchSimilarMovies(pageNumber: number = 1) {

            const requestData = {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken
                }
            };

            try {
                const response = await fetch(`/movie/similar/${this.movie_id}`, requestData);

                if (response.status == 200) {
                    const moviesList: MoviesListResponse = await response.json();
                    this.loadSimilarMovies(moviesList, pageNumber);
                } else {
                    throw new Error('failed_to_load_similar_movies');
                }

            }
            catch (exception) {
                this.showNotification(this.translator.translate(exception.message), 'error');
            }
            finally {
                this.hideSimilarMoviesFetchingDecoration();
            }

        },

        async fetchComments(pageNumber: number = 1) {

            const requestData = {
                method: 'GET',
                headers: {
                    'X-CSRF-TOKEN': this.csrfToken
                }
            };
            const parameters = `movie_id=${this.movie_id}&page=${pageNumber}&per_page=${this.commentsPerPage}`;
            try {
                const response = await fetch(`/movie/comments?${parameters}`, requestData);

                if (response.status == 200) {
                    const commentsPageListUpdate: PageListUpdate<Comment> = await response.json();
                    this.loadComments(commentsPageListUpdate);
                } else {
                    throw new Error('');
                }

            }
            catch (exception) {
                this.showNotification(this.translator.translate(exception.message), 'error');
            }
            finally {
                this.hideCommentsFetchingDecoration();
            }

        },

        loadComments(commentsPageListUpdate: PageListUpdate<Comment>): void {
            this.emitter.emit('updateComments', commentsPageListUpdate);
            this.emitter.emit('resetCommentBox');
        },

        loadSimilarMovies(moviesList: MoviesListResponse, pageNumber: number): void {

            const moviesListUpdate: MoviesCurrentPage = {
                moviesData: moviesList,
                currentPage: pageNumber
            };
        
            this.emitter.emit('updateMoviesList', moviesListUpdate);
        },

        loadMovieData(movie: MovieBasicData): void {
            this.views = movie.views;
            this.addedAt = movie.created_at;
            this.moviePornstars = movie.pornstars;
            this.loadMovieRating(movie.rating);
            this.loadMovieSpermatozoids(movie.spermatozoids);
            this.loadMovieLikes(movie.likes);
        },

        getPornstarSlug(pornstarNickname): string {
            return pornstarNickname.replaceAll(" ", "-");
        },

        showSimilarMoviesTab(): void {
            this.selectedTab = MovieTheatreTab.SimilarMovies;
        },

        showCommentsTab(): void {
            this.selectedTab = MovieTheatreTab.Comments;
            this.showCommentsDecoration();
            this.fetchComments();
        },

        hideMovieDesktopFetchingDecoration(): void {
            this.showMovieDesktopFetchingDecoration = false;
        },

        hideSimilarMoviesFetchingDecoration(): void {
            this.showSimilarMoviesFetchingDecoration = false;
        },

        hideCommentsFetchingDecoration(): void {
            this.showCommentsFetchingDecoration = false;
        },

        showCommentsDecoration(): void {
            this.showCommentsFetchingDecoration = true;
        },

        loadMovieRating(movieRating: MovieRating): void {
            this.rating = movieRating.overall_rating;
            this.emitter.emit('starRateUpdateRate', movieRating.user_rating);
        },

        loadMovieSpermatozoids(movieSpermatozoids: MovieSpermatozoids): void {
            this.ammountOfSpermatozoids = movieSpermatozoids.total_spermatozoids;
            this.ammountOfSpermatozoidsAssignedByUser = movieSpermatozoids.user_spermatozoids;
        },

        loadMovieLikes(movieLikes: MovieLikes): void {
            this.ammountOfLikes = movieLikes.total_likes;
            this.userLikesMovie = movieLikes.user_likes_movie;
        },

        getTabClassName(isActive: boolean): string {
            return isActive ? 'tablist__element--active' : 'tablist__element';
        }
    },

    mounted() {
        const player = new Plyr('#player');
        this.movie_id = this.$refs.player.getAttribute('data-movie-id');
        this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
        this.fetchMovieData();
        this.fetchSimilarMovies();
        this.emitter.on('pageHasBeenSelectedMovieComments', this.fetchComments);
    },

    computed: {

        similarMoviesTabIsSelected(): boolean {
            return this.selectedTab === MovieTheatreTab.SimilarMovies;
        },

        movieCommentsTabIsSelected(): boolean {
            return this.selectedTab === MovieTheatreTab.Comments;
        },

        similarMoviesClassName(): string {
            return this.getTabClassName(this.similarMoviesTabIsSelected);
        },

        movieCommentsClassName(): string {
            return this.getTabClassName(this.movieCommentsTabIsSelected);
        },

        spermatozoidsLabel(): string {
            const label = this.translator.translate('ammount_of_spermatozoids');
            const currentUserLabel = this.ammountOfSpermatozoidsAssignedByUser ?
                `(${this.translator.translate('your_spermatozoids')} : ${this.ammountOfSpermatozoidsAssignedByUser})` :
                '';
            return `${label} : ${this.ammountOfSpermatozoids} ${currentUserLabel}`;
        },

        averageRatingLabel(): string {
            const label: string = this.translator.translate('movie_average_rating');
            const value = this.rating || this.translator.translate('average_rate_not_available_yet');
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

};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.component('movie-roll-icon', MovieRollIcon);
app.component('television-icon', TelevisionIcon);
app.component('date-confirmed-icon', DateConfirmedIcon);
app.component('star-full-icon', StarFullIcon);
app.component('chart-growth-icon', ChartGrowthIcon);
app.component('spermatozoid-icon', SpermatozoidIcon);
app.component('download-icon', DownloadIcon);
app.component('star-rating', StarRating);
app.component('unknown-person-icon', UnknownPersonIcon);
app.component('like-icon', LikeIcon);
app.component('user-notification', UserNotification);
app.component('like-background-icon', LikeBackgroundIcon);
app.component('info-circle-icon', InfoCircleIcon);
app.component('relative-shadow-container', RelativeShadowContainer);
app.component('expect-circle', ExpectCircle);
app.component('comment-pen-icon', CommentPenIcon);
app.component('movies-list', MoviesList);
app.component('comment-list', CommentList);
app.mount("#app");