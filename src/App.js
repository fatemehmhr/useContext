import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import HeaderBanner from "./components/HeaderBanner";
import ContentWrapper from "./components/ContentWrapper";
import Home from "./pages/Home";
import BlogItem from "./pages/BlogItem";
import Blog from "./pages/Blog";
import Search from "./pages/Search";
import Inspiration from "./pages/Inspiration";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { postItemsContext } from "./postItemsContext";
import { useState } from "react";

export default function App() {
  
  const [posts,setPosts] = useState([]);
  const value = {
    posts,setPosts
  }
  return (
    <Router>
      <Navbar />
      <HeaderBanner>
        <Header />
        <Banner />
      </HeaderBanner>
      
        <postItemsContext.Provider value={value}>
          <ContentWrapper>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/blog'>
                <Blog />
              </Route>
              <Route exact path='/blog/:id'>
                <BlogItem />
              </Route>
              <Route exact path='/search'>
                <Search />
              </Route>
              <Route exact path='/inspiration'>
                <Inspiration />
              </Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/signup'>
                <Signup />
              </Route>
            </Switch>
            </ContentWrapper>
        </postItemsContext.Provider>
      
    </Router>

 
  );
}


