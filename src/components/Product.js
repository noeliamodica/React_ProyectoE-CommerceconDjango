import React from 'react'
import {Card }  from 'react-bootstrap';

export default function Product({ product }) {
  return (
    <Card className='my-3 p-3 rounder'>
        
        <a href={`/product/${product.id}`}>
            <Card.Img src={product.image} />
        </a>
        <Card.Body>
        <a href={`/product/${product.id}`}>
           <Card.Title as='div'>
            <strong>{product.name}  </strong>
           </Card.Title>
        </a>

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