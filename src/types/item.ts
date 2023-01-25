interface ImgSrc {
    src: string;
    alt: string;
}

interface Details {
    dimmentions: {
        width: number;
        height: number
    },
    size: number,

    description: string,
    recommendations: ImgSrc[];
}

type Currency = "USD";

export interface Item {
    name: string;
    category: string;
    price: number;
    currency: Currency;
    image?: any;
    bestseller: boolean;
    featured: boolean;
    details: Details | null;
}