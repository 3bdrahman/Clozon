import React from 'react'
import "./Product.css";
function product(props) {
  return (
    <div className='product'>
    <div className='product__info'>
      <p>
      {props.title}
      {/* Atomic Habits: An Easy & Proven Way to 
      Build Good Habits & Break Bad Ones  */}
      
      </p>
      <p className='product__price'>
        <small>$</small>
        <strong>{props.price}</strong>
      </p>
      <div className='product__rating'>
      {/* draw a star as many as rating  */}
      { Array(props.rating)
        .fill()
        .map((_,i)=>(
          <p>⭐</p>
        ))}
        
      
      
       
      </div>
    </div>
    
    <img src={props.img} 
      />
      <button>Add to Cart</button>
      </div>
    
  )
}

export default product