export interface TrendingResult {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

export interface Result {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title?: string;
    original_language: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date?: string;
    vide?: boolean;
    vote_average: number;
    vote_count: number;
    name?: string;
    original_name?: string;
    first_air_date?: string;
    origin_country?: string[];
}

export enum MediaType {
    Movie = "movie",
    Tv = "tv",
}