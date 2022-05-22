import React from "react";
import { Link } from "react-router-dom";

function PostItemFooter({ id }) {
  return (
    <div className='post-item-footer'>
      <Link to={`/blog/${id}`}>Read More</Link>
    </div>
  );
}
export default PostItemFooter;
