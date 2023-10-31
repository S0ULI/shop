// ----------------- Custom ------------------
import Cards from "@components/Cards/Cards";
import { getAllProducts } from "@myLib/utils/products"

// ------------------ Type -------------------
interface HomePropsProps {
  searchParams: {
    page: string | undefined
  }
}

// ---------- Route Segment Config -----------
export const revalidate = 1;

// -------------------------------------------
// ---------------- Component ----------------
// -------------------------------------------
export default async function Home({ searchParams }: HomePropsProps) {
  const pageParam: string | undefined = searchParams.page;
  let page: number = 1
  if(pageParam){
    page = +pageParam
  }
  const { data, totalPages } = await getAllProducts(page)
  
  return (
    <main>
      <h1>home page</h1>
      <Cards data={data} />
      <span>currentPage = {page}</span> 
      <span> totalPages = {totalPages}</span>
    </main>
  )
}
