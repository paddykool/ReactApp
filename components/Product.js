import React from "react"

function Product(props){
    return (
        <div key={props.product.id}>
            <br />
            <h1>{props.product.name}</h1>
            <h2>{props.product.description}</h2>
            <p>{props.product.price.toLocaleString("en-EN",{ style: "currency", currency: "EUR" })}</p>
            <hr />
        </div>
    )
}



export default Product