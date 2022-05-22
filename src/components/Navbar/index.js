import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [listShowState, setListShowState] = useState(false);

  function listOpen() {
    setListShowState(!listShowState);
  }

  return (
    <div className='header'>
      <span onClick={listOpen} id={"list-button"}>
        <FontAwesomeIcon icon={faList} />
      </span>
      <ul className={`menu ${listShowState ? "show" : ""}`}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/inspiration'>Inspiration</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <SearchBox show={listShowState} />
    </div>
  );
}

export default Navbar;
