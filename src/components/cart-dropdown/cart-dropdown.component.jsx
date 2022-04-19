import { useContext } from 'react'

import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import { useNavigate } from 'react-router-dom'

const CartDropDown = ()=>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()
     const onClickCheckoutPage = ()=>{
         navigate('/checkout')
     }

    return(
        <div className='cart-dropdown-container'>
           <div className='cart-items'>
              {cartItems.map(productItem=>(
                  <CartItem key={productItem.id} productItem={productItem} />
              ))}
              <Button type='button' onClick={onClickCheckoutPage}>GO TO CHECKOUT</Button>
           </div>
        </div>
    )
}

export default CartDropDown