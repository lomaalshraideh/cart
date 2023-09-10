import Card from "react-bootstrap/Card";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux-toolkit/slices/cart-slice";
import Logout from "./Logout";

function Home() {
	const products = useSelector((state) => state.products);
	// console.log(products);

	const dispatch = useDispatch();


	return (
		<>
		<br />
			<Container className="py-5">
				<Row className="py-5-row">
					{products.map((product) => (
						<Col className="col" key={product.id}>
							<Card className="container-card" style={{ width: "18rem" }}>
								<Card.Img
									className="img"
									style={{ height: "300px" }}
									variant="top"
									src={product.image}
								/>
								<Card.Body>
									<Card.Title className="title">{product.title}</Card.Title>

									<Card.Text className="text">{product.price}$</Card.Text>

									<Button 
										className="button"
										variant="primary"
										onClick={() => dispatch(addToCart(product))}
									>
										Add To Cart
									</Button>
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
export default Home;
