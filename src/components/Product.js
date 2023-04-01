import React from 'react'
import {Card }  from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounder'>
        
        <Link to={`/product/${product.id}`}>
            <Card.Img src={product.image} />
        </Link>
        <Card.Body>
        <Link to={`/product/${product.id}`}>
           <Card.Title as='div'>
            <strong>{product.name}  </strong>
           </Card.Title>
        </Link>

        <Card.Text as='div'>
            <div className='my-3'>
            {product.base}
            </div>
        </Card.Text>

        <Card.Text as='h3'>
            
            $ {product.price}
        
        </Card.Text>
        </Card.Body>
    </Card>
  )
}
