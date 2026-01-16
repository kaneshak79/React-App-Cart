import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import './Products.css'


function Products({ cart, setCart }) {
    
    const [product,setProduct]=useState([] )
    
     const fetchData = async () => {
        try{
            const response=await axios.get(
                "https://fakestoreapi.com/products"
            );
            
            setProduct(response.data);
        }
        catch(error){
            console.log(error);
            
        }
     }
      useEffect(()=>{
        fetchData();
     },[])
     const handleAdd = (product) => {
    const alreadyAdded = cart.some(item => item.id === product.id);

    if (alreadyAdded) {
      alert("Item already added to the cart");
      return;
    }

    setCart(prev => [...prev, product]);
  };

return (
  <div className="products-container">
    {product.map((product) => (
      <div className="product-row" key={product.id}>
        
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-details">
          <div className="product-title">{product.title}</div>
          <div className="product-price">₹ {product.price}</div>
          {/* <button onClick={handleAdd}>Add to Cart</button> */}
          <button onClick={() => handleAdd(product)}>Add to Cart</button>

        </div>

      </div>
    ))}
  </div>
);

   

  
}

export default Products
