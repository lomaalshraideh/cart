import { Container, Table, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../redux-toolkit/slices/cart-slice";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./Cart.css";
function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	// console.log(cart);
	const totalPrice = cart.reduce((acc, product) => {
		acc += product.price * product.quantity;
		return acc;
	}, 0);

	return (
		<>
			<br />
			<Container>
				<h1 className="py-5 display-4"> Welcome To Cart</h1>
				<Button
					variant="primary"
					className="mb-3"
					onClick={() => dispatch(clear())}
				>
					Clear Cart
				</Button>
				<h5 className="mb-3">TotalPrice {totalPrice.toFixed(2)}$</h5>
				<div className="table-responsive">
					<Table striped bordered hover size="sm">
						<thead >
							<tr>
								<th>#</th>
								<th>Title</th>
								<th>Img</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody >
							{cart.map((product) => (
								<tr key={product.id}>
									<td className=" font-size">{product.id}</td>
									<td className=" font-size">{product.title}</td>
									<td>
										<Image
											className="img-table"
											src={product.image}
											alt={product.title}
											style={{ width: "100px", height: "100px" }}
										/>
									</td>
									<td className=" font-size">{product.price}$</td>
									<td className=" font-size">{product.quantity}</td>

									<td>
										<Button
											// className=" button-cart"
											variant="danger"
											onClick={() => dispatch(deleteFromCart(product))}
										>
											Remove
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
				<Link to="/Home">
					<Button>checkout</Button>
				</Link>
				<br />
				<br />
				<br />
				<Logout />
			</Container>
		</>
	);
}
export default Cart;
