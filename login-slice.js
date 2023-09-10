import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUsers: JSON.parse(localStorage.getItem("users")) || [],
	currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,

	email: "",
	password: "",
	isLoggedIn: false,
};
export const loginSlice = createSlice({
	initialState,
	name: "loginSlice",
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		login: (state) => {
			state.isLoggedIn = true;
			const currentUser = state.currentUsers.find(
				(user) => user.email === state.email
			);
			if (currentUser) {
				state.currentUser = currentUser;
				localStorage.setItem("currentUser", JSON.stringify(currentUser));
			}
		
		},
	
	},
});

export const {  setEmail,setPassword,login} = loginSlice.actions;
export default loginSlice.reducer;
