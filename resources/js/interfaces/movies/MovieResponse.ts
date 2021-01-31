type numericBoolean = 0 | 1;

interface MovieResponsePornstarData {
    id : number,
    nickname : string
}

export interface MovieResponse{
    created_at : string,
    duration : string,
    id : number,
    is_translated_to_polish : numericBoolean,
    pornstars? : MovieResponsePornstarData[],
    title : string,
    views: number,
    votes_count: number,
    votes_summary: number
}