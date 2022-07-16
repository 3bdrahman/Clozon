import { Button } from '@mui/material'
import React from 'react'
import "./CartItem.css" 
import { useStateValue } from './StateProvider'
function CartItem(props) {
    const[{cart},dispatch]=useStateValue();
    const removeFromCart=(cart)=>{
            dispatch({
                type: 'Remove_From_Cart',
                id: props.id,
            })
    }
  return (
    <div className='cartItem'>
        <img className='cartItem__image' src={props.image}/>
        <div className='cartItem__info'>
            <p className='cartItem__title'>
                {props.title}
            </p>
            <p className='cartItem__price'>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className='cartItem__rating'>
                {Array(props.rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
            <button className='cartItem__remove' onClick={removeFromCart}><span>Remove Item</span></button>
        </div>
    </div>
  )
}

export default CartItem