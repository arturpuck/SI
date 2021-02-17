type numericBoolean = 0 | 1;

import {BasicPornstarData} from '@interfaces/pornstars/BasicPornstarData.ts';

export interface MovieBasicData{
    created_at : string,
    duration : string,
    id : number,
    is_translated_to_polish : numericBoolean,
    pornstars? : BasicPornstarData[],
    title : string,
    views: number,
    votes_count: number,
    votes_summary: number
}