import React, { useState, useEffect } from "react";
import AvatarSmoke from "../../assets/images/avatar_smoke.jpg";
import "./PopularPosts.scss";
import { posts } from "../../posts";
import { blogItems } from "../../requests/blog";

export default function PopularPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getBlogItems(5);
  }, []);

  const getBlogItems = async (limit) => {
    setLoading(true);
    await blogItems(limit)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <ul>
      {posts.map((item) => {
        return (
          <li key={item.id}>
            <img src={AvatarSmoke} alt='' />
            <p>{item.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
