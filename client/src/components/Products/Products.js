import React,{useState} from 'react'
import "../../css/Products/Products.css";
import ProductModal from './ProductModal';

const Products = (props) => {
    const {products} = props;
    const [product,setProduct]=useState("");

    const openModal=(product)=>{
        setProduct(product)
    }

    const closeModal=()=> {
        setProduct("")
    }
  return (
    <div className="products-wrapper">
         {products.map(product => (
                    <div className="product-item" key={product.id}>
                            <a href="#" onClick={()=>{openModal(product)}}>
                            <img src={product.image} className="product-img" alt={product.title} />
                            </a>
                            <div className="product-desc">
                                <p>{product.title}</p>
                                <span>${product.price}</span>
                            </div>
                            <button>add To Cart</button>
                    </div>
                )        
             )
         }
         
         <ProductModal product={product}  closeModal={closeModal}/>
    </div>
  )
}

export default Products