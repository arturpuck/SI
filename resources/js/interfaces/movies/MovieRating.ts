type SingleUserRatingValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface MovieRating {
    overall_rating: number,
    user_rating: SingleUserRatingValue,
}