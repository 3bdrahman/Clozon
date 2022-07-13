import React from 'react'
import './Home.css'
import banner from './imgs/banner.jpg'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className="home__bannerImage" src={banner} alt = 'banner'/>
        
         <div className='home__row'>
         <Product 
         title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
         price={11.9}
         rating={5}
         img='https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg'
         />
         <Product 
         title="Bluetooth Speaker: Bluetooth 5.0 Wireless Portable Speaker with 10W Stereo Sound, Party Speakers with Ambient RGB Light"
         price={21.5}
         rating={4}
         img='https://m.media-amazon.com/images/I/81PZVF0WosS._AC_SL1500_.jpg'
         />
         </div> 

         <div className='home__row'>
         <Product 
         title="Smart Watch for Android/Samsung/iPhone, Activity Fitness Tracker with IP68 Waterproof"
         price={43.99}
         rating={2}
         img='https://m.media-amazon.com/images/I/51BzXyGIuzL._AC_SL1000_.jpg'
         />
         <Product 
         title="Mechanical Gaming Keyboard, Wired/Wireless/Bluetooth Keyboard, 61 Keys RGB Backlit "
         price={43.99}
         rating={4}
         img='https://m.media-amazon.com/images/I/61AnP7HbarL._AC_SY450_.jpg'
         />
          <Product 
         title="Robot Vacuum with Automatic Dirt Disposal - Empties Itself for up to 60 days, Wi-Fi Connected "
         price={790.00}
         rating={5}
         img='https://m.media-amazon.com/images/I/71fbkQt+ZAS._AC_SY450_.jpg'
         />
         </div> 

         <div className='home__row'>
         <Product 
         title="Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro "
         price={2154.00}
         rating={5}
         img='https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SX355_.jpg'
         />
         </div> 
         
        

        
      </div>
    </div>
  )
}

export default Home