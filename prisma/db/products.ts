import prisma from "../prismadb";

// type
import { FetchResult } from "@/interfaces";

//--------------------------------------
// Read
//--------------------------------------
export const getAllProducts = async (page: number = 1): Promise<FetchResult> => {    
    const productsInPage: number = 1;

    const data = await prisma.product.findMany({
        skip: (productsInPage * (page - 1)),
        take: productsInPage,
    });
    
    const totalResults = await prisma.product.count()
    const totalPages = Math.ceil(totalResults / productsInPage)
    
    return { data, totalPages };
}