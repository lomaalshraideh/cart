import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	initialState: [],
	name: "cartSlice",
	reducers: {
		addToCart: (state, action) => {
			// this line to treat the repeate product i need to manage the quantity
			const findProduct = state.find(
				(product) => product.id === action.payload.id
			);
			// console.log("findProduct", findProduct);
			if (findProduct) {
				findProduct.quantity += 1;
			} else {
				const productClone = { ...action.payload, quantity: 1 };
				state.push(productClone);
			}
		},
		deleteFromCart: (state, action) => {
			return state.filter((product) => product.id !== action.payload.id);
		},
		clear: (state, action) => {
			return [];
		},
	},
});
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
