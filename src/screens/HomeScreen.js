import React from 'react'
import {Col, Row }  from 'react-bootstrap';
import products from '../products'

export default function HomeScreen() {
  return (
    <div>
        <h1> Latest Products</h1>
        <Row>
            {products.map(product=>(
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <h3> {product.name} </h3>
                </Col>
             ))}
        </Row>
    </div>
  )
}
