import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/cartSlice';

const Product = () => {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.log(error.message);
        })
    },[]);


    const handleAdd = (data) => {
        dispatch(addToCart(data));
    }

    const card = products.map((product) => {
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
                <Button variant="primary" onClick={() => handleAdd(product)}>Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
        )
    })

  return (
    <div className='container'>
        <h2>Product Dashboard</h2>
        <div className='row'>
            {card}
        </div>
    </div>
  )
}

export default Product
