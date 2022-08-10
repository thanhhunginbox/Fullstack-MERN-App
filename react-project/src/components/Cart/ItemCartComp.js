import React from 'react';
import './Style/ItemCartComp.css';
function ItemCartComp({item})
{ 
    return (
        <div className='item-box'>
            <div className='item-details'>
                    <div className='mb-2 align-items-center row'>
                        <div className='pr-0 col-10'>
                            <div className='d-flex align-items-center'>
                                <img  class="item-image mr-2" src={item.itemImg} alt='img'/>
                                <a href='/shop' className='item-link one-line-ellipsis'>
                                    <h5 className='item-name one-line-ellipsis'>
                                        {item.itemName}
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div className='text-right col-2 fl-r'>
                            <button aria-label='remove converse all star from cart'
                                className='input-btn md icon-only icon-left border-0'
                                type='button'>
                                <div className='btn-icon'>
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='align-items-center row'>
                        <div className='col-9'>
                            <p className='item-label'>Price</p>
                        </div>
                        <div className='text-right col-3'>
                            <p className='value price'>${item.itemPrice}</p>
                        </div>
                    </div>
                    <div className='align-items-center row'>
                        <div className='col-9'>
                            <p className='item-label'>Quantity</p>
                        </div>
                        <div className='text-right col-3'>
                            <p className='value price'>{item.number}</p>
                        </div>
                    </div>
            </div>

        </div>
    )
}


export default ItemCartComp;