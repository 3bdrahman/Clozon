
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import Payment from './Payment';
import Orders from './Orders';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
const pk = loadStripe(
  "pk_test_51LMN7kIehvswrML9fQUvbCZNYLRYdfaBbSN2fSvzUtQ0pp7c6S0ve6asnjecA9E8hPtPk6Fcsja775XHlTNfZrci00aP0t7tRz"
)
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(()=>{
    // it will only run once the app loads 
    auth  
        .onAuthStateChanged(authUser =>{
          console.log("user : ", authUser);
          if(authUser){
              dispatch({
                type: 'Set_User',
                user: authUser
              })
          }else{
            dispatch({
              type: 'Set_User',
              user: null
            })
          }
        })
  },[])
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/orders' element={
          <>
            <Header/>
            <Orders/>
          </>
        }></Route>
        {/* checkout */}
          <Route path='/checkout' element={<>
            <Header/>
            <Checkout/>
          </>}></Route>
            {/* Login */}
          <Route path='/login' element={
            <Login/>
          }></Route>
          {/* Payments root */}
          <Route path='/payment' element={<>
            <Header/>
            <Elements stripe={pk}>
            <Payment/>
            </Elements>
            
          </>}> 
            
          </Route>
          {/* default: Homepage */}
          <Route path="/" element={<>
          <Header/>
          <Home/>
          <Footer/>
          </>}>
            
          </Route>
          
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
