import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Electronics() {
	const products = useSelector((state) => state.products);
	// const [sortedProducts, setSortedProducts] = useState([]);

	const selectedCategory = "electronics";
	const filteredProducts = products.filter(
		(product) => product.category === selectedCategory
	);
	
	return (
		<>
			<Container className="py-5">
				<Row className="py-5">
					{filteredProducts.map((product) => (
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
export default Electronics;
