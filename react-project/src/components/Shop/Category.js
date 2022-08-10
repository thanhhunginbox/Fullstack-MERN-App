import React from 'react';
// import PriceFilter from './PriceFilter';
import {
    Tab
    ,Row
    ,Col
    ,ListGroup
} from 'react-bootstrap'
function Category()
{

    return (
        <div className='ItemFilter col-md-3'>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                        Link 2
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col sm={8}>
                    {/* <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            ab
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            cd
                        </Tab.Pane>
                    </Tab.Content> */}
                    </Col>
                </Row>
                </Tab.Container>
        </div>
    )
}


export default Category;