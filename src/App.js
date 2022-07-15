
import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
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
        {/* checkout */}
          <Route path='/checkout' element={<>
            <Header/>
            <Checkout/>
          </>}></Route>
            {/* Login */}
          <Route path='/login' element={
            <Login/>
          }></Route>
          {/* default: Homepage */}
          <Route path="/" element={<>
          <Header/>
          <Home/>
          </>}>
            
          </Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
