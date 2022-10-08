import React from 'react'
import "../../css/Filter/filter.css"

const Filter = (props) => {
    const {handleFilterBySize,handleFilterBySort,size,sort }=props;
  return (
    <div className="filter-wrapper">
        <h2 className="filter-title">Filter</h2>
        <div className="num-of-products">Number of products</div>
        <div className="filter-by-size">
            <span>filter</span>
            <select value={size}  className="filter-select" onChange={handleFilterBySize}>
                <option value="ALL">ALL</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>    
        </div>
        <div className="filter-by-size">
            <span>Order</span>
            <select  className="filter-select" onChange={handleFilterBySort} value={sort}>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>    
        </div>
    </div>
  )
}

export default Filter