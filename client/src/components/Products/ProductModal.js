import React from 'react'
import Modal from "react-modal";


const ProductModal = (props) => {
    const {product , closeModal} = props;
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
            <span class="close" onClick={closeModal}>&times;</span>
            <div className="product-info">
                <img src={product.image} alt={product.title}/>
                <div className="detail">
                    <p><span>name</span>: {product.title}</p>
                    <p><span>description</span>: {product.description}</p>
                    <p><span>price:</span> ${product.price}</p>
                    <button>add to cart</button>
                </div>
            </div>
         </Modal>
  )
}

export default ProductModal
