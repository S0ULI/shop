// used in api/products/route
interface Product {
    id: string;
    slug: string;
    title: string;
    image: string;
    price: number;
    description: string | null;
    category: string | null;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

interface FetchOptions {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    headers: {
        'Content-Type': 'application/json'
    };
    body?: string
}