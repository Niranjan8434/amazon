import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'
import {Link} from "react-router-dom";
import { useStateValue} from "./StateProvider";
import {auth} from "./firebase"

function Header () {
    const [{ basket, user },dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <div className="header">
          <Link to="/">
          <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon Logo" />
          </Link>
            

        <div className="header_search">
            <input type="text" className="header_searchInput"></input>
            <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">
        <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
                <span className="header_optionOne">Hello {user? user.email:'Guest'} </span>
                <span className="header_optionTwo">{user? 'Sign Out': 'Sign In'}</span> 
            </div></Link>
            <Link to="/orders">
            <div className="header_option">
                <span className="header_optionOne">Returns</span>
                <span className="header_optionTwo">& Order</span> 
            </div>
            </Link>
            <div className="header_option">
                <span className="header_optionOne">Your</span>
                <span className="header_optionTwo">Prime</span> 
            </div>
            <Link to="/checkout">
            <div className="header_optionBasket">
            <ShoppingCartIcon fontSize="large" className="header_optionCart" />
            <span className="header_optionTwo header_basketCount">{basket?.length}</span>
            </div> </Link>
        
        </div>
        
        </div>
    )
}

export default Header;
