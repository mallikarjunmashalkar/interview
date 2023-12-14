export const getAPI = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const userList = await data.json();
  console.log(userList);
  return userList;
};

export const postAPI = async () => {
  const data = await fetch("https://dummyjson.com/products/add'");
  const userList = await data.json();
  console.log(userList);
  return userList;
};
