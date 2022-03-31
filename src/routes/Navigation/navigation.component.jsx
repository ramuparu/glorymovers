import { Outlet,Link } from "react-router-dom"

import { useContext } from "react"

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { signOutUser } from "../../utils/firebase.utils"

import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"

import './navigation.styles.scss'

const Navigation = ()=>{
    const {currentUser}  = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    
    return(
        <>
        <div className="navigation">
        <Link className="logo-container" to='/'>
             <CrwnLogo />
        </Link>
        <div className="nav-links-container">
           <Link className="nav-link" to='/shop'>
           Shop
           </Link>
           
           {currentUser ? <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> : <Link className="nav-link" to='/auth'>
           SIGN IN
           </Link> }
           <CartIcon />
          
        </div>
        {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
        </>
    )
}

export default Navigation