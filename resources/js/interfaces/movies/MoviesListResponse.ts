import {MovieResponse} from '@interfaces/movies/MovieResponse.ts';

export interface MoviesListResponse{
    totalMovies : number,
    movies : MovieResponse[]
}