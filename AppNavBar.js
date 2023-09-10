import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./AppNavBar.css";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function AppNavBar() {
	const cart = useSelector((state) => state.cart);
	const products = useSelector((state) => state.products);
	const location = useLocation();
	const navigate = useNavigate();
	const [searchId, setSearchId] = useState("");

	// const dispatch = useDispatch();

	const handleSortByPrice = (e) => {
		e.preventDefault();

		navigate(`/SortedProducts`);
	};
	const handleSortByRating = (e) => {
		e.preventDefault();

		navigate(`/SortedRating`);
	};
	const handleSortByMen = (e) => {
		e.preventDefault();

		navigate(`/Men`);
	};
	const handleSortByWomen = (e) => {
		e.preventDefault();

		navigate(`/Women`);
	};
	const handleSortByJewelery = (e) => {
		e.preventDefault();

		navigate(`/Jewelery`);
	};
	const handleSortByElectronics = (e) => {
		e.preventDefault();

		navigate(`/Electronics`);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		// console.log(products)

		if (searchId) {
			const parsedSearchId = parseInt(searchId);
			const productExists = products.some(
				(product) => product.id === parsedSearchId
			);

			if (productExists) {
				navigate(`/product/${parsedSearchId}`);
			} else {
				alert("Product not found.");
			}
		}
	};

	const isLoginOrRegister =
		location.pathname === "/Home" ||
		location.pathname === "/Products" ||
		location.pathname === "/cart" ||
		location.pathname === `/product/${searchId}` ||
		location.pathname === "/myaccount" ||
		location.pathname === "/SortedProducts" ||
		location.pathname === "/SortedRating" ||
		location.pathname === "/Men" ||
		location.pathname === "/Women" ||
		location.pathname === "/Jewelery" ||
		location.pathname === "/Electronics";

	return (
		<>
			<br />
			{[
				// false,
				// 'sm',
				//  'md',
				"lg",
				//   'xl','xxl'
			].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					fixed="top"
					className="bg-body-tertiary mb-3"
				>
					<Container fluid>
						{!isLoginOrRegister ? (
							<NavLink to="/" className="navbar-brand">
								Cart App
							</NavLink>
						) : (
							<Navbar.Toggle
								aria-controls={`offcanvasNavbar-expand-${expand}`}
							/>
						)}

						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									Cart App
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								{isLoginOrRegister && (
									<Nav className="justify-content-end flex-grow-1 pe-3">
										{/* <Navbar.Brand >Cart App</Navbar.Brand> */}
										<NavLink
											to="/Home"
											className="nav-link"
											style={{ margin: "auto" }}
										>
											Home
										</NavLink>
										<NavLink
											to="/Products"
											className="nav-link"
											style={{ margin: "auto" }}
										>
											Products
										</NavLink>
										<NavLink
											to="/cart"
											className="nav-link"
											style={{ margin: "auto" }}
										>
											Cart -{cart.length}
										</NavLink>

										<NavDropdown
											title="Filter"
											id={`offcanvasNavbarDropdown-expand-${expand}`}
											style={{ margin: "auto" }}
										>
											<NavDropdown.Item
												onClick={handleSortByPrice}
												style={{ margin: "auto" }}
											>
												Price
											</NavDropdown.Item>

											<NavDropdown.Item
												onClick={handleSortByRating}
												style={{ margin: "auto" }}
											>
												rating
											</NavDropdown.Item>
											{/* <NavDropdown.Divider /> */}
											{/* <NavDropdown.Item
											> */}
												<NavDropdown
													title="category"
													id={`offcanvasNavbarDropdown-expand-${expand}`}
													style={{ marginLeft: "15px" }}
												>
													<NavDropdown.Item onClick={handleSortByMen}>
														men's clothing
													</NavDropdown.Item>

													<NavDropdown.Item onClick={handleSortByWomen}>
														women's clothing
													</NavDropdown.Item>
													<NavDropdown.Item onClick={handleSortByJewelery}>
														jewelery
													</NavDropdown.Item>
													<NavDropdown.Item onClick={handleSortByElectronics}>
														electronics
													</NavDropdown.Item>
												</NavDropdown>
											{/* </NavDropdown.Item> */}
										</NavDropdown>
										<br />
										<Form className="d-flex" onSubmit={handleSearch}>
											<Form.Control
												// type="search"  x button navigate to login
												placeholder="Search"
												className="me-2"
												aria-label="Search"
												type="text"
												// placeholder="Search"
												// className=" mr-sm-2"
												value={searchId}
												onChange={(e) => setSearchId(e.target.value)} 
												//refresh the navbar display none and show the nav of login
											/>
											<Button variant="outline-success" type="submit">
												Search
											</Button>
										</Form>
										<br />
										<NavLink
											to="/myaccount"
											className="nav-link "
											style={{ margin: "auto" }}
										>
											My Account
										</NavLink>
									</Nav>
								)}
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}

			{/* <Navbar expand="lg" fixed="top" bg="light" className="Navbar">
	
				<Container>
					{!isLoginOrRegister ? (
						<NavLink to="/" className="navbar-brand">
							CartApp
						</NavLink>
					) : (
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
					)}
					<Navbar.Collapse id="basic-navbar-nav">
						{isLoginOrRegister && (
							<Nav className="me-auto">
								<NavLink to="/Home" className="nav-link">
									Home
								</NavLink>
								<NavLink to="/Products" className="nav-link">
									Products
								</NavLink>
								<NavLink to="/cart" className="nav-link">
									Cart -{cart.length}
								</NavLink>
								<NavDropdown
									className="navDropDown"
									title="Filter"
									id="basic-nav-dropdown"
								>
									<NavDropdown.Item onClick={handleSortByPrice}>
										Price
									</NavDropdown.Item>

									<NavDropdown.Item onClick={handleSortByRating}>
										rating
									</NavDropdown.Item>

									<NavDropdown
										className="navDropDown"
										title="category"
										id="basic-nav-dropdown"
									>
										<NavDropdown.Item onClick={handleSortByMen}>
											men's clothing
										</NavDropdown.Item>

										<NavDropdown.Item onClick={handleSortByWomen}>
											women's clothing
										</NavDropdown.Item>
										<NavDropdown.Item onClick={handleSortByJewelery}>
											jewelery
										</NavDropdown.Item>
										<NavDropdown.Item onClick={handleSortByElectronics}>
											electronics
										</NavDropdown.Item>
									</NavDropdown>
								</NavDropdown>

								<Form className="FORM" onSubmit={handleSearch}>
									<Row>
										<Col xs="auto">
											<Form.Control
												type="text"
												placeholder="Search"
												className=" mr-sm-2"
												value={searchId}
												onChange={(e) => setSearchId(e.target.value)}
											/>
										</Col>
										<Col xs="auto">
											<Button type="submit">Submit</Button>
										</Col>
									</Row>
								</Form>
								<NavLink to="/myaccount" className="nav-link " style={{ marginLeft: '265px' }}>
									My Account
								</NavLink>
							</Nav>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar> */}
		</>
	);
}

export default AppNavBar;
