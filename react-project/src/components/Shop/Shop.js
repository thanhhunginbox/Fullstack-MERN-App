import React from 'react';
import './style/Shop.css'
// import ItemFilter from './Category';
import ItemList from './ItemList';
import {
    Tab
    ,Row
    ,Col
    ,ListGroup
} from 'react-bootstrap'
function Shop()
{
    const ItemLists = 
    [
        {
            "_id": 1, 
            "itemName": "name 1",
            "itemRating": 3,
            "itemPrice": 50, 
            "itemType": "loai"
        },
        {
            "_id": 2, 
            "itemName": "name 2",
            "itemRating": 4,
            "itemPrice": 50, 
            "itemType": "loai"
        },
        {
            "_id": 3, 
            "itemName": "name 3",
            "itemRating": 2,
            "itemPrice": 50, 
            "itemType": "loai"
        },
        {
            "_id": 4, 
            "itemName": "name 4",
            "itemRating": 5,
            "itemPrice": 50, 
            "itemType": "loai"
        },
        {
            "_id": 5, 
            "itemName": "name 5",
            "itemRating": 3,
            "itemPrice": 50, 
            "itemType": "loai"
        },
        {
            "_id": 6, 
            "itemName": "name 6",
            "itemRating": 4,
            "itemPrice": 50, 
            "itemType": "loai"
        },
        {
            "_id": 7, 
            "itemName": "name 7",
            "itemRating": 2,
            "itemPrice": 50, 
            "itemType": "loai"
        },
        {
            "_id": 8, 
            "itemName": "name 8",
            "itemRating": 5,
            "itemPrice": 50, 
            "itemType": "loai"
        },
    ];
    const TypeList = [
        {
            'itemType': 'type 1'
        },
        {
            'itemType': 'type 2'
        },
        {
            'itemType': 'type 3'
        }
    ]
    const DisplayTypeList = TypeList.map( (type) =>
        <ListGroup.Item action href={`${type.itemType}`}>
            {type.itemType}
        </ListGroup.Item>
    );
    return (
        <>
            <div className='ShopMain container'>
                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                            <Row>
                                <Col className='category ' sm={2}>
                                <ListGroup className='sticky'>
                                    {DisplayTypeList}
                                </ListGroup>
                                </Col>
                                <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1">
                                        <ItemList items={ItemLists}/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#link2">
                                        cd
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
            </div>
            
        </>
    )
}


export default Shop;