import { Product } from "@prisma/client";

// ------------------
type FetchResult = { data: Product[], totalPages: number }
// imported in
// prisma/db/products
// api/products/route
// lib/products-util
//------------------

// -----------------
// imported in
interface FetchOptions {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    headers: {
        'Content-Type': 'application/json'
    };
    body?: string
}