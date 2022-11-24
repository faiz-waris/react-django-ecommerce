import React from 'react'

import './ProductCard.css'

function ProductCard({
    productName,
    productDesc,
    productPrice,
    productImg
}) {
    return (
            <div className="card">
                <img src={productImg} className='card__img' alt="" />
                
                     <div className="card__data">
                         <h1 className="card__title">{productName.slice(0,20)}..</h1>
                         <span className="card__preci">₹{productPrice}</span>
                         <p className="card__description">{productDesc}</p>
                         <a href="/" className="card__button">Buy Now</a>
                     </div>            
        </div>
    )
}

export default ProductCard
