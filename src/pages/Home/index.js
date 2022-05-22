import React, { Fragment } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import PostItems from "../../components/PostItems";

export default function Home() {
  const setLocalStorage = () => {
    const data = {
      firstName: "Arash",
      lastName: "Ghafouri",
    };
    localStorage.setItem("name", JSON.stringify(data));
  };

  const removeLocalStorage = () => {
    localStorage.removeItem("name");
  };

  const getLocalStorage = () => {
    const data = localStorage.getItem("name");
  };

  const setSessionStorage = () => {
    const data = {
      firstName: "Arash",
      lastName: "Ghafouri",
    };
    sessionStorage.setItem("user", JSON.stringify(data));
  };

  const removeSessionStorage = () => {
    sessionStorage.removeItem("user");
  };

  const getSessionStorage = () => {
    const data = sessionStorage.getItem("user");
  };

  const setCookie = () => {
    document.cookie =
      "name=Arash; expires=Thu, 9 Sep 2023 12:00:00 UTC; path=/";
  };

  const getCookie = () => {
    const cookie = document.cookie;
  };

  const changeCookie = () => {
    document.cookie =
      "name=Arash; expires=Thu, 9 Sep 2022 12:00:00 UTC; path=/";
  };

  const deleteCookie = () => {
    document.cookie =
      "name=Arash; expires=Thu, 9 Sep 1970 12:00:00 UTC; path=/";
  };

  return (
    <Fragment>
      {/* <button onClick={setLocalStorage}>set localstorage</button>
      <button onClick={removeLocalStorage}>remove localstorage</button>
      <button onClick={getLocalStorage}>get localstorage</button>
      <hr />
      <button onClick={setSessionStorage}>Set Sessionstorage</button>
      <button onClick={removeSessionStorage}>Remove Sessionstorage</button>
      <button onClick={getSessionStorage}>Get Sessionstorage</button>
      <hr />
      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={getCookie}>Get Cookie</button>
      <button onClick={changeCookie}>Change Cookie</button>
      <button onClick={deleteCookie}>Delete Cookie</button>
      <hr /> */}
      <PostItems />
    </Fragment>
  );
}
