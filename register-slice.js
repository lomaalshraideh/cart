import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	Users: JSON.parse(localStorage.getItem("users")) || [],
};

export const registerSlice = createSlice({
	initialState,

	name: "registerSlice",
	reducers: {
		addUser: (state, action) => {
			let currenntUsers = JSON.parse(localStorage.getItem("users")) || [];
			currenntUsers.push(action.payload);
			localStorage.setItem("users", JSON.stringify(currenntUsers));
			state.Users = currenntUsers;
			console.log(currenntUsers);
		},
	},
});
export const { addUser } = registerSlice.actions;
export default registerSlice.reducer;
