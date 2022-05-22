import React from "react";
import "./PostItem.scss";
import PostItemHeader from "../PostItemHeader";
import PostItemContent from "../PostItemContent";
import PostItemFooter from "../PostItemFooter";

function PostItem({ item }) {
  
  return (
    <div className='post-item'>
      <PostItemHeader title={item.title} />
      <PostItemContent body={item.body} />
      <PostItemFooter id={item.id} />
    </div>
  );
}
export default PostItem;
