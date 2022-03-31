import { useContext } from "react"

import { ProductsContext } from "../../contexts/products.context"

import Products from "../../components/products/products.component"

import './shop.styles.scss'

const Shop = ()=>{
    const {products} = useContext(ProductsContext)  
    console.log(products)
    return(
       <div className="products-container">
          {products.length ? products.map(products=>(
              <Products key={products.id} products={products} />
          )) : ''}
       </div>
    )
}

export default Shop