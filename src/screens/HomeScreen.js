import React, { useState, useEffect} from 'react'
import {Col, Row }  from 'react-bootstrap';

import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { ListProducts } from '../actions/productActions';


export default function HomeScreen() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(()=>{
    dispatch(ListProducts())
   
  }, [] )
  
  
  return (
    <div>
        <h1> Latest Products</h1>
        <Row>
            {products.map(product=>(
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
             ))}
        </Row>
    </div>
  )
}
