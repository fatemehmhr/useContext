import React, { useEffect, useState } from "react";
import "./Search.scss";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { posts } from "../../posts";
import PostItem from "../../components/PostItem";

export default function Search() {
  const { search } = useLocation();
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const searchKeyword = queryString.parse(search).keyword;
    setKeyword(searchKeyword);
    const resultSearch = posts.filter((item) => {
      if (item.body.search(searchKeyword) > 0) {
        return item;
      }
    });
    setResult(resultSearch);
  }, [search]);

  return (
    <div className='col col-left'>
      <h2>Search: {keyword}</h2>
      {result.map((item, index) => {
        return <PostItem item={item} key={item.id} />;
      })}
    </div>
  );
}
