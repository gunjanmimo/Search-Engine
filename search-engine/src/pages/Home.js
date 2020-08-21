import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../Search";

export default function Home() {
  return (
    <div className="home">
      {/* home header */}
      <div className="home__header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/*Icon*/}
          <AppsIcon />
          {/*Avatar*/}
          <Avatar />
        </div>
      </div>

      {/* home body */}
      <div className="home__body">
        <img
          src="https://pngimg.com/uploads/google/google_PNG19644.png"
          alt=""
          srcset=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}
