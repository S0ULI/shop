import { getAllProducts } from "./lib/products-util"

interface HomeProps {
  searchParams: {
    page: string | undefined
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const pageParam: string | undefined = searchParams.page;
  let page: number = 1
  if(pageParam){
    page = +pageParam
  }
  const { data } = await getAllProducts(page)
  console.log(data);
  
  return (
    <main>
      <h1>home page</h1>
    </main>
  )
}
