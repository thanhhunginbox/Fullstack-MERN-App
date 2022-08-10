import React from 'react'
import ItemCartComp from './ItemCartComp';

function CartBody()
{
    const CartList = 
    [
        {
            "_id": 1, 
            "itemName": "name 1",
            "itemRating": 3,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
        {
            "_id": 2, 
            "itemName": "name 2",
            "itemRating": 4,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
        {
            "_id": 3, 
            "itemName": "name 3",
            "itemRating": 2,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
        {
            "_id": 4, 
            "itemName": "name 4",
            "itemRating": 5,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
        {
            "_id": 5, 
            "itemName": "name 5",
            "itemRating": 3,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
        {
            "_id": 6, 
            "itemName": "name 6",
            "itemRating": 4,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
        {
            "_id": 7, 
            "itemName": "name 7",
            "itemRating": 2,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
        {
            "_id": 8, 
            "itemName": "name 8",
            "itemRating": 5,
            "itemPrice": 50, 
            "number": "1",
            "itemImg": "https://loremflickr.com/320/240?random=10"
        },
    ];
    const DisplayItemCart = CartList.map( (cartl) =>
        <ItemCartComp item = {cartl}/>
    );
    return (
        <div className='cart-body'>
            <div className='cart-list'>
                {DisplayItemCart}
            </div>
        </div>
    )
}


export default CartBody;
