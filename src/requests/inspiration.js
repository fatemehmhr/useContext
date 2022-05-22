import axios from "axios";

export const inspirationItems = async (limit) => {
  return await axios.get(
    `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
  );
};
