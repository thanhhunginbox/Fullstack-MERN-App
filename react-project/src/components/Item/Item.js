import React from 'react';
import { Outlet
    // ,  Link
} from "react-router-dom";
import {
    Carousel
    , Form
    , Button
} from 'react-bootstrap'
import { useLocation} from "react-router-dom";
import AddReview from './AddReview';
import RatingList from './RatingList';
import './style/Item.css'
// import RatingComp from './RatingComp';

function Item()
{
    const location = useLocation();
    const {_id} = location.state;
    const ItemDetails = 
    [
        {
            "_id": 1, 
            "itemName": "name 1",
            "itemRating": 3,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
        {
            "_id": 2, 
            "itemName": "name 2",
            "itemRating": 4,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
        {
            "_id": 3, 
            "itemName": "name 3",
            "itemRating": 2,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
        {
            "_id": 4, 
            "itemName": "name 4",
            "itemRating": 5,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
        {
            "_id": 5, 
            "itemName": "name 5",
            "itemRating": 3,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
        {
            "_id": 6, 
            "itemName": "name 6",
            "itemRating": 4,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
        {
            "_id": 7, 
            "itemName": "name 7",
            "itemRating": 2,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
        {
            "_id": 8, 
            "itemName": "name 8",
            "itemRating": 5,
            "itemPrice": 50, 
            "itemType": "loai", 
            "description": "description"
        },
    ];

    function GetItem(m)
    {
        return(m._id===_id);
    }
    const MovieCur = ItemDetails.filter(GetItem)
    const displayMovie = MovieCur.map((item) =>(

        <div class="container">
            <div class="col-lg-13 borderShadow p-3 main-section bg-white">
                <div class="row hedding m-0 pl-3 pt-0 pb-3">
                    Product Detail Design Using Bootstrap 4.0
                </div>
                <div class="row m-0">
                    <div class="col-lg-5 left-side-product-box pb-3">
                        <Carousel className='h-100'>
                            <Carousel.Item interval={1000} className='h-100'>
                                <img
                                className="d-block w-100 h-100 "
                                src={"https://loremflickr.com/320/240?random=" + Math.random(100)} 
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}  className='h-100'>
                                <img
                                className="d-block w-100 h-100"
                                src={"https://loremflickr.com/320/240?random=" + Math.random(100)} 
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item  className='h-100'>
                                <img
                                className="d-block w-100 h-100"
                                src={"https://loremflickr.com/320/240?random=" + Math.random(100)} 
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            </Carousel>
                    </div>
                    <div class="col-lg-7">
                        <div class="right-side-pro-detail border p-3 m-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <span>{item.itemType}</span>
                                    <p class="m-0 p-0">{item.itemName}</p>
                                </div>
                                <div class="col-lg-12">
                                    <p class="m-0 p-0 price-pro">${item.itemPrice}</p>
                                    <hr class="p-0 m-0"/>
                                </div>
                                <div class="col-lg-12 pt-2">
                                    <h5>Product Detail</h5>
                                    <span>{item.description}</span>
                                    <hr class="m-0 pt-2 mt-2"/>
                                </div>
                                <div className='iconContact'>
                                    <div className='d-flex'>
                                        <p className='btn-i fb transform forcus-p'><i class=" fa-brands fa-facebook-f"></i></p>
                                        <p className='btn-i tt transform forcus-p'><i class=" fa-brands fa-twitter"></i></p>
                                        <p className='btn-i em transform forcus-p'><i class=" fa-solid fa-envelope"></i></p>
                                        <p className='btn-i lk transform forcus-p'><i class=" fa-brands fa-linkedin-in"></i></p>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="number">
                                            <Form.Label><h6>Quantity :</h6></Form.Label>
                                            <Form.Control
                                            type="number"
                                            id="number"
                                            defaultValue="1"
                                            title="Choose your color"
                                            className='text-center w-100 form-control'
                                            />
                                        </Form.Group>
                                        <Form.Group className='row btnForm'>
                                            <Button className='col-lg-4 pb-2 btn btn-danger ' variant="primary" type="submit">
                                                Add To Cart
                                            </Button>
                                            <Button className='col-lg-4 btn btn-success' variant="primary" type="submit">
                                                Shop Now
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
        {displayMovie}
        <div className='container'>
                <div className='rating row mb-3 '>
                    <RatingList/>  
                    <div className='col-md-7'>
                        {/* <RatingComp/> */}
                        <AddReview/>
                    </div> 
                </div> 
        </div>
        <Outlet/>
        </>
    )
}

export default Item;
