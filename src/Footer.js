import React from 'react'
import "./Footer.css"
function Footer() {
    const btn =document.getElementById("scrollUp")
    const rootElem = document.documentElement;
    const topFunc=()=>{
        rootElem.scrollTo({
            top: 0,
            behavior: "smooth"
          })
    }
  return (
    
    <div className='footer'>
    <button onClick={topFunc} id='scrollUp'><span>Back to top</span></button>
    <div className='footer__links'>
    <div className='footer_linksCol'>
            <h3>Get to know us</h3>
            <ul>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>About Amazon</a></li>
                <li><a href='#'>Investor Relations</a></li>
                <li><a href='#'>Amazon Devices</a></li>
                <li><a href='#'>Amazon Science</a></li>
            </ul>
        </div>
        <div className='footer_linksCol'>
            <h3>Make Money with Us</h3>
            <ul>
                <li><a href='#'>Sell products on Amazon</a></li>
                <li><a href='#'>Sell on Amazon Business</a></li>
                <li><a href='#'>Sell apps on Amazon</a></li>
                <li><a href='#'>Advertise Your Products</a></li>
                <li><a href='#'>Self-puplish with us</a></li>
                <li><a href='#'>Host an Amazon Hub</a></li>
            </ul>
        </div>
        <div className='footer_linksCol'>
            <h3>Amazon Payment Products</h3>
            <ul>
                <li><a href='#'>Amazon Business Card</a></li>
                <li><a href='#'>Shop with Points</a></li>
                <li><a href='#'>Reload Your Balance</a></li>
                <li><a href='#'>Amazon Currency Converter</a></li>
                
            </ul>
        </div>
        <div className='footer_linksCol'>
            <h3>Let Us Help You</h3>
            <ul>
                <li><a href='#'>Amazon & Covid-19</a></li>
                <li><a href='#'>Your Account</a></li>
                <li><a href='#'>About Orders</a></li>
                <li><a href='#'>Shipping Rates</a></li>
                <li><a href='#'>Returns</a></li>
                <li><a href='#'>Amazon Assistant</a></li>
            </ul>
        </div>
    </div>
       
    </div>
  )
}

export default Footer