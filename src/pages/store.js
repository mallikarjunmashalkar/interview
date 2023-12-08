import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../common/Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, title, description, dueDate, status, remark } =
        action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.title = title;
        uu.description = description;
        uu.dueDate = dueDate;
        uu.status = status;
        uu.remark = remark;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchUserList } from './FetchUser'

// // Use an async function to get the initial state from the API
// const getInitialState = async () => {
//   try {
//     const userList = await fetchUserList();
//     return userList;
//   } catch (error) {
//     console.error('Error getting initial user list:', error);
//     throw error;
//   }
// };

// const userSlice = createSlice({
//   name: "users",
//   initialState: [], // Initialize state as an empty array, the actual data will be fetched asynchronously
//   reducers: {
//             addUser:(state,action)=>{
//             console.log(action)
//            state.push(action.payload)
//         },
//         updateUser:(state, action) =>{
//             const {id,title, description,dueDate,status, remark} = action.payload;
//             const uu = state.find(user => user.id == id)
//             if(uu){
//                 uu.title = title;
//                 uu.description = description;
//                 uu.dueDate = dueDate;
//                 uu.status = status;
//                 uu.remark = remark;
//             }
//         },
//         deleteUser:(state,action) => {
//             const {id} = action.payload;
//             const uu = state.find(user => user.id == id)
//             if(uu){
//                return state.filter(f=>f.id !== id);
//             }
//         }
//   },
// });

// // Use the `extraReducers` property to handle the asynchronous action of fetching data
// userSlice.extraReducers = (builder) => {
//   builder.addCase(getInitialState.fulfilled, (state, action) => {
//     // Set the fetched data as the new state
//     return action.payload;
//   });
// };

// export const { addUser, updateUser, deleteUser } = userSlice.actions;
// export default userSlice.reducer;
