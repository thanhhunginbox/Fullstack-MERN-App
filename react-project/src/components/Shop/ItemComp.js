import React from 'react';

function ItemComp({item})
{ 
  
    return (
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={"https://loremflickr.com/320/240?random=" + Math.random(100)}  width="100%" height="225"  class="bd-placeholder-img card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 className='ItemTitle noneUnderline '>{item.itemName}</h5>
                                    <p className='ByBrand colorBlack'>by <b>{item.itemType}</b></p>
                                    <small class="card-text graylight">This is a wider card ...</small>
                                    <div class="colorBlack d-flex justify-content-between align-items-center">
                                        <p className='noneUnderline'>$ <span className='price'>{item.itemPrice}</span></p>
                                        <p class="text-muted">
                                            <span>{item.itemRating}</span>
                                            <span className='fa-solid fa-star Iconstar'></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}


export default ItemComp;