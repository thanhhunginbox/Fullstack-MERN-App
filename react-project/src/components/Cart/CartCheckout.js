import React from 'react'
import './Style/CartCheckout.css';
import './Style/ItemCartComp.css';
function CartCheckout()
{
    const total = 0;
    return (
        <div className='cart-checkout'>
            <div className='cart-summary'>
                <div className='summary-item row'>
                    <div className='col-9'>
                        <p className='sumary-label'>Free shipping</p>
                    </div>
                    <div className='text-right col-3 '>
                        <p className='summary-value fl-r'>$0</p>
                    </div>
                </div>
                <div className=' summary-item row'>
                    <div className='col-9'>
                        <p className='sumary-label'>Total</p>
                    </div>
                    <div className='text-right col-3 '>
                        <p className='summary-value fl-r'>${total}</p>
                    </div>
                </div>
            </div>
            <div className='easy-checkout'>
                <div className='checkout-actions'>
                    <button className='input-btn custom-btn-primary md text-only icon-left '>
                        <span className='btn-text'>Order</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default CartCheckout;
