import React from 'react'
import CartItem from './CartItem';
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
  const[{cart, user}]=useStateValue();
  return (
    <div className='checkout'>
    <div className='checkout__left'>
        <div>
        <h3>Hello, {user?.email}</h3>
          <h2 className='checkout__title'>
            Your shopping cart
          </h2>
          {cart.map(item => (
            <CartItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
    </div>
    <div className='checkout__right'>
      <h2>
        <Subtotal/>
      </h2>
    </div>
    </div>
  )
}

export default Checkout