import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostItemContent from "../../components/PostItemContent";
import PostItemHeader from "../../components/PostItemHeader";
import { posts } from "../../posts";
import { blogItem } from "../../requests/blog";

export default function BlogItem() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const { id } = params;
    getPostItem(id);
  }, []);

  const getPostItem = async (id) => {
    setLoading(true);
    await blogItem(id)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='col col-left'>
      {loading && "loading..."}
      {item !== null && (
        <Fragment>
          <PostItemHeader title={item.title} />
          <PostItemContent body={item.body} />
        </Fragment>
      )}
    </div>
  );
}
