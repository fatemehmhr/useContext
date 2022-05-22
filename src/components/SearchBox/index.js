import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBox.scss";

export default function SearchBox(props) {
  const history = useHistory();

  const [keyword, setKeyword] = useState("");

  const onChangeInput = (e) => setKeyword(e.target.value);

  const onClickSearch = () => {
    history.push(`/search?keyword=${keyword}`);
  };

  return (
    <div className={`search-box ${props.show ? "show" : ""}`}>
      <input
        type='text'
        name='search'
        onChange={onChangeInput}
        autoComplete={"off"}
      />
      <button onClick={onClickSearch}>Search</button>
    </div>
  );
}
