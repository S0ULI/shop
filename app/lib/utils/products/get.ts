// ------------------ Type -------------------
import { FetchOptions, FetchResult } from "@/interfaces";

// ------------ Fetching options -------------
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const options: FetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}

// -------------------------------------------
// ------------------- GET -------------------
// -------------------------------------------
export const getAllProducts = async (page: number | null): Promise<FetchResult> => {
  // change the revalidation for deployment
  const res = await fetch(`${domain}/api/products${page ? '?page=' + page : ''}`, options);
  if (!res.ok) {
    throw new Error("can't fetch data from the api - fetching failed");
  }
  const results = await res.json() as FetchResult

  return results
};
