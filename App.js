import { Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchProducts } from "./redux-toolkit/slices/products-slice";
// import {addToCart} from "./redux-toolkit/slices/cart-slice"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppNavBar from "./components/AppNavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRouts from "./components/ProtectedRouts";
import SpecificProduct from "./components/SpecificProduct";
import MyAccount from "./components/MyAccount";
import SortedProducts from "./components/SortedProducts";
import SortedRating from "./components/SortedRating";
import Men from "./components/Men";
import Women from "./components/Women";
import Jewelery from "./components/Jewelery";
import Electronics from "./components/Electronics";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts())
		
	}, []);

	return (
		<div className="App">
			<AppNavBar />

			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route element={<ProtectedRouts />}>
					<Route path="/home" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/product/:id" element={<SpecificProduct />} />
					<Route path="/home/:id" element={<SpecificProduct />} />
					<Route path="/myaccount" element={<MyAccount />} />
					<Route path="/SortedProducts" element={<SortedProducts />} />
					<Route path="/SortedRating" element={<SortedRating />} />
					<Route path="/Men" element={<Men />} />
					<Route path="/Women" element={<Women />} />
					<Route path="/Jewelery" element={<Jewelery />} />
					<Route path="/Electronics" element={<Electronics />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
