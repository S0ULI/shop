// === http://localhost:3000//api/products ===

// ------------------- Lib -------------------
import { NextResponse } from 'next/server';
// ----------------- Custom ------------------
import { getAllProducts } from '@myDb/products';
// ------------------ Type -------------------
import { FetchResult } from '@/interfaces';

// -------------------------------------------
// ------------------- GET -------------------
// -------------------------------------------
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const pageParam = searchParams.get('page');
  let page: number = 1;
  if (pageParam) {
    page = +pageParam;
  }
  try {
    const { data, totalPages }: FetchResult = await getAllProducts(page);
    return NextResponse.json({data, totalPages});
  } catch (err) {
    return NextResponse.json(
      { message: 'cant get all products - api failed', Error: err },
      { status: 500 }
    );
  }
};
