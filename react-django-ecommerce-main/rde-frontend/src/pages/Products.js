import React,{ useEffect, useState } from 'react'
import ProductCard from '../components/cards/ProductCard'

import './Products.css'
import MenuCard from '../components/cards/MenuCard'



function Products() {

    const [products, setProducts] = useState([]);

    const fetchData = () => {
        console.log("Fetching...");
    
        fetch('http://127.0.0.1:8000/api/product-list/')
          .then(response => response.json())
          .then(data => {
            console.log('Data:', data)
            setProducts(data)
          })
      }

      useEffect(() => fetchData(), [setProducts]);

    return (
        <div className='product-page'>
            <MenuCard />
            <div className='product-list'>
                <div className='product-container'>                    
                {products.map((product) =>(
                <div key={product.product_id}>
                    {console.log("product name:",product.product_name)}
                    <ProductCard 
                    productName={product.product_name}
                    productDesc={product.desc}
                    productPrice={product.price}
                    productImg={product.image}
                    />
                </div>
                )
                )}
                </div>
            </div>
        </div>
    )
}

export default Products
