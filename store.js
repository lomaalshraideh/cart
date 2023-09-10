import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";
import loginSlice from "./slices/login-slice";
import registerSlice from "./slices/register-slice";
import logoutSlice from "./slices/logout-slice";

export const store = configureStore({
	reducer: {
		products: productsSlice,
		cart: cartSlice,
		login: loginSlice,
		Register: registerSlice,
		logout: logoutSlice
	},
});
