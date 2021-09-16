import { BasicPornstarData } from '@interfaces/pornstars/BasicPornstarData';
import { MovieRating } from '@interfaces/movies/MovieRating';
import { MovieSpermatozoids } from '@interfaces/movies/MovieSpermatozoids';
import { MovieLikes } from '@interfaces/movies/MovieLikes';

export interface MovieBasicData {
    created_at: string,
    duration: string,
    id?: number,
    isTranslatedToPolish: boolean,
    pornstars?: BasicPornstarData[],
    title: string,
    views: number,
    spermatozoids?: MovieSpermatozoids,
    rating?: MovieRating,
    likes?: MovieLikes
}
