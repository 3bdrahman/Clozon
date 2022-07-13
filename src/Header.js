import React from 'react';
import logo from './imgs/logo.png';
import "./Header.css";
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
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
            <Link to="/login" className="header__link">
              <div className='header__navOption'>
                  <span className='header__optionLineOne'>Hello,</span>
                  <span className='header__optionLineTwo'> Sign In</span>
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
                  <span className='header__optionLineTwo header__cartCount'>0</span>
                  <ShoppingCartIcon className='header__cartIcon'/>
              </div>
            </Link>
        </div>
         

    </nav>
  )
}

export default Header