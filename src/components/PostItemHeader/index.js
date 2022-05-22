import React from "react";

function PostItemHeader({ title }) {
  return (
    <div className='post-item__header'>
      <h2>{title}</h2>
      <p>
        date: <span>may 2,2016</span>{" "}
      </p>
    </div>
  );
}
export default PostItemHeader;
