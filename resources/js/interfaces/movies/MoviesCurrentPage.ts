import { MoviesListResponse } from "@interfaces/movies/MoviesListResponse.ts";

export interface MoviesCurrentPage {
    moviesData: MoviesListResponse;
    currentPage: number;
}