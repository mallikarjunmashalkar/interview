import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    userData(state, action) {
      state.userList = { ...action.payload.userList };
    },
    addUserData(state, action) {
      state.addUserList = { ...action.payload.addUserList };
    },
    selectUser: (state, action) => {
      state.selectedUser = { ...action.payload.selectedUser };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
