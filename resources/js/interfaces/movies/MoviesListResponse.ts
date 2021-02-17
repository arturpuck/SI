import {MovieBasicData} from '@interfaces/movies/MovieBasicData';

export interface MoviesListResponse{
    totalMovies : number,
    movies : MovieBasicData[]
}