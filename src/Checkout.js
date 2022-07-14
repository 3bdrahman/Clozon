import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
function Checkout() {
  return (
    <div className='checkout'>
    <div className='checkout__left'>
        <div>
          <h2 className='checkout__title'>
            Your shopping cart
          </h2>
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