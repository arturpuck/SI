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
import UserNotification from '@jscomponents/user_notification.vue';
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
import PageListUpdate from '@interfaces/PageListUpdate';
import Comment from '@interfaces/Comment';
import CommentValidator from '@jsmodules/validators/comment_validator';
import Translator from "@jsmodules/translator.js";
import MovieHint from "@jscomponents/movies/movie_hint.vue";
import DescriptionIcon from "@svgicon/description_icon.vue";

const settings = {

    components: {
        MovieRollIcon,
        TelevisionIcon,
        DateConfirmedIcon,
        StarFullIcon,
        ChartGrowthIcon,
        SpermatozoidIcon,
        DownloadIcon,
        StarRating,
        UnknownPersonIcon,
        LikeIcon,
        UserNotification,
        LikeBackgroundIcon,
        InfoCircleIcon,
        RelativeShadowContainer,
        ExpectCircle,
        CommentPenIcon,
        MoviesList,
        CommentList,
        MovieHint,
        DescriptionIcon
    },

    data() {

        return {
            csrfToken: undefined,
            ammountOfLikes: undefined,
            views: undefined,
            addedAt: undefined,
            moviePornstars: undefined,
            rating: undefined,
            movie_id: 0,
            showMovieDesktopFetchingDecoration: true,
            showSimilarMoviesFetchingDecoration: true,
            ammountOfSpermatozoids: undefined,
            ammountOfSpermatozoidsAssignedByUser: undefined,
            userRate: undefined,
            userLikesMovie: undefined,
            selectedTab: MovieTheatreTab.SimilarMovies,
            showCommentsFetchingDecoration: true,
            commentsPerPage: 10,
            translator: Translator,
            movieTitle: '',
            currentFrameForMovieHint: 1,
            showMovieHint: false,
            movieFrameCoordinances: { x: 0, y: 0 },
            movieFrame: undefined,
            duration: '00:00:00',
            movieFrameCurrentTime: '00:00:00',
            movieTimeInSeconds: 0
        }
    },

    methods: {

        showNotification: NotificationFunction,

        validateComment: CommentValidator,

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

                const savingChildComment = comment.hasOwnProperty('parentCommentID');
                
                const requestData = {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': this.csrfToken,
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(requestBody)
                };

                const response = await fetch('/movie/add-comment', requestData);

                switch (response.status) {
                    case 200: case 201:
                        const commentsUpdateList = await response.json();
                        if(savingChildComment){
                           this.loadChildComments(commentsUpdateList, comment.parentCommentID);
                        }
                        else {
                            this.loadRootComments(commentsUpdateList);
                        }
                        this.showNotification(this.translator.translate('comment_added'));
                        break;

                    case 500:
                        throw new Error('the_requested_data_is_probably_ok_but_a_server_error_occured');
                        break;

                    case 429:
                        throw new Error('because_of_safety_reasons_adding_comments_is_limited_to_2_per_minute');
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

        async toggleLike() {


            const requestBody = {
                movie_id: this.movie_id,
                user_likes_movie: Number(!this.userLikesMovie)
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
                const response = await fetch('/movie/toggle-like', requestData);

                switch (response.status) {
                    case 200:
                        const movieLikesData: MovieLikes = await response.json();
                        this.loadMovieLikes(movieLikesData);
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
                    const moviesList: PageListUpdate<MovieBasicData> = await response.json();
                    this.loadSimilarMovies(moviesList);
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

        fetchRootComments(pageNumber: number = 1) : void{
            const parameters = `movie_id=${this.movie_id}&page=${pageNumber}&per_page=${this.commentsPerPage}`;
            this.fetchComments(parameters)
                .then(comments => this.loadRootComments(comments));
        },

        fetchChildComments(parentCommentId: number, pageNumber: number = 1, commentsPerPage : number = 5) : void {
            const parameters = `page=${pageNumber}&per_page=${commentsPerPage}&parent_comment_id=${parentCommentId}`;
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
                const response = await fetch(`/movie/comments?${parametersList}`, requestData);
                
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
                this.hideCommentsFetchingDecoration();
            }
            
        },

        loadChildComments(comments : PageListUpdate<Comment>, parentCommentId : number) : void {
           this.emitter.emit(`childCommentsReceived${parentCommentId}`, comments);
        },
        
        loadRootComments(commentsUpdate: PageListUpdate<Comment> | Comment): void {
            this.emitter.emit('updateComments', commentsUpdate);
            this.emitter.emit('resetCommentBox');
        },

        loadSimilarMovies(moviesList: PageListUpdate<MovieBasicData>): void {

            this.emitter.emit('updateMoviesList', moviesList);
        },

        loadMovieData(movie: MovieBasicData): void {
            this.views = movie.views;
            this.addedAt = movie.created_at;
            this.moviePornstars = movie.pornstars;
            this.movieTitle = movie.title;
            this.duration = movie.duration;
            this.loadMovieRating(movie.rating);
            this.loadMovieSpermatozoids(movie.spermatozoids);
            this.loadMovieLikes(movie.likes);
            this.initiateImageHintForMovieProgressBar();
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
            this.fetchRootComments();
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
            this.rating = movieRating.overallRating;
            this.emitter.emit('starRateUpdateRate', movieRating.userRating);
        },

        loadMovieSpermatozoids(movieSpermatozoids: MovieSpermatozoids): void {
            this.ammountOfSpermatozoids = movieSpermatozoids.totalSpermatozoids;
            this.ammountOfSpermatozoidsAssignedByUser = movieSpermatozoids.userSpermatozoids;
        },

        loadMovieLikes(movieLikes: MovieLikes): void {
            this.ammountOfLikes = movieLikes.totalLikes;
            this.userLikesMovie = movieLikes.userLikesMovie;
        },

        getTabClassName(isActive: boolean): string {
            return isActive ? 'tablist__element--active' : 'tablist__element';
        },

        convertTimeStringToSeconds(timeString: string): number {
            timeString = timeString.padStart(8, '00:');
            const timeIngridients = timeString.split(":");
            let summary = 0;
            const numbersOfSeconds = [3600, 60, 1];
            timeIngridients.forEach((element, arrayIndex) => {
                summary += Number(element) * numbersOfSeconds[arrayIndex];
            });
            return summary;

        },

        convertSecondsToTimeString(seconds: number): string {
            let date = new Date(0);
            date.setSeconds(seconds);
            let timeString = date.toISOString().substring(11, 19);
            const ingridients = timeString.split(":");
            if ((ingridients.length === 3) && (ingridients[0] == '00')) {
                timeString = timeString.substring(3, 8);
            }
            return timeString;
        },

        setCurrentFrameForMovieHint(seekValue: string): void {
            let result = Math.floor(Number(seekValue));
            result = (result > 0) ? result : 1;
            result = (result > 100) ? 100 : result;
            this.currentFrameForMovieHint = result;
        },

        movieProgressBarHandler(event): void {
            this.setCurrentFrameForMovieHint(event.target.getAttribute('seek-value'));
            this.setTimeForMovieFrame();
            let yOffset = window.innerWidth < 800 ? 15 : '1.5vw'
            let y: string | number = event.clientY + window.scrollY - this.movieFrame.offsetHeight - 30;
            let x: string | number = event.clientX + window.scrollX - Math.floor(0.5 * this.movieFrame.offsetWidth);
            x = (x < 0) ? 0 : x;
            x = `${x}px`;
            y = `${y}px`;
            this.movieFrameCoordinances = { x, y };
        },

        setTimeForMovieFrame(): void {
            const currentTime = Math.floor(this.movieTimeInSeconds * this.currentFrameForMovieHint / 100);
            this.movieFrameCurrentTime = this.convertSecondsToTimeString(currentTime);
        },

        initiateImageHintForMovieProgressBar() {
            this.movieTimeInSeconds = this.convertTimeStringToSeconds(this.duration);
            document.getElementsByClassName('plyr__tooltip')[0].remove(); //yeah I know this soulution is not the most elegant one however this is a temporary situation
            const progressBar = document.querySelector("[data-plyr='seek']");
            this.movieFrame = document.getElementById('movie-hint');
            progressBar.addEventListener('mousemove', this.movieProgressBarHandler);
            progressBar.addEventListener('mouseenter', () => this.showMovieHint = true);
            progressBar.addEventListener('mouseleave', () => this.showMovieHint = false);
        }
    },

    mounted() {
        const player = new Plyr('#player');
        this.movie_id = Number(this.$refs.player.getAttribute('data-movie-id'));
        this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
        this.fetchMovieData();
        this.fetchSimilarMovies();
        this.emitter.on('pageHasBeenSelectedMovieComments', this.fetchRootComments);
        this.emitter.on('saveComment', this.saveMovieComment);
        this.emitter.on('showCommentAnswears', (parameters : []) => this.fetchChildComments(...parameters));
    },

    computed: {


        movieFrameDescription(): string {
            return `${Translator.translate('movie_frame')} : ${this.movieTitle}`;
        },

        similarMoviesTabIsSelected(): boolean {
            return this.selectedTab === MovieTheatreTab.SimilarMovies;
        },

        anyPornstarsPlayRole(): boolean {
            return this.moviePornstars && (this.moviePornstars.length > 0);
        },

        cancelLike(): string {
            return this.translator.translate('cancel_like');
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
//@ts-ignore
const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");