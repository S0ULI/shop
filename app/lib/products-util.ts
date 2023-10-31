import { Product } from "@prisma/client";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const getAllProducts = async (page: number | null): Promise<{ products: Product[], totalPages: number }> => {
  // change the revalidation for deployment
  const results = await fetch(`${domain}/api/products${page ? '?page=' + page : ''}`, {next: { revalidate: 1 }});
  if (!results.ok) {
    throw new Error("can't fetch data from the api - fetching failed");
  }
  const data: { products: Product[], totalPages: number } = await results.json();

  return data
};
