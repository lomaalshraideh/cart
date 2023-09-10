import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Logout from "./Logout";

function Products() {
	const products = useSelector((state) => state.products);
	console.log(products);

	return (
		<>
			<Container className="py-5">
				<Row className="py-5">
					{products.map((product) => (
						<Col key={product.id}>
							<Card style={{ width: "18rem" }}>
								<Card.Img
									className="Img-Style"
									style={{ height: "300px" }}
									variant="top"
									src={product.image}
								/>
								<Card.Body>
									<Card.Title>{product.title}</Card.Title>
									<Card.Text>{product.category}</Card.Text>
									<Card.Text>{product.description}</Card.Text>
									<Card.Text> {product.price}$</Card.Text>
									<Card.Text> {product.rating.rate}★</Card.Text>
									<Card.Text>{product.id}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<Logout />
		</>
	);
}
export default Products;
