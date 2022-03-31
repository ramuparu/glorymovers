import { createContext, useState } from "react";

import productsData from '../shop-data.json'
export const ProductsContext = createContext({
    products : []
})

export const ProductsProvider = ({children})=>{
     
    const [products,setProducts] = useState(productsData)

    const value = {products,setProducts}

    return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
}