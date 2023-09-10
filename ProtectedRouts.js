import useAuth from "./useAuth";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRouts = () => {
	const isAuth = useAuth();

	return isAuth ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRouts;
