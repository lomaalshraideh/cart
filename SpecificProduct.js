import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SpecificProduct.css";
function SpecificProduct() {
	const { id } = useParams();
	const products = useSelector((state) => state.products);

	const selectedProduct = products.find(
		(product) => product.id === parseInt(id)
	);

	if (!selectedProduct) {
		return <div>Product not found</div>;
	}

	return (
		<>
			<Container style={{ marginTop: "70px" }}>
				<Card
					className="card"
					style={{
						width: "18rem",

						margin: "auto",
					}}
				>
					<Card.Img
						style={{ height: "300px" }}
						variant="top"
						src={selectedProduct.image}
					/>
					<Card.Body>
						<Card.Title>{selectedProduct.title}</Card.Title>
						<Card.Text>{selectedProduct.category}</Card.Text>
						<Card.Text>{selectedProduct.description}</Card.Text>
						<Card.Text> {selectedProduct.price}$</Card.Text>
						<Card.Text>{selectedProduct.id}</Card.Text>
					</Card.Body>
				</Card>

				<Link to="/Products">
					<Button style={{ marginBottom: "5px", marginTop: "20px" }}>
						Go back
					</Button>
				</Link>
			</Container>
		</>
	);
}

export default SpecificProduct;
