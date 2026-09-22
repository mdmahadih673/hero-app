export interface IApp {
    image: string;
    title: string;
    companyName: string;
    id: number;
    description: string;
    size: number;
    reviews: string;
    ratingAvg: number;
    downloads: string;
    ratings: {
        name: string;
        count: number;
    }[];
}