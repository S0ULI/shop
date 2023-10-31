// => localhost:3000/api/products

import { getAllProducts } from '@/prisma/db/products';
import { Product } from '@prisma/client';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const pageParam = searchParams.get('page');
  let page: number = 1;
  if (pageParam) {
    page = +pageParam;
  }
  try {
    const products: Product[] = await getAllProducts(page);
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json(
      { message: 'cant get all products - api failed', Error: err },
      { status: 500 }
    );
  }
};
