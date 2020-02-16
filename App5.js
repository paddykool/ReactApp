import React from "react"
import Product from "./components/Product"
import productsData from "./Data/products"


// const ProductComponents = productsData.map(
//   function (product) {
//     return (<Product name={product.name} description={product.description} price={product.price} />)
//   }
// )

// const ProductComponents = productsData.map( 
//   product => <Product key={product.id} name={product.name} description={product.description} price={product.price} /> 
// )

const ProductComponents = productsData.map( 
  product => <Product key={product.id }product={product} /> 
)


function App() {
  return (
    <div>
        {ProductComponents}
    </div>
  )
}

export default App