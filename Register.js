import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux-toolkit/slices/register-slice";
import { Container } from "react-bootstrap";

function Register() {
	const { FirstName, LastName, UserName, email, password } = useSelector(
		(state) => state.Register
	);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		const userData = {
			firstName: e.target.firstName.value,
			lastName: e.target.lastName.value,
			userName: e.target.UserName.value,
			gender: e.target.Gender.value,
			city: e.target.City.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};

		dispatch(addUser(userData));
		e.preventDefault();
	};

	return (
		<>
			<br />
			<br />
			<br />

			<h2>Register</h2>
			<br />
			<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicText">
					<Form.Label column sm={2} className="label-width">
						First name
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							className="input-width"
							value={FirstName}
							type="text"
							placeholder="First name"
							name="firstName"
							required
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicText">
					<Form.Label column sm={2} className="label-width">
						Last name
					</Form.Label>

					<Col sm={4}>
						<Form.Control
							className="input-width"
							type="text"
							value={LastName}
							placeholder="Last name"
							name="lastName"
							required
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicText">
					<Form.Label column sm={2} className="label-width">
						userName
					</Form.Label>

					<Col sm={4}>
						<Form.Control
							className="input-width"
							type="text"
							value={UserName}
							placeholder="UserName"
							name="UserName"
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicText">
					<Form.Label column sm={2} className="label-width">
						Gender
					</Form.Label>
					<Col sm={4}>
						<Form.Select
							className="input-width"
							defaultValue="SelectGender"
							name="Gender"
						>
							<option>SelectGender...</option>
							<option>Male</option>
							<option>Female</option>
						</Form.Select>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="Contanor-Form" controlId="formGridCity">
					<Form.Label column sm={2} className="label-width">
						City
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							className="input-width"
							type="text"
							placeholder="City"
							name="City"
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicEmail">
					<Form.Label column sm={2} className="label-width">
						Email address
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							className="input-width"
							type="email"
							value={email}
							placeholder="Enter Email"
							name="email"
							required
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="Contanor-Form" controlId="formBasicPassword">
					<Form.Label column sm={2} className="label-width">
						Password
					</Form.Label>
					<Col sm={4}>
						<Form.Control
							className="input-width"
							type="password"
							value={password}
							placeholder="password"
							name="password"
							required
						/>
					</Col>
				</Form.Group>
				<Form.Group className="Contanor-Form" controlId="formBasicCheckbox"></Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			</Container>
			<br />
			<p>
				Already have an account? <Link to="/">Login</Link>
			</p>
		</>
	);
}

export default Register;
