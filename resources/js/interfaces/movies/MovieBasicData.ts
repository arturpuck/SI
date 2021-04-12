type numericBoolean = 0 | 1;

import { BasicPornstarData } from '@interfaces/pornstars/BasicPornstarData.ts';

interface SpermatozoidsData {
    total_spermatozoids: number,
    user_spermatozoids?: number
}

interface LikeStatus {
    total_likes: number,
    user_likes_movie: boolean
}

export interface MovieBasicData {
    added_at: string,
    duration: string,
    id?: number,
    is_translated_to_polish?: numericBoolean,
    pornstars?: BasicPornstarData[],
    title: string,
    views: number,
    spermatozoids?: SpermatozoidsData,
    user_rate?: number,
    rating?: number
    likes?: LikeStatus
}