import React from 'react';
import logo from './imgs/logo.png';
import "./Header.css";
import {Link,useNavigate} from "react-router-dom"
import {auth} from './firebase'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useStateValue } from './StateProvider';
function Header() {
  const[{cart,user}]=useStateValue();
  const navigate=useNavigate();
  const handleAuthentication=()=>{
    if(user){
        auth
            .signOut();
        navigate('/');
    }
  }
  return (
    <nav className='header'>


        {/* logo  */}
        <Link to="/">
        <img className='header__logo' src={logo} alt='logo'/>
        </Link>


        {/* Search bar */}
        <div className='header__search'>
        <input type="text" className ="header__searchBar"/>
        <SearchIcon className='header__searchIcon'/>
        </div>
        
        
        {/* sign in , orders */}
       
        <div className='header__nav'>
            {/* Signing link */}
            <Link to={!user && "/login"} className="header__link">
              <div  className='header__navOption'>
                  <span className='header__optionLineOne'>Hello,{user?.email}</span>
                  <span onClick={handleAuthentication} className='header__optionLineTwo '>{user?'Sign Out':'Sign In' } </span>
              </div>
            </Link>
            {/* orderes link */}
            <Link to="/login" className="header__link">
              <div className='header__navOption'>
                  <span className='header__optionLineOne'>Returns</span>
                  <span className='header__optionLineTwo'>& Orders</span>
              </div>
            </Link>
            {/* orders basket */}
            <Link to="/checkout" className="header__link">
              <div className='header__navOption'>
                  <span className='header__optionLineTwo header__cartCount'>{cart?.length}</span>
                  <ShoppingCartIcon className='header__cartIcon'/>
              </div>
            </Link>
        </div>
         

    </nav>
  )
}

export default Header