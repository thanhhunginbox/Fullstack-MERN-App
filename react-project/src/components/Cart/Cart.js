import React from 'react'
import CartBody from './CartBody';
import CartCheckout from './CartCheckout';
import './Style/Cart.css'

function Cart()
{
    return (
        <div className='cart-contain'>
                <div className='cart'>
                    <CartBody/>
                </div>
            {/* <div className='offcanvas-body'>
            </div> */}
                    <CartCheckout/>

        </div>
    )
}


export default Cart;
