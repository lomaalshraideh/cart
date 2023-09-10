import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SortedRating() {
	const products = useSelector((state) => state.products);

	// State to store sorted products
	const [sortedProducts, setSortedProducts] = useState([]);

	// Function to sort and update the sortedProducts state
	const sortProductsByRating = () => {
		const sorted = [...products].sort((a, b) => a.rating.rate - b.rating.rate);
		setSortedProducts(sorted);
	};

	useEffect(() => {
		sortProductsByRating();
	}, [products]);

	return (
		<>
			<Container className="py-5">
				<Row className="py-5">
					{sortedProducts.map((product) => (
						<Col key={product.id}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									style={{ height: "300px" }}
									variant="top"
									src={product.image}
								/>
								<Card.Body>
									<Card.Title>{product.title}</Card.Title>
									<Card.Text>{product.price}$</Card.Text>
								</Card.Body>
								<div>
									<strong>Rating: {product.rating.rate} ★</strong>
								</div>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<Link to="/Products">
				<Button style={{ marginBottom: "5px", marginTop: "20px" }}>
					Go back
				</Button>
			</Link>
		</>
	);
}

export default SortedRating;
