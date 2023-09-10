import { createSlice } from "@reduxjs/toolkit";


    const initialState = {
		currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
	}
        export const logoutSlice = createSlice({
            initialState,
	name: "logoutSlice",
	reducers: {
		logout: (state) => {
			state.isLoggedIn = false;
			state.currentUser = null;
			localStorage.removeItem("currentUser");
	
		},
	},
});
export const { logout } = logoutSlice.actions;
export default logoutSlice.reducer;
