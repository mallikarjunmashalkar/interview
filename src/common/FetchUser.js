export const fetchUserList = async () => {
  try {
    const response = await fetch("");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const userList = await response.json();
    return userList;
  } catch (error) {
    console.error("Error fetching user list:", error);
    throw error;
  }
};
