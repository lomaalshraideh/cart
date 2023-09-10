import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function MyAccount() {
	const { Users } = useSelector((state) => state.Register);
	const { email: currentUserEmail } = useSelector((state) => state.login.currentUser);

	const currentUser = Users.find((user) => user.email === currentUserEmail);

	const { firstName, lastName, userName, gender, city, email } = currentUser;

	return (
		<>
			<br />
			<br />
			<br />
			<h2>My Account</h2>
		
			<div className="myaccount">
				<p>
					<strong>First Name:</strong> {firstName}
				</p>
				<p>
					<strong>Last Name:</strong> {lastName}
				</p>
				<p>
					<strong>Username:</strong> {userName}
				</p>
				<p>
					<strong>Gender:</strong> {gender}
				</p>
				<p>
					<strong>City:</strong> {city}
				</p>
				<p>
					<strong>Email:</strong> {email}
				</p>
			</div>
			<br />
			<Link to="/Home">
				<Button
					variant="primary"
					style={{ marginLeft: "10px", marginTop: "5px" }}
				>
					Go Back
				</Button>
			</Link>
		</>
	);
}

export default MyAccount;
