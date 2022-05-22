import React from "react";
import Hat from "../../assets/images/girl_hat.jpg";

function PostItemContent({ body }) {
  return (
    <div className='post-item-content'>
      <img src={Hat} alt='' />
      <p>{body}</p>
    </div>
  );
}
export default PostItemContent;
