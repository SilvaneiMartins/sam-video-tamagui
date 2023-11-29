import { MediaType } from '@/interfaces/apiResults';

export type Favorite = {
    id: string;
    mediaType: MediaType;
    name: string;
    thumb: string;
};
