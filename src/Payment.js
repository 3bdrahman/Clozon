import React from 'react'
import "./Payment.css"
import {useStateValue} from "./StateProvider";
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
function Payment() {
  const [{cart,user},dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment__container'>
          <h1>Proceed with (<Link to="/checkout">{cart?.length} items</Link>)</h1>
            {/* address */}
            <div className='payment__section'>
              <div className='payment__title'>
                  <h3>Delivery Address</h3>
              </div>
              <div className='payment__address'>
                <p>{user?.email}</p>
                <p>123 Broadway St.</p>
                <p>New York, NY</p>
              </div>
            </div>
            {/* Review order*/ }
            <div className='payment__section'>
              <div className='payment__title'>
                  <h3>Review order </h3>
              </div>
              <div className='payment__order'>
                  {cart.map(item=>(
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
            {/* card information */}
            <div className='payment__section'>
                <div className='payment__title'><h3>
                Payment Card
                </h3></div>
            </div>
        </div>
    </div>
  )
}

export default Payment