// type
import { FetchResult } from "@/interfaces";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

// -------------------------------------------
// function
// -------------------------------------------
export const getAllProducts = async (page: number | null): Promise<FetchResult> => {
  // change the revalidation for deployment
  const res = await fetch(`${domain}/api/products${page ? '?page=' + page : ''}`, {next: { revalidate: 1 }});
  if (!res.ok) {
    throw new Error("can't fetch data from the api - fetching failed");
  }
  const results = await res.json() as FetchResult

  return results
};
