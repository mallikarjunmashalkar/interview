import { useDispatch } from "react-redux";
import { getAPI, deleteAPI, postAPI } from "../common/FetchUser";
import { userActions } from "./store";

export const fetchUserList = async (dispatch) => {
  try {
    const response = await getAPI();
    dispatch(userActions.userData({ userList: response }));
  } catch (error) {
    console.error("Error fetching user list:", error);
    throw error;
  }
};
export const PostUserList = async (dispatch) => {
  try {
    const response = await getAPI();
    dispatch(userActions.addUserData({ addUserList: response }));
  } catch (error) {
    console.error("Error fetching user list:", error);
    throw error;
  }
};

export const deleteUserList = async (id) => {
  console.log(id);
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user with ID ${id}`);
    }
    console.log(`User with ID ${id} deleted successfully`);
  } catch (error) {
    console.error(error);
  }
};

export const UserUpdate = async (dispatch) => {
  try {
    const response = await getAPI();
    dispatch(userActions.userData({ userList: response }));
  } catch (error) {
    console.error("Error fetching user list:", error);
    throw error;
  }
};
export const UserAdd = async (dispatch) => {
  try {
    const response = await postAPI();
    dispatch(userActions.userData({ userList: response }));
  } catch (error) {
    console.error("Error fetching user list:", error);
    throw error;
  }
};
