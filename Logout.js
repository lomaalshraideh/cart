import { logout } from "../redux-toolkit/slices/logout-slice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Logout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentUser } = useSelector((state) => state.logout);
	const handlelogout = () => {
		dispatch(logout(currentUser));
		// dispatch(logout(currentUsers));
		console.log();
		navigate("/");
		console.log("loma",currentUser);
	};
	return (
		<>
			<Button  style={{ marginBottom: "5px" }}onClick={handlelogout} variant="danger">
				Logout
			</Button>
			
		</>
	);
}
export default Logout;
