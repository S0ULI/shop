// ------------------- Lib -------------------
import prisma from "@/prisma/prismadb";
// ------------------ Type -------------------
import { FetchResult } from "@/interfaces";

//--------------------------------------
// -------------- GET All --------------
//--------------------------------------
export const getAllProducts = async (page: number = 1): Promise<FetchResult> => {    
    const productsInPage: number = 10;

    const data = await prisma.product.findMany({
        skip: (productsInPage * (page - 1)),
        take: productsInPage,
    });
    
    const totalResults = await prisma.product.count()
    const totalPages = Math.ceil(totalResults / productsInPage)
    
    return { data, totalPages };
}