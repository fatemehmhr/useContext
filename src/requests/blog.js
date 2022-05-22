import axios from "axios";
import request from "./axios";

export const blogItems = async (limit = 10) => {
  return await request.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
};

export const blogItem = async (id) => {
  return await request.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
 