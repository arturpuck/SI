import { MoviesListResponse } from "@interfaces/movies/MoviesListResponse";

export interface MoviesCurrentPage {
    moviesData: MoviesListResponse;
    currentPage: number;
}