import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeFromCart } from '../Store/cartSlice';

const Cart = () => {

const cartProds = useSelector(state => state.cart);
const dispatch = useDispatch();

const card = cartProds.map((product) => {
    return(
    <div className='col-md-3' key={product.id} style={{marginBottom:'10px'}}>
        <Card  className='h-100 text-center' >
            <div>
            <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                ${product.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger" onClick={() => dispatch(removeFromCart(product.id))}>Remove Item</Button>
            </Card.Footer>
        </Card>
    </div>
    )
})

  return (
    <div className='container'>
       <h2>My Cart</h2>
       <div className='row'>
        {cartProds.length > 0 ? card : <p>No product added</p>}
       </div>
    </div>
  )
}

export default Cart
