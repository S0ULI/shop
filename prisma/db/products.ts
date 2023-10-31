import prisma from "../prismadb";

//--------------------------------------
// Read
//--------------------------------------
export const getAllProducts = async (page: number = 1) => {    
    const productsInPage: number = 1;

    const products = await prisma.product.findMany({
        skip: (productsInPage * (page - 1)),
        take: productsInPage,
    });
    console.log(products);
    
    const totalResults = await prisma.product.count()
    const totalPages = Math.ceil(totalResults / productsInPage)
    
    return { products, totalPages };
}