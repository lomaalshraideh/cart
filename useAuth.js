import { useSelector } from "react-redux";

const useAuth = () => {
	const isLoggedIn = useSelector((state) => state.login.currentUser);

	return isLoggedIn;
};
export default useAuth;
