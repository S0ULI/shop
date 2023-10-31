import prisma from "../prismadb";

//--------------------------------------
// Read
//--------------------------------------
export const getAllProducts = async (page: number = 1) => {    
    const productsInPage: number = 1;
    
    const products = await prisma.product.findMany({
        skip: (productsInPage * page),
        take: productsInPage
    });

    return products;
}