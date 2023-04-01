import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem }  from 'react-bootstrap';
import products from '../products';


export default function ProductScreen({match} ) {

    const { id } = useParams();
    const product = products.find((p)=>p.id === parseInt(id));

  return (
    <div>
        <Link to='/' className='btn btn-light my-3' > Go back </Link>
        <Row>
            <Col md={6} >
                <Image src={product.image}  alt={product.name} fluid />
            </Col>

            <Col md={3} >
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3> {product.name} </h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                       <p> {product.dressing}  </p>  
                    </ListGroup.Item>

                    <ListGroup.Item>
                       <p> {product.description}  </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      Price: ${product.price}
                    </ListGroup.Item>

                </ListGroup>
            </Col>

            <Col md={3} >
                <Card>
                    <ListGroupItem variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col> Price:  </Col>
                                <Col> 
                                    <strong> ${product.price} </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col> Status:  </Col>
                                <Col> 
                                    In Stock
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroupItem>
                </Card>
            </Col>
        </Row>
    </div>
  )
}
