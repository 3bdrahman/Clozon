import React, { useEffect, useState } from 'react'
import "./Payment.css"
import {useStateValue} from "./StateProvider";
import CartItem from "./CartItem"
import {Link} from "react-router-dom"
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import { async } from '@firebase/util';
import {useNavigate} from "react-router-dom"
import axios from './axios'
import { db } from './firebase';
function Payment() {
  const [{cart,user},dispatch] = useStateValue();
  const stripe = useStripe();
  const elements= useElements();
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [succeeded,setSucceeded]= useState(false);
  const [processing,setProcessing]=useState("");
  const [clientSec, setClientSec]=useState(true);
  const navigate=useNavigate();
  useEffect(()=>{
    const getClientSec=async () =>{
      const res=await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      })
      setClientSec(res.data.clientSec)
    }
    console.log("the secret is ", clientSec)
    getClientSec();
  },[cart])
  console.log('the sec is >>', clientSec)

  const handleSubmit=async (e)=>{
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSec,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        cart: cart,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })
      setSucceeded(true)
      setError(null)
      setProcessing(false)
      dispatch({
        type: 'Empty_Cart',
      })
      navigate('/orders', { replace: true });
    })
    
  }
  const handleChange=(e)=>{
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "")
  }
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
                <div className='payment__cardDetails'>
                <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div className='payment__price'>
                    <CurrencyFormat
                      renderText={(value)=>(
                        <>
                          <h3>Order Total: {value}</h3>
                        </>
                      )}
                      decimalScale={2}
                      value={getCartTotal(cart)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>processing</p> : "Buy now"}</span>
                    </button>
                    <br/>
                    <small>hint: keep typing 424242.... to test payement functionality</small>
                </div>
                {error && <div>{error}</div>}
                </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment