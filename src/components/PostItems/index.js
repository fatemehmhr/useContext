import React, { useContext,  useState, useEffect } from "react";
import PostItem from "../PostItem";
import {blogItems} from "../../requests/blog";
import {postItemsContext} from "../../postItemsContext";

function PostItems() {

  const {posts,setPosts} = useContext(postItemsContext);
  const [loading,setLoading] = useState();
  const [error,setError] = useState(null);

  useEffect(() => {
    getBlogItems(2);
  }, []);

  const getBlogItems = async (limit) => {
    
    setLoading(true);
    await blogItems(limit)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='col col-left'>
        {loading && "loading..."}
        {posts.map((item, index) => {
        return <PostItem item={item} key={item.id} />;
         })}
       </div>
  );
}

export default PostItems;
