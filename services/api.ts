import { TrendingResult, MediaType } from "@/interfaces/apiResults";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getTrending = async (): Promise<TrendingResult> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?language=pt-BR&api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
    return data;
};

export const getSearchResuts = async (query: string): Promise<TrendingResult> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?language=pt-BR&api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
    const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?language=pt-BR&api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
};
