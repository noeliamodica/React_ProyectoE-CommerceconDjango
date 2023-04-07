import React, { useEffect} from 'react'
import { Link, useNavigate , useLocation, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import { Message } from '../components/Message' 
import { addToCart } from '../actions/cartActions'


function CartScreen() {

  const dispatch = useDispatch()
  const { id } = useParams()

  const location = useLocation()
  const qty = parseInt(new URLSearchParams(location.search).get('qty')) 
  
  useEffect(() =>{
    if (id){
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty] )

  return (
    <div>CartScreen</div>
  )
}

export default CartScreen