import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card }  from 'react-bootstrap';
import products from '../products';


export default function ProductScreen({match} ) {

    const { id } = useParams();
    const product = products.find((p)=>p.id === parseInt(id));

  return (
    <div>
        {product.name}
    </div>
  )
}
