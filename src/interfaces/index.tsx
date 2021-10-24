export interface GameRequest{
    _id?: string,
    name: string,
    description?: string;
    type: string;
    thumbnailUrl: string;
    link: string;
    imageUrl?: string
    date: string;
    tags: string[];
}
