import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, Form }  from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { ListProductsDetails } from '../actions/productActions';

import Loader from '../components/Loader';
import Message from '../components/Message';

export default function ProductScreen({match} ) {

    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()
    const { id } = useParams();
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product } = productDetails

  useEffect(()=>{
    dispatch(ListProductsDetails( id ))
       
  }, [dispatch, match] )


  return (
    <div>
        <Link to='/' className='btn btn-light my-3' > Go back </Link>

        { loading ? 
        <Loader />
        : error
            ? <Message variant='danger'>{error} </Message>
        :
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
                <ListGroup variant='flush'>
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
                                {product.status === "Mas Vendido" ? 'Mas Vendido' : "En Stock"}
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col> Stock:  </Col>
                            <Col> 
                                {product.countInStock > 0  ? 'In Stock' : "Out of Stock"}
                            </Col>
                        </Row>
                    </ListGroup.Item> 
                
                    { product.countInStock > 0 && (
                        <ListGroup.Item> 
                            <Row>
                                <Col> Qty </Col>
                                <Col xs='auto' className='my-1' > 
                                <Form.Control 
                                    as='select'
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)  } 
                                > 
                                    {
                                        
                                        [...Array(product.countInStock).keys()].map((x)=>(
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ) )
                                    }
                                </Form.Control>
                                </Col>
                                
                            </Row>
                        </ListGroup.Item>
                    ) }
                    <ListGroup.Item>
                        <Button className='btn-block' disabled={product.countInStock === 0} type='button'> Add to Cart </Button>
                    </ListGroup.Item>
                </ListGroup>
               
            </Card>
            </Col>
            </Row>
        }
        
    </div>
  )
}
