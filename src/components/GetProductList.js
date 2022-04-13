import React from 'react'
import { Button ,Row,Col, Container, Card,Alert, Spinner } from 'react-bootstrap';
import {useState , useEffect} from 'react';


function GetProductList(props){
	console.warn("getproduct list",props)
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
  
	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
	  fetch("https://fakestoreapi.com/products") 
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setItems(result);
			//console.log(result);
		  },
		  // Note: it's important to handle errors here
		  // instead of a catch() block so that we don't swallow
		  // exceptions from actual bugs in components.
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, [])
  
	if (error) {
	  return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
	  return <Spinner animation="grow" variant="info" />;
	} else {
	  return (
		<div><span>{props.data.length}</span>
		<Row className="mx-0 mt-2">
		{
		items.map(item => (
		<Card className="m-2 mx-auto" style={{ width: '18rem' }} key={item.id}>
			<Card.Img variant="top" src={item.image} />
			<Card.Body>
				<Card.Title>{item.title}</Card.Title>
				{/* <Card.Text>
				{item.description}
				</Card.Text> */}
				<p className="price">Price: {item.price}</p>
				<p className="rating">Rating: {item.rating.rate}</p>
				<p className="rating">Quantity: {item.rating.rate}</p>
				<Button variant="primary" onClick={()=>props.addToCardHandler(item)}>Add to Card</Button>
			</Card.Body>
			</Card>	
		))
		}
		</Row>
		</div>
			
		
		
	  );
	}

}

export default GetProductList;