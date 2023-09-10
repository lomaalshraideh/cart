import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
	login,
	setEmail,
	setPassword,
} from "../redux-toolkit/slices/login-slice";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./login.css"
function Login() {
	//  e.preventDefault();
	const { email, password, currentUsers, isLoggedIn } = useSelector(
		(state) => state.login
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleEmailChange = (e) => {
		dispatch(setEmail(e.target.value));
	};
	const handlePasswordChange = (e) => {
		dispatch(setPassword(e.target.value));
	};

	const handleLogin = (e) => {
		e.preventDefault();

		console.log(currentUsers);
		if (isLoggedIn) {
		}
		const foundUser = currentUsers.find((user) => user.email === email);
		console.log(foundUser);
		if (!foundUser) {
			Swal.fire({
				icon: "error",
				title: " You are not registered ",
			});
		} else if (foundUser.password !== password) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Your Password is incorrect. Please try again",
			});
		} else {
			dispatch(login(foundUser));

			e.preventDefault();
			localStorage.setItem("currentUser", JSON.stringify(foundUser));

			navigate("/Home");
		}
	};

	return (
		<>
			<br />
			<br />
			<br />
			<h2>Login</h2>
			<br />

			{/* one */}
			{/* <Container>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row}  className="mb-3-row" controlId="formBasicEmail">
          <Form.Label  column sm={12} md={2} className="label-width text-start  ms-0"    >
       
            Email address
          </Form.Label>
          <Col sm={12} md={4}>
            <Form.Control
              className="input-width"
              type="email"
              onChange={handleEmailChange}
              placeholder="Enter email"
              name="email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3-row" controlId="formBasicPassword">
          <Form.Label column sm={12} md={2} className="label-width text-start  ms-0" >
            Password
          </Form.Label>
          <Col sm={12} md={4}>
            <Form.Control
              className="input-width"
              type="password"
              onChange={handlePasswordChange}
              name="password"
              placeholder="Password"
              required
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
        <br />
        <br />
        <h6>Don't have an account? Register here</h6>
        <Link to="Register">
          <Button
            type="submit"
            variant="primary"
            style={{ marginLeft: "10px", marginTop: "5px" }}
          >
            Create Account
          </Button>
        </Link>
      </Form>
    </Container> */}
	{/* ----------------------------------------------------- */}

<Container>
			<Form onSubmit={handleLogin}>
				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicEmail">
			

					<Form.Label column sm={2} className="label-width"> 
					  {/* <Form.Label column sm={12} md={2} className="label-width text-start  ms-0" > */}
						Email address
					</Form.Label>
					<Col
					sm={4}
					//  sm={12}
					//  md={4}
					 >
						<Form.Control
							className="input-width"
							type="email"
							//	value={email}
							onChange={handleEmailChange}
							placeholder="Enter email"
							name="email"
							required
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicPassword">
					<Form.Label column sm={2} className="label-width">
						Password
					</Form.Label>
					<Col 
					 sm={4}
					>
						<Form.Control
							className="input-width"
							type="password"
							onChange={handlePasswordChange}
							//	value={password}
							name="password"
							placeholder="Password"
							required
						/>
					</Col>
				</Form.Group>

				<Button type="submit" variant="primary">
					Login
				</Button>
				<br />
				<br />
				<br />
				<br />
				<h6>Don't have an accunt? Register here</h6>
				<Link to="Register">
					<Button
						type="submit"
						variant="primary"
						style={{ marginLeft: "10px", marginTop: "5px" }}
					>
						Create Account
					</Button>
				</Link>
			</Form>
			</Container>
		</>
	);
}

export default Login;
