import React from 'react'
import "../../css/Products/Products.css";

const Products = (props) => {
    const {products} = props;
    console.log(products);
  return (
    <div className="products-wrapper">
         {products.map(product => (
                    <div className="product-item" key={product.id}>
                            <img src={product.image} className="product-img" alt={product.title} />
                            <div className="product-desc">
                                <p>{product.title}</p>
                                <span>{product.price}</span>
                            </div>
                            <button>add To Cart</button>
                    </div>
                )        
             )
         }
    </div>
  )
}

export default Products