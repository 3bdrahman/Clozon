import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';
function Product(props) {
  const [{cart},dispatch]=useStateValue();
  console.log("this is the cart", cart)
  const addToCart = ()=>{
        dispatch({
          type: 'Add_To_Cart',
          item:{
            id: props.id,
            title: props.title,
            image: props.image,
            price:props.price,
            rating:props.rating,
          },
        });
  };
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
      <button onClick={addToCart}>Add to Cart</button>
      </div>
    
  )
}

export default Product